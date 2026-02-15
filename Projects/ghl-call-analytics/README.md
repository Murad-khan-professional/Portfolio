# GHL Team Call Analytics

## Overview
This n8n workflow queries GoHighLevel's API to fetch call logs for all team members. It extracts call duration, timestamps, and call counts, then aggregates the data by user and date. The workflow calculates total calls made, total talk time, and average call duration per team member. Processed metrics are pushed to Google Sheets or a dashboard for visualization. The system runs daily on a scheduled trigger.

## Demo
> Video demo will be linked here

## Tech Stack
- n8n
- GoHighLevel REST API
- Google Sheets API
- JavaScript
- Cron Scheduler

## How It Works
A daily cron trigger kicks off the workflow, which pulls call log data from GoHighLevel's API for every team member. The data is aggregated by user and date to calculate total calls, total talk time, and average duration. Processed analytics are then pushed to Google Sheets for visualization and performance tracking.

---
*Part of [Murad Khan's Portfolio](https://murad-khan-portfolio.vercel.app/)*
