# Notion Monthly KPI Auto-Creation

## Overview
The Notion Monthly KPI Auto-Creation automation uses a two-layer n8n workflow to automatically generate monthly KPI entries for all active team members. The main workflow pulls data from the Notion Team Members database, filters members with Status = Active, and passes each member's context into a subworkflow. The subworkflow retrieves all existing KPI records for that member, normalizes date formats, and checks whether a KPI entry already exists for the current month. If not, it creates a new record in the Evaluation Monthly database using a Notion Create Page call; otherwise, it cleanly skips creation. This architecture ensures accurate, duplicate-free KPI entries while maintaining consistent data formatting and removing all manual effort from the monthly KPI update process.

## Demo
> Video demo will be linked here

## Tech Stack
- n8n
- Notion API
- JavaScript
- Cron Scheduler

## How It Works
A scheduled n8n workflow queries the Notion Team Members database for active members and passes each one into a subworkflow. The subworkflow checks for existing KPI entries for the current month and only creates new records when none exist, ensuring duplicate-free automation. This two-layer architecture eliminates manual monthly KPI setup while maintaining data integrity across the entire team.

---
*Part of [Murad Khan's Portfolio](https://murad-khan-portfolio.vercel.app/)*
