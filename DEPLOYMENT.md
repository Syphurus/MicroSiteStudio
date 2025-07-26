# Deployment Guide - Microsite Studio

This guide will help you deploy your Microsite Studio website to production.

## Pre-Deployment Checklist

### ✅ Environment Variables

Ensure all required environment variables are configured in your hosting platform:

```bash
GMAIL_USER=studiomicrosite@gmail.com
GMAIL_APP_PASSWORD=your-production-app-password
NEXT_PUBLIC_DOMAIN=https://yourdomain.com
```

### ✅ Build Test

Run a production build locally to ensure everything works:

```bash
npm run build
npm run start
```

## Deployment Options

### Option 1: Vercel (Recommended)

1. **Connect Repository**

   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Configure project settings

2. **Environment Variables**

   - Go to Project Settings → Environment Variables
   - Add all required variables from `.env.example`
   - Make sure to use production values

3. **Domain Setup**

   - Go to Project Settings → Domains
   - Add your custom domain
   - Configure DNS settings as instructed

4. **Deploy**
   - Push to main branch triggers automatic deployment
   - Monitor deployment in Vercel dashboard

### Option 2: Netlify

1. **Build Settings**

   ```
   Build command: npm run build
   Publish directory: .next
   Node version: 20.x
   ```

2. **Environment Variables**

   - Site Settings → Environment Variables
   - Add all required variables

3. **Redirects**
   Create `public/_redirects`:
   ```
   /*    /index.html   200
   ```

### Option 3: Self-Hosted (VPS/Server)

1. **Server Requirements**

   - Node.js 20.x or higher
   - PM2 or similar process manager
   - Nginx or Apache (reverse proxy)
   - SSL certificate

2. **Setup Process**

   ```bash
   # Clone repository
   git clone <your-repo>
   cd new_website_microsite

   # Install dependencies
   npm ci --production

   # Build application
   npm run build

   # Start with PM2
   pm2 start npm --name "microsite-studio" -- start
   ```

3. **Nginx Configuration**
   ```nginx
   server {
       listen 80;
       listen 443 ssl;
       server_name yourdomain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

## Post-Deployment Steps

### 1. Test Functionality

- [ ] Contact form sends emails
- [ ] Newsletter subscription works
- [ ] All buttons and navigation work
- [ ] Images load correctly
- [ ] Mobile responsiveness

### 2. SEO Setup

- [ ] Submit sitemap to Google Search Console
- [ ] Verify Google Analytics (if configured)
- [ ] Test page speed with PageSpeed Insights
- [ ] Check social media previews

### 3. Security Verification

- [ ] SSL certificate is active
- [ ] Security headers are present
- [ ] No sensitive data exposed in client-side code

### 4. Performance Monitoring

- [ ] Set up monitoring (Vercel Analytics, etc.)
- [ ] Configure error tracking
- [ ] Monitor Core Web Vitals

## Environment Variables Reference

### Required

```bash
GMAIL_USER=studiomicrosite@gmail.com
GMAIL_APP_PASSWORD=your-16-character-app-password
```

### Optional

```bash
NEXT_PUBLIC_DOMAIN=https://yourdomain.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXTAUTH_SECRET=your-secret-key-for-auth
```

## Troubleshooting

### Common Issues

1. **Email not sending**

   - Verify Gmail app password is correct
   - Check 2FA is enabled on Gmail account
   - Ensure environment variables are set

2. **Build failures**

   - Check Node.js version (20.x recommended)
   - Clear .next folder and rebuild
   - Verify all dependencies are installed

3. **Images not loading**
   - Check image file paths
   - Verify images are in public folder
   - Configure image optimization in next.config.ts

### Performance Optimization

1. **Image Optimization**

   - Use WebP/AVIF formats
   - Implement lazy loading
   - Optimize image sizes

2. **Bundle Analysis**

   ```bash
   ANALYZE=true npm run build
   ```

3. **Caching Strategy**
   - Configure CDN caching
   - Implement service worker (if needed)
   - Use Next.js built-in caching

## Support

For deployment issues:

- Check [Next.js deployment docs](https://nextjs.org/docs/deployment)
- Contact hosting provider support
- Review deployment logs for errors

---

**Last Updated**: $(date)
**Version**: Production Ready v1.0
