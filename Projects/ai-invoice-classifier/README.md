# AI Invoice Classifier

## Overview
This n8n workflow automates invoice classification using AI-powered document analysis. When invoices arrive via email, upload, or API trigger, the workflow extracts the document and sends it through an OCR and AI classification pipeline. The system identifies key invoice fields--vendor name, invoice number, date, line items, totals, and tax amounts. Based on configurable rules and AI analysis, invoices are categorized by type, department, or expense category. Classified invoices are routed to the appropriate folder in cloud storage and logged in a spreadsheet or database with all extracted metadata.

## Demo
> Video demo will be linked here

## Tech Stack
- n8n
- OCR API
- AI/ML Classification
- Google Drive API
- Google Sheets API
- Email Integration

## How It Works
Invoices arriving via email, upload, or API trigger are processed through an OCR and AI classification pipeline that extracts key fields such as vendor name, invoice number, line items, and totals. The AI categorizes each invoice by type, department, or expense category based on configurable rules. Classified invoices are automatically routed to the correct cloud storage folder and logged with full metadata in a spreadsheet for auditing and reporting.

---
*Part of [Murad Khan's Portfolio](https://murad-khan-portfolio.vercel.app/)*
