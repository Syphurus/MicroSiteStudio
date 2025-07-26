import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    console.log("📧 Newsletter subscription request received for:", email);

    // Validate email
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    console.log("📧 Verifying email transporter...");

    // Verify transporter configuration
    try {
      await transporter.verify();
      console.log("✅ Email transporter configuration is valid");
    } catch (verifyError) {
      console.error("❌ Email transporter verification failed:", verifyError);
      throw verifyError;
    }

    // Admin notification email (to you)
    const adminMailOptions = {
      from: process.env.GMAIL_USER,
      to: "studiomicrosite@gmail.com",
      subject: "📧 New Newsletter Subscription - Microsite Studio",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Newsletter Subscription</title>
          <style>
            body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f4f4f4; }
            .container { max-width: 600px; margin: 0 auto; background: white; padding: 40px; border-radius: 10px; box-shadow: 0 0 20px rgba(0,0,0,0.1); }
            .header { text-align: center; margin-bottom: 30px; }
            .logo { background: linear-gradient(135deg, #dc2626, #b91c1c); color: white; padding: 15px 30px; border-radius: 50px; display: inline-block; font-weight: bold; font-size: 18px; }
            .content { background: #f8f9fa; padding: 30px; border-radius: 8px; margin: 20px 0; }
            .field { margin: 15px 0; }
            .label { font-weight: bold; color: #dc2626; display: inline-block; width: 120px; }
            .value { color: #333; }
            .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 2px solid #dc2626; }
            .highlight { background: linear-gradient(135deg, #dc2626, #b91c1c); color: white; padding: 2px 8px; border-radius: 4px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">📧 MICROSITE STUDIO</div>
              <h2 style="color: #dc2626; margin: 20px 0 0 0;">New Newsletter Subscription!</h2>
            </div>
            
            <div class="content">
              <h3 style="color: #dc2626; margin-top: 0;">📧 Subscriber Details</h3>
              
              <div class="field">
                <span class="label">Email:</span>
                <span class="value highlight">${email}</span>
              </div>
              
              <div class="field">
                <span class="label">Date:</span>
                <span class="value">${new Date().toLocaleDateString()}</span>
              </div>
              
              <div class="field">
                <span class="label">Time:</span>
                <span class="value">${new Date().toLocaleTimeString()}</span>
              </div>
            </div>
            
            <div class="footer">
              <p style="margin: 0; color: #666;">
                🚀 <strong>Action Required:</strong> Add this subscriber to your newsletter list!
              </p>
              <p style="margin: 10px 0 0 0; color: #dc2626; font-weight: bold;">
                Microsite Studio - Premium Web Design Agency
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Welcome email to subscriber
    const welcomeMailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: "🎉 Welcome to Microsite Studio Newsletter!",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Welcome to Microsite Studio</title>
          <style>
            body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f4f4f4; }
            .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 0 20px rgba(0,0,0,0.1); }
            .header { background: linear-gradient(135deg, #dc2626, #b91c1c); color: white; padding: 40px; text-align: center; }
            .logo { font-size: 28px; font-weight: bold; margin-bottom: 10px; }
            .content { padding: 40px; }
            .welcome-box { background: #f8f9fa; padding: 30px; border-radius: 8px; text-align: center; margin: 20px 0; border-left: 4px solid #dc2626; }
            .benefits { background: #fff; border: 1px solid #e5e7eb; border-radius: 8px; padding: 30px; margin: 20px 0; }
            .benefit-item { display: flex; align-items: center; margin: 15px 0; }
            .benefit-icon { background: #dc2626; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px; font-weight: bold; }
            .cta-button { background: linear-gradient(135deg, #dc2626, #b91c1c); color: white; padding: 15px 30px; text-decoration: none; border-radius: 50px; display: inline-block; font-weight: bold; margin: 20px 0; transition: transform 0.3s ease; }
            .footer { background: #1f2937; color: #9ca3af; padding: 30px; text-align: center; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">🚀 MICROSITE STUDIO</div>
              <h1 style="margin: 0; font-size: 24px;">Welcome to Our Newsletter!</h1>
            </div>
            
            <div class="content">
              <div class="welcome-box">
                <h2 style="color: #dc2626; margin-top: 0;">🎉 Thank You for Subscribing!</h2>
                <p style="font-size: 16px; margin-bottom: 0;">
                  You're now part of an exclusive community of fitness professionals who are serious about growing their business online.
                </p>
              </div>
              
              <div class="benefits">
                <h3 style="color: #dc2626; text-align: center; margin-top: 0;">What You'll Get:</h3>
                
                <div class="benefit-item">
                  <div class="benefit-icon">💡</div>
                  <div>
                    <strong>Expert Web Design Tips</strong><br>
                    <span style="color: #666;">Latest trends and best practices for fitness websites</span>
                  </div>
                </div>
                
                <div class="benefit-item">
                  <div class="benefit-icon">💪</div>
                  <div>
                    <strong>Fitness Industry Insights</strong><br>
                    <span style="color: #666;">Marketing strategies that work for coaches and gym owners</span>
                  </div>
                </div>
                
                <div class="benefit-item">
                  <div class="benefit-icon">🎁</div>
                  <div>
                    <strong>Exclusive Offers</strong><br>
                    <span style="color: #666;">Special discounts and early access to our premium services</span>
                  </div>
                </div>
                
                <div class="benefit-item">
                  <div class="benefit-icon">📈</div>
                  <div>
                    <strong>Business Growth Tips</strong><br>
                    <span style="color: #666;">Proven strategies to scale your fitness business online</span>
                  </div>
                </div>
              </div>
              
              <div style="text-align: center; margin: 30px 0;">
                <a href="https://microsite-studio.com" class="cta-button">
                  🚀 Explore Our Services
                </a>
              </div>
              
              <p style="text-align: center; color: #666;">
                <strong>Ready to transform your fitness business?</strong><br>
                We're here to help you create a premium online presence that converts visitors into clients.
              </p>
            </div>
            
            <div class="footer">
              <p style="margin: 0 0 10px 0;">
                <strong>Microsite Studio</strong> - Premium Web Design for Fitness Professionals
              </p>
              <p style="margin: 0; font-size: 14px;">
                You can unsubscribe at any time by replying to this email.
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    console.log("📧 Sending admin notification email...");

    // Send admin notification
    try {
      await transporter.sendMail(adminMailOptions);
      console.log("✅ Admin notification email sent successfully");
    } catch (adminEmailError) {
      console.error(
        "❌ Failed to send admin notification email:",
        adminEmailError
      );
      throw adminEmailError;
    }

    console.log("📧 Sending welcome email to subscriber...");

    // Send welcome email to subscriber
    try {
      await transporter.sendMail(welcomeMailOptions);
      console.log("✅ Welcome email sent successfully");
    } catch (welcomeEmailError) {
      console.error("❌ Failed to send welcome email:", welcomeEmailError);
      throw welcomeEmailError;
    }

    console.log("✅ Newsletter subscription processed successfully");

    return NextResponse.json(
      { message: "Successfully subscribed to newsletter!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Newsletter subscription error:", error);
    return NextResponse.json(
      { error: "Failed to process newsletter subscription. Please try again." },
      { status: 500 }
    );
  }
}
