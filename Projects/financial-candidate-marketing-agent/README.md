# Financial Planning Companies Monitor & Bullhorn CRM Sync (FCMA)

## Overview
This n8n workflow automates the entire lead generation and CRM data entry process for financial planning and wealth management companies. Users submit a form with filters for location, employee range, industry tags (Financial Services, IFA, Wealth Management, FCA authorized, etc.), and job titles. The system queries Apollo.io to find matching companies, filters out unsuitable organizations like banks and large networks, enriches company data, and pushes complete records into Bullhorn CRM along with associated contacts and people. Hash-based pagination tracking allows the workflow to resume from the last processed page across multiple runs.

## Demo
> Video demo will be linked here

## Tech Stack
- n8n
- Apollo.io API
- Bullhorn CRM REST API
- JavaScript
- n8n Data Tables (state management)
- Form Triggers
- Sub-workflows (modular architecture)
- OAuth2 Authentication
- Hash-based Pagination Tracking

## How It Works
A form submission triggers the workflow with filter criteria (location, employee count, industry, job titles, funding dates). The system generates a hash of the filters for pagination tracking, then queries Apollo.io for matching companies. A JavaScript filter excludes banks, building societies, and large networks. Each valid company is enriched with Apollo.io data and pushed to Bullhorn CRM via a sub-workflow, followed by fetching and creating associated people and contact records. Authentication is centralized through a dedicated token management sub-workflow.

---
*Part of [Murad Khan's Portfolio](https://murad-khan-portfolio.vercel.app/)*
