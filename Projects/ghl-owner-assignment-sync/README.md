# GHL Owner Assignment & Sheet Sync

## Overview
This n8n workflow reads new entries from the EOD Tracking Sheet, looping through each owner tab to find contacts with blank assignment status. It routes these contacts to sub-workflows that search GoHighLevel CRM by phone or email. If a match is found, the workflow assigns the contact to the correct owner using GHL's API and writes back the status as "assigned" to the sheet. If no match is found, it marks the row as "not assigned." Duplicates are flagged separately.

## Demo
> Video demo will be linked here

## Tech Stack
- n8n
- Google Sheets API
- GoHighLevel REST API
- JavaScript
- Webhook Triggers

## How It Works
The workflow scans the EOD Tracking Sheet for unassigned contacts across owner tabs and searches GoHighLevel CRM for matching records by phone or email. Matched contacts are assigned to the correct owner via GHL's API and the sheet is updated with the assignment status. Unmatched entries are marked accordingly and duplicates are flagged, ensuring clean and accurate contact ownership tracking.

---
*Part of [Murad Khan's Portfolio](https://murad-khan-portfolio.vercel.app/)*
