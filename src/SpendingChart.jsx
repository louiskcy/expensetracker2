import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import './App.css';

function SpendingChart({ transactions }) {
  const expensesByCategory = {};

  transactions
    .filter((t) => t.type === 'expense')
    .forEach((t) => {
      expensesByCategory[t.category] =
        (expensesByCategory[t.category] || 0) + t.amount;
    });

  const data = Object.entries(expensesByCategory).map(([category, amount]) => ({
    category,
    amount,
  }));

  if (data.length === 0) return null;

  return (
    <div className="chart-container">
      <h2>Spending by Category</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip formatter={(value) => `$${value}`} />
          <Bar dataKey="amount" fill="#e74c3c" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SpendingChart;
