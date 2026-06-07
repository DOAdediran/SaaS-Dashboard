"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Area
} from "recharts";
import { formatCurrencyNaira, formatNumberShort } from "@/utils/format";

const data = [
  { month: "Jan", users: 4000, revenue: 22000000 },
  { month: "Feb", users: 5200, revenue: 31000000 },
  { month: "Mar", users: 6200, revenue: 36000000 },
  { month: "Apr", users: 7200, revenue: 42000000 },
  { month: "May", users: 8400, revenue: 52000000 },
  { month: "Jun", users: 9100, revenue: 59000000 }
];

export function ChartSection() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold">Revenue & active users</h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">Track month-over-month performance for your product.</p>
        </div>
      </div>

      <div className="h-[340px] rounded-3xl bg-slate-100 p-4 dark:bg-slate-800">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 24, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="revGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2563eb" stopOpacity={0.35} />
                <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#cbd5e1" opacity={0.4} />
            <XAxis dataKey="month" stroke="#475569" />
            <YAxis
              stroke="#475569"
              tickFormatter={(val) => formatNumberShort(Number(val))}
            />
            <Tooltip
              formatter={(value, name) => {
                if (name === "revenue") {
                  return [formatCurrencyNaira(Number(value), true), "Revenue"];
                }
                return [Number(value).toLocaleString(), "Users"];
              }}
              contentStyle={{ backgroundColor: "#0f172a", borderRadius: 16, border: "none" }}
              labelStyle={{ color: "#e2e8f0" }}
              itemStyle={{ color: "#cbd5e1" }}
            />
            <Area type="monotone" dataKey="revenue" stroke="#2563eb" fillOpacity={1} fill="url(#revGradient)" />
            <Line type="monotone" dataKey="users" stroke="#10b981" strokeWidth={3} dot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
