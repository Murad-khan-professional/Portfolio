# SWASH Booking Sync

## Overview
This n8n workflow synchronizes booking data from the SWASH platform to external systems for unified scheduling management. When a new booking is created, modified, or cancelled in SWASH, the workflow captures the event via webhook or scheduled polling. It extracts booking details including customer information, service type, date/time, location, assigned staff, and payment status. The workflow transforms the data to match the target system's format and syncs it to Google Calendar for scheduling visibility, a spreadsheet for reporting, and optionally to accounting software for invoicing.

## Demo
> Video demo will be linked here

## Tech Stack
- n8n
- SWASH API/Webhooks
- Google Calendar API
- Google Sheets API
- JavaScript

## How It Works
Booking events from the SWASH platform are captured via webhook or scheduled polling whenever a booking is created, modified, or cancelled. The workflow extracts and transforms booking details to sync with Google Calendar for scheduling, Google Sheets for reporting, and optionally accounting software for invoicing. This multi-target synchronization ensures all teams have real-time visibility into booking activity across every connected system.

---
*Part of [Murad Khan's Portfolio](https://murad-khan-portfolio.vercel.app/)*
