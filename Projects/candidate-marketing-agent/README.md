# Candidate Marketing Agent (CMA)

## Overview
This n8n workflow automates the entire candidate marketing process for recruitment agencies. It pulls "Most Placeable Candidate" (MPC) records from Bullhorn CRM, uses Claude AI with web search to research and identify suitable companies within the candidate's commute radius, enriches company data through Apollo.io, pushes everything into Bullhorn CRM, and generates personalized outreach emails with auto-scheduled follow-up tasks—all without manual intervention. The system runs across 7 modular sub-workflows covering AI research, CRM duplicate checking, company/contact creation, and email generation.

## Demo
> Video demo will be linked here

## Tech Stack
- n8n
- Claude AI (Haiku for research, Sonnet for email generation)
- Apollo.io API
- Bullhorn CRM REST API
- RestCountries API
- JavaScript
- OAuth2 Authentication
- Sub-workflows (modular architecture)

## How It Works
The workflow queries Bullhorn for MPC candidates, cleans and structures their data (skills, education, address), then passes each candidate to Claude AI which searches the web to find matching companies within commute distance. Found companies are checked against Bullhorn to prevent duplicates, then enriched via Apollo.io and pushed into the CRM with linked contacts. Claude Sonnet generates personalized outreach emails referencing specific firm details, which are stored as Bullhorn notes with auto-created follow-up tasks for recruiters.

---
*Part of [Murad Khan's Portfolio](https://murad-khan-portfolio.vercel.app/)*
