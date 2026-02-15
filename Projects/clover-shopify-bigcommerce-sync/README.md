# Clover to Shopify & BigCommerce Sync

## Overview
This automation synchronizes cash sales data from Clover POS to both Shopify and BigCommerce e-commerce platforms. When a cash sale is processed in Clover, the workflow captures transaction details and creates corresponding orders in both online stores, maintaining accurate inventory and sales records across all channels.

## Demo
> Video demo will be linked here

## Tech Stack
- n8n
- Clover POS API
- Shopify API
- BigCommerce API
- JavaScript

## How It Works
When a cash sale is completed in Clover POS, the n8n workflow captures the full transaction details including items, quantities, and payment information. The workflow transforms the data into the format required by each platform and creates matching orders in both Shopify and BigCommerce simultaneously. This cross-channel synchronization ensures inventory levels and sales records remain accurate across all three systems.

---
*Part of [Murad Khan's Portfolio](https://murad-khan-portfolio.vercel.app/)*
