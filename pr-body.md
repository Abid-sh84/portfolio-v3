## What's New

### 📝 New Blog Post
**How to Deploy a MERN Stack App on VPS with Nginx, PM2 and SSL — Everything I Learned**

A real, honest deployment journey documenting every phase of deploying QuickBite (MERN stack food delivery app) on an Ubuntu VPS. Covers:
- SSH keys for private repo deployment
- Nginx reverse proxy setup & configuration
- Let's Encrypt SSL with Certbot
- UFW firewall configuration
- WebSocket (Socket.IO) + REST API coexistence
- Firebase Cloud Messaging in production
- 13 real problems and their solutions
- 10 comprehensive FAQs

**Route:** `/blog/how-to-deploy-mern-stack-app-on-vps`

---

### ✨ New Feature: FAQPage Schema (All Blogs)
- Added `generateFAQSchema()` in `lib/seo.js` — automatically extracts FAQ Q&A pairs from any blog's MDX content
- Integrated FAQ JSON-LD rendering in `app/blog/[slug]/page.js`
- **Works for ALL existing blogs** that have a 'Frequently Asked Questions' section — enables Google FAQ rich snippets automatically

---

### Files Changed
| File | Change |
|------|--------|
| `content/blogs/how-to-deploy-mern-stack-app-on-vps.mdx` | New blog post (MDX with frontmatter, TOC, FAQs) |
| `public/mern-vps-deployment.webp` | Cover image for the blog |
| `lib/seo.js` | Added `generateFAQSchema()` function |
| `app/blog/[slug]/page.js` | Integrated FAQ schema rendering |

### ✅ Build
- `next build` passes successfully
- Static page generated at `/blog/how-to-deploy-mern-stack-app-on-vps`
