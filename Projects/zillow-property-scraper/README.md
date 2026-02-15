# Zillow Property & Agent Data Scraper

## Overview
This n8n workflow automates property and real estate agent data extraction from Zillow listings. The workflow accepts search parameters--location, property type, price range--and uses web scraping techniques to collect listing data from Zillow. For each property, it extracts details including address, price, bedrooms, bathrooms, square footage, listing date, and property images. The workflow also captures agent information--name, brokerage, contact details, and listing count. Data is cleaned, deduplicated, and structured into organized Google Sheets.

## Demo
> Video demo will be linked here

## Tech Stack
- n8n
- Apify/Web Scraping
- Google Sheets API
- JavaScript
- Proxy Management

## How It Works
The workflow accepts search parameters such as location, property type, and price range, then scrapes Zillow listings using Apify to extract property and agent data. Extracted details including address, price, square footage, agent name, and brokerage are cleaned and deduplicated automatically. All structured data is organized into Google Sheets for easy analysis and outreach.

---
*Part of [Murad Khan's Portfolio](https://murad-khan-portfolio.vercel.app/)*
