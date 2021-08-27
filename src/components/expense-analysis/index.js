import React from "react";
import "./expense-analysis.css";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";

const arbitraryStackKey = "stack1";

const data = {
  labels: [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "Spetember",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      label: "Category-1",
      data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3],
      backgroundColor: "rgb(255, 99, 132)",
      stack: arbitraryStackKey,
    },
    {
      label: "Category-2",
      data: [2, 3, 20, 5, 1, 4, 2, 3, 20, 5, 1, 4],
      backgroundColor: "rgb(54, 162, 235)",
      stack: arbitraryStackKey,
    },
    {
      label: "Category-3",
      data: [3, 10, 13, 15, 22, 30, 13, 15, 22, 30, 13, 15],
      backgroundColor: "rgb(75, 192, 192)",
      stack: arbitraryStackKey,
    },
    {
      label: "Category-4",
      data: [3, 10, 13, 15, 22, 30, 13, 15, 22, 30, 13, 15],
      backgroundColor: "rgb(70, 112, 192)",
      stack: arbitraryStackKey,
    },
    {
      label: "Category-5",
      data: [3, 10, 13, 15, 22, 30, 13, 15, 22, 30, 13, 15],
      backgroundColor: "rgb(75, 180, 192)",
      stack: arbitraryStackKey,
    },
  ],
};
const options = {
  scales: {
    yAxes: [
      {
        stacked: true,
        ticks: {
          beginAtZero: true,
        },
      },
    ],
    xAxes: [
      {
        stacked: true,
      },
    ],
  },
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Monthly Expenses (In INR) Stacked Bar Graph",
      position: "bottom",
    },
  },
};

const ExpenseAnalysis = () => {
  let { expenseList: list } = useSelector((state) => state.expenses);
  console.log(list);
  return (
    <div className="chart">
      <Bar data={data} options={options} />
    </div>
  );
};

export default ExpenseAnalysis;
