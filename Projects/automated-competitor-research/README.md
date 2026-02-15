# Automated Competitor Research Pipeline

## Overview
This n8n workflow automates end-to-end competitor research triggered by a simple form submission. Users input competitor details, and the system starts scraping Meta Ad Library using Apify actors to pull active ad creatives. Videos and images are processed through separate sub-workflows for structured analysis. The workflow calls Jina AI to extract website content, messaging, and product positioning. For review data, it hits APIs from Reviews.io, Trustpilot, and TrustedShops to collect customer feedback and sentiment. All outputs are organized automatically--files go into labeled Google Drive folders, and structured data populates Google Sheets for easy comparison.

## Demo
> Video demo will be linked here

## Tech Stack
- n8n
- Apify
- Jina AI
- Reviews.io API
- Trustpilot API
- TrustedShops API
- Google Drive API
- Google Sheets API

## How It Works
A form submission triggers the workflow, which scrapes Meta Ad Library via Apify for active ad creatives and uses Jina AI to extract competitor website content and positioning. Customer review data is collected from Reviews.io, Trustpilot, and TrustedShops for sentiment analysis. All results are organized into labeled Google Drive folders and structured Google Sheets, delivering a comprehensive competitor analysis with zero manual research effort.

---
*Part of [Murad Khan's Portfolio](https://murad-khan-portfolio.vercel.app/)*
