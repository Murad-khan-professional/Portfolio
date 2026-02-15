# Trello to Slack Notifications

## Overview
This n8n workflow automates real-time notifications from Trello to Slack whenever a card is created or updated. The workflow uses Trello webhooks to detect card events--new cards, status changes, label updates, or due date modifications. When triggered, it extracts card details including title, description, assigned members, and the board/list context. The data is formatted into a clean Slack message with relevant fields and links back to the Trello card.

## Demo
> Video demo will be linked here

## Tech Stack
- n8n
- Trello Webhooks
- Slack API
- JavaScript

## How It Works
Trello webhooks detect card events such as creation, status changes, label updates, or due date modifications and trigger the n8n workflow in real time. The workflow extracts card details including title, description, assigned members, and board context, then formats the information into a clean Slack message. Each notification includes a direct link back to the Trello card, keeping the team informed without leaving Slack.

---
*Part of [Murad Khan's Portfolio](https://murad-khan-portfolio.vercel.app/)*
