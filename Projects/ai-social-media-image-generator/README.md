# AI Social Media Image Generator

## Overview
This n8n workflow automates social media image generation for blog posts using AI. When a new blog post is published or scheduled, the workflow extracts the post title, key points, and featured content. It crafts optimized prompts and sends them to an AI image generation service (DALL-E, Midjourney API, or Stable Diffusion) to create custom visuals tailored to the blog content. The workflow generates multiple image sizes optimized for different platforms--square for Instagram, landscape for Twitter/LinkedIn, and vertical for Stories.

## Demo
> Video demo will be linked here

## Tech Stack
- n8n
- AI Image Generation API (DALL-E/Stable Diffusion)
- Google Drive API
- Image Processing
- CMS Webhook/API

## How It Works
When a new blog post is published or scheduled, the workflow extracts the post title and key content to craft optimized image generation prompts. AI image generation services create custom visuals tailored to the blog content in multiple sizes optimized for different social media platforms. Generated images are processed, resized, and stored in Google Drive, ready for immediate use across Instagram, Twitter, LinkedIn, and Stories.

---
*Part of [Murad Khan's Portfolio](https://murad-khan-portfolio.vercel.app/)*
