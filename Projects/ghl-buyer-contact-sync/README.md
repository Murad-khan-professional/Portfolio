# GHL New Buyer Contact Sync

## Overview
This n8n workflow listens for new buyer contacts in GoHighLevel using a webhook trigger. When a contact is created, the workflow receives the payload and starts cleaning the data--removing extra spaces, formatting phone numbers with regex, and validating email format. It then maps required fields like name, email, phone, source, and tags into the structure expected by the target CRM or database. The workflow calls the destination API to push the contact record. If the API returns an error or duplicate flag, the workflow logs it and skips the entry. Successful pushes are logged with timestamps for tracking.

## Demo
> Video demo will be linked here

## Tech Stack
- n8n
- GoHighLevel Webhook
- REST API
- JavaScript
- Regex

## How It Works
A GoHighLevel webhook triggers the n8n workflow whenever a new buyer contact is created. The workflow cleans and validates the incoming data using regex and JavaScript, then pushes the formatted contact record to the destination system via REST API. Error handling ensures duplicates are skipped and all successful syncs are logged with timestamps.

---
*Part of [Murad Khan's Portfolio](https://murad-khan-portfolio.vercel.app/)*
