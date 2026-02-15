# Trello & Google Sheets Deal Sync

## Overview
This n8n workflow listens to a dedicated Slack channel for deal-related messages using a webhook trigger. When someone posts an update about an offer (accepted, declined, pending), the workflow parses the message using regex to extract deal ID, status, and notes. It then searches Trello via API to find the matching card and updates the status field accordingly. The same data is written to a Google Sheet, updating the corresponding row with deal ID, current status, timestamp, and any notes.

## Demo
> Video demo will be linked here

## Tech Stack
- n8n
- Slack API
- Trello REST API
- Google Sheets API
- Regex
- JavaScript

## How It Works
Deal updates posted in a Slack channel are captured via webhook and parsed with regex to extract the deal ID, status, and notes. The workflow locates the matching Trello card and updates its status, while simultaneously writing the same data to a Google Sheet for centralized tracking. This dual-sync approach keeps both Trello and the spreadsheet in perfect alignment with real-time deal activity.

---
*Part of [Murad Khan's Portfolio](https://murad-khan-portfolio.vercel.app/)*
