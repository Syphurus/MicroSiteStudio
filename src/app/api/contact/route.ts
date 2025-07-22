import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service: string;
  budget?: string;
  message: string;
}

// Create transporter using Gmail
const createTransporter = () => {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });
};

// Email template for admin notification
const getAdminEmailTemplate = (data: ContactFormData) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #dc2626, #ef4444); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #dc2626; }
        .value { margin-top: 5px; padding: 8px; background: white; border-radius: 4px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🚀 New Contact Form Submission</h1>
          <p>You have received a new inquiry through your Microsite Studio website!</p>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">Name:</div>
            <div class="value">${data.name}</div>
          </div>
          <div class="field">
            <div class="label">Email:</div>
            <div class="value">${data.email}</div>
          </div>
          ${
            data.company
              ? `
          <div class="field">
            <div class="label">Company:</div>
            <div class="value">${data.company}</div>
          </div>
          `
              : ""
          }
          ${
            data.phone
              ? `
          <div class="field">
            <div class="label">Phone:</div>
            <div class="value">${data.phone}</div>
          </div>
          `
              : ""
          }
          <div class="field">
            <div class="label">Service Needed:</div>
            <div class="value">${data.service}</div>
          </div>
          ${
            data.budget
              ? `
          <div class="field">
            <div class="label">Budget Range:</div>
            <div class="value">${data.budget}</div>
          </div>
          `
              : ""
          }
          <div class="field">
            <div class="label">Project Details:</div>
            <div class="value">${data.message}</div>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
};

// Email template for client thank you
const getClientEmailTemplate = (name: string) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #dc2626, #ef4444); color: white; padding: 30px; border-radius: 8px 8px 0 0; text-align: center; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
        .logo { font-size: 24px; font-weight: bold; margin-bottom: 10px; }
        .cta { background: linear-gradient(135deg, #dc2626, #ef4444); color: white; padding: 12px 24px; border-radius: 6px; text-decoration: none; display: inline-block; margin: 20px 0; }
        .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo">🚀 Microsite Studio</div>
          <h1>Thank You for Contacting Us!</h1>
        </div>
        <div class="content">
          <p>Hi ${name},</p>
          
          <p>Thank you for reaching out to Microsite Studio! We've received your inquiry and are excited about the possibility of working together on your project.</p>
          
          <p><strong>What happens next?</strong></p>
          <ul>
            <li>Our team will review your project details within 24 hours</li>
            <li>We'll prepare a customized proposal tailored to your needs</li>
            <li>One of our experts will contact you to discuss your vision</li>
          </ul>
          
          <p>In the meantime, feel free to check out our portfolio and see how we've helped other fitness businesses transform their digital presence.</p>
          
          <a href="https://micrositestudio.com/portfolio" class="cta">View Our Portfolio</a>
          
          <p>We're committed to creating premium websites that convert visitors into paying clients. Your success is our priority!</p>
          
          <p>Best regards,<br>
          <strong>The Microsite Studio Team</strong></p>
          
          <div class="footer">
            <p>Microsite Studio - Premium Web Design for Fitness Professionals</p>
            <p>Email: studiomicrosite@gmail.com</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
};

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.service || !data.message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    const transporter = createTransporter();

    // Verify transporter configuration
    try {
      await transporter.verify();
      console.log('✅ Email transporter configuration is valid');
    } catch (verifyError) {
      console.error('❌ Email transporter verification failed:', verifyError);
      throw new Error('Email configuration invalid');
    }

    // Send email to admin (you)
    console.log('📧 Sending admin email...');
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: "studiomicrosite@gmail.com",
      subject: `🚀 New Contact Form Submission - ${data.name}`,
      html: getAdminEmailTemplate(data),
      replyTo: data.email,
    });
    console.log('✅ Admin email sent successfully');

    // Send thank you email to client
    console.log('📧 Sending thank you email to client...');
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: data.email,
      subject: "Thank You for Contacting Microsite Studio! 🚀",
      html: getClientEmailTemplate(data.name),
    });
    console.log('✅ Thank you email sent successfully');

    return NextResponse.json(
      { message: "Emails sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Error sending email:", error);
    
    // More detailed error for debugging
    if (error instanceof Error) {
      console.error("Error details:", {
        message: error.message,
        stack: error.stack,
        name: error.name
      });
    }
    
    return NextResponse.json(
      { 
        error: "Failed to send email",
        details: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    );
  }
}
