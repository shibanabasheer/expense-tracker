import React from "react";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis } from "recharts";

const ExpenseSummary = ({ expenses }) => {
  const categories = ["Food", "Entertainment", "Travel"];
  const data = categories.map((cat) => ({
    name: cat,
    value: expenses
      .filter((exp) => exp.category === cat)
      .reduce((sum, exp) => sum + exp.amount, 0),
  }));

  const colors = ["#8884d8", "#82ca9d", "#ffc658"];

  return (
    <div className="expense-summary">
      <h2>Summary</h2>
      <PieChart width={200} height={200}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
        >
          {data.map((_, index) => (
            <Cell key={index} fill={colors[index % colors.length]} />
          ))}
        </Pie>
      </PieChart>
      <BarChart width={300} height={200} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default ExpenseSummary;

