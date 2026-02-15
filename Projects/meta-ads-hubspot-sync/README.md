# Meta Ads to HubSpot/Sheet Lead Sync

## Overview
This n8n workflow automates lead capture from Meta (Facebook/Instagram) Ads directly into a CRM or database. When users submit a lead form on a Meta ad, the workflow receives the lead data via Meta's Lead Ads webhook in real-time. It extracts all form fields--name, email, phone, custom questions, and ad context including campaign name and ad set. The workflow validates and cleans the data, then pushes it to HubSpot and Google Sheets. Leads are tagged with the source campaign for attribution tracking.

## Demo
> Video demo will be linked here

## Tech Stack
- n8n
- Meta Lead Ads Webhook
- HubSpot API
- Google Sheets API
- Slack API

## How It Works
Meta Lead Ads webhook delivers lead form submissions to the n8n workflow in real time, including all form fields and campaign attribution data. The workflow validates and cleans the incoming data, then syncs it to both HubSpot CRM and Google Sheets simultaneously. Each lead is tagged with the source campaign and ad set for accurate attribution tracking across all downstream systems.

---
*Part of [Murad Khan's Portfolio](https://murad-khan-portfolio.vercel.app/)*
