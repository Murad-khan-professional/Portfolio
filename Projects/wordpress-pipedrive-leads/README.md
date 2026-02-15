# WordPress to Pipedrive Lead Capture

## Overview
This n8n workflow connects WordPress form submissions directly to Pipedrive CRM for seamless lead capture. When a visitor submits a contact form on the WordPress site, the workflow receives the data via webhook. It cleans and validates the input--formatting phone numbers, verifying email structure, and normalizing names. The workflow then checks Pipedrive for existing contacts to prevent duplicates. For new leads, it creates a Person record with all captured fields, adds them to the appropriate pipeline, and creates an initial Deal with tags based on the form source.

## Demo
> Video demo will be linked here

## Tech Stack
- n8n
- WordPress Webhooks
- Pipedrive API
- JavaScript
- Regex

## How It Works
WordPress form submissions are received via webhook and the data is cleaned and validated using regex and JavaScript for proper formatting. The workflow checks Pipedrive for existing contacts to prevent duplicates before creating new Person records and associated Deals. Each lead is tagged with the form source and added to the appropriate pipeline, ensuring a seamless flow from website inquiry to CRM tracking.

---
*Part of [Murad Khan's Portfolio](https://murad-khan-portfolio.vercel.app/)*
