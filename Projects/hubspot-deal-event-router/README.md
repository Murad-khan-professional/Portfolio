# HubSpot Deal Event Router

## Overview
This n8n workflow monitors HubSpot for deal creation and update events to synchronize data across connected systems. When a deal is created or modified in HubSpot, the workflow receives the event via webhook and extracts deal properties--amount, stage, close date, associated contacts, company, and custom fields. Based on the deal stage and type, the workflow routes updates to appropriate destinations: project management tools for won deals, notification channels for stage changes, or spreadsheets for pipeline reporting.

## Demo
> Video demo will be linked here

## Tech Stack
- n8n
- HubSpot Webhooks
- Project Management API
- Google Sheets API
- Slack API
- JavaScript

## How It Works
HubSpot deal events are captured via webhook whenever a deal is created or updated, and the workflow extracts all relevant deal properties including amount, stage, and associated contacts. Based on the deal stage and type, updates are intelligently routed to the appropriate destination--project management tools for won deals, Slack for stage change notifications, or Google Sheets for pipeline reporting. This event-driven routing ensures every system stays synchronized with the latest deal activity without manual updates.

---
*Part of [Murad Khan's Portfolio](https://murad-khan-portfolio.vercel.app/)*
