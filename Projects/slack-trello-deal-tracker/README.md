# Slack to Trello Deal Tracker

## Overview
This n8n workflow monitors a Slack channel for incoming deal notifications using a webhook trigger. When a new message comes in, it parses the content to extract deal details like name, contact info, and address fields. The workflow checks if the address field is missing or empty. If so, it calls Trello's API to create a new card in a designated board and list. The card includes all available deal data--deal name, contact number, source, and any notes--so the team has full context. If the address exists, the workflow skips card creation. This setup ensures incomplete deals are flagged instantly in Trello.

## Demo
> Video demo will be linked here

## Tech Stack
- n8n
- Slack API
- Trello REST API
- JavaScript

## How It Works
The workflow listens to a Slack channel via webhook and parses incoming deal messages to extract key details. When a deal is missing address information, it automatically creates a Trello card with all available deal data so the team can follow up. Deals with complete information are skipped, ensuring only incomplete entries are flagged for attention.

---
*Part of [Murad Khan's Portfolio](https://murad-khan-portfolio.vercel.app/)*
