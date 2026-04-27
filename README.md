# Finance Tracker

A simple expense tracker application built with React and Vite. Track your income and expenses, filter transactions, and view your financial balance in real time.

## Features

- Add income and expense transactions
- Categorize transactions (food, housing, utilities, transport, entertainment, salary, other)
- Filter transactions by type and category
- View summary cards for total income, expenses, and balance
- Responsive UI with clean styling

## Tech Stack

- React 19
- Vite 7
- ESLint

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser at `http://localhost:5173`

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |

## Project Structure

```
expense-tracker-starter/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   ├── App.jsx              # Main app component, manages state
│   ├── Summary.jsx          # Displays income, expenses, and balance
│   ├── TransactionForm.jsx  # Form to add new transactions
│   ├── TransactionList.jsx  # Displays and filters transactions
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── eslint.config.js
```

## Architecture

The app follows a component-based architecture:

- **App.jsx**: Main container that holds the transactions state and coordinates child components
- **Summary.jsx**: Receives transactions and calculates total income, expenses, and balance
- **TransactionForm.jsx**: Manages form state and emits new transactions via callback
- **TransactionList.jsx**: Handles filtering and displays the transaction table

## License

MIT