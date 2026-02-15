# Shopify to NetSuite Item Creation

## Overview
This automation connects Shopify with NetSuite ERP for seamless product data synchronization. When new items are created in Shopify, the workflow automatically creates corresponding item records in NetSuite with all relevant product details, pricing, and inventory information, ensuring both systems stay in sync without manual data entry.

## Demo
> Video demo will be linked here

## Tech Stack
- n8n
- Shopify API
- NetSuite API
- JavaScript

## How It Works
When a new product is created in Shopify, the n8n workflow detects the event and extracts all product details including name, SKU, pricing, variants, and inventory levels. The workflow maps Shopify's product data structure to NetSuite's item record format and creates the corresponding entry in NetSuite ERP. This automated synchronization eliminates manual data entry and ensures both platforms maintain consistent and up-to-date product catalogs.

---
*Part of [Murad Khan's Portfolio](https://murad-khan-portfolio.vercel.app/)*
