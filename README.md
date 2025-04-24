# Real-Time Crypto Price Tracker

A responsive React + Redux Toolkit application that tracks real-time cryptocurrency prices, simulating WebSocket updates and managing all state via Redux.

## Features

- **Real-time Price Updates**: Prices, percentages, and volumes update every 1.5 seconds
- **Responsive UI**: Mobile-friendly design with a clean, modern interface
- **Redux State Management**: All state is managed using Redux Toolkit
- **Styled Components**: Consistent styling with styled-components

## Tech Stack

- React
- TypeScript
- Redux Toolkit
- Styled Components
- Recharts (for charts)

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm start
# or
yarn start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── components/       # UI components
├── services/         # Services (WebSocket simulator)
├── store/            # Redux store
│   └── slices/       # Redux slices
├── utils/            # Utility functions
└── App.tsx           # Main application component
```

## Features

- Table displaying 5 cryptocurrency assets with the following fields:
  - # (Rank)
  - Logo
  - Name + Symbol
  - Price
  - 1h % Change
  - 24h % Change
  - 7d % Change
  - Market Cap
  - 24h Volume
  - Circulating Supply
  - 7-Day Chart

- Color-coded percentage changes:
  - Green for positive changes
  - Red for negative changes
  - Gray for zero/no change

- Simulated WebSocket updates every 1.5 seconds

## Future Enhancements

- Integration with a real WebSocket API (e.g., Binance)
- Sorting functionality for the table
- Filtering options (top gainers, losers, etc.)
- Detailed asset pages
- Price history charts
- Mobile app version

  ## demo of project
  ![App Screenshot](./screenshots/demo.png)


