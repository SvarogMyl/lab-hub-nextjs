# ☁️ Deployment Guide: Cloudflare Pages

This project is optimized for **Cloudflare Pages** using the Next.js App Router. Follow these steps to deploy the Lab Hub.

## 🚀 Manual Deployment (via Dashboard)

1. **Connect GitHub**:
   - Go to your [Cloudflare Dashboard](https://dash.cloudflare.com/).
   - Navigate to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
   - Select the `lab-hub-nextjs` repository.

2. **Configure Build Settings**:
   - **Project Name**: `lab-hub`
   - **Production Branch**: `main`
   - **Framework Preset**: `Next.js`
   - **Build Command**: `npx @cloudflare/next-on-pages` (or `npm run build`)
   - **Build Output Directory**: `.vercel/output/static` (if using next-on-pages) or `.next` (if using standard build).
   
   > [!NOTE]
   > For the most reliable App Router support, Cloudflare recommends using the **Next.js** preset which handles the build automatically.

3. **Environment Variables**:
   - Ensure `NODE_VERSION` is set to `20` or higher.

4. **Deploy**:
   - Click **Save and Deploy**.

## 🛠️ Local Preview (Edge Simulation)

To test how the site behaves in the Cloudflare Edge environment:

1. **Install Adapter**:
   ```bash
   npm install --save-dev @cloudflare/next-on-pages
   ```

2. **Build and Preview**:
   ```bash
   npx @cloudflare/next-on-pages
   npx wrangler pages dev .vercel/output/static
   ```

---

## 🤖 AI Deployment Context
This project uses **Vanilla CSS** and **next/font**, which are highly compatible with Cloudflare's static asset serving. There are no server-side dependencies that require a specific Node.js runtime beyond what Cloudflare's Edge runtime provides for standard Next.js deployments.
