

# spread-sheet – React + TypeScript + Vite

A responsive and feature-rich data table interface built using **React**, **TypeScript**, **Tailwind CSS**, and **Vite**. It displays job request data with status and priority indicators, dynamic links, and action columns.


## 🚀 Features

- ✅ Scrollable, responsive table layout
- ✅ Icons with visual status indicators
- ✅ Sticky headers on scroll
- ✅ Action buttons and interactive rows
- ✅ Placeholder rows for visual consistency
- ✅ Tailwind CSS for clean styling


## ⚙️ Tech Stack

- React + TypeScript
- Vite (blazing fast build tool)
- Tailwind CSS (utility-first CSS)
- React Icons (icon support)

---

## 📦 Setup Instructions

### 1. Install Dependencies
npm install
### 2. Start the development server
npm run dev

##  Project Structure
1.DataTable.tsx — Core table component
2.components/Status.tsx — Visual status badge (e.g., In-process, Complete)
3.components/Priority.tsx — Visual priority indicators (High/Medium/Low)
4.Icons — Imported from react-icons

## Dependencies
1.React
2.TypeScript
3.Tailwind CSS
4.react-icons

## Features
1.Sticky table headers
2.Conditional rendering of rows
3.Empty placeholder rows
4.Clickable links for submitters
5.Responsive scrollable layout
6.Icons with helpful tooltips and semantic coloring

## Trade-offs
1.The table is not virtualized – all rows render at once, which may affect performance for very large datasets.
2.Tailwind CSS is used for rapid styling, which might not suit teams preferring traditional CSS/SASS.
3.Dummy rows are pre-filled statically (generateRows()), which may be swapped with real API data in production.



