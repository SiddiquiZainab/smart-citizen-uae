"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  executiveOverviewCopy,
  localize,
  weeklyTammResolutionRates,
  type Locale,
} from "@/src/data/mockData";
import { usePrefersReducedMotion } from "@/src/hooks/usePrefersReducedMotion";

export type TammResolutionLineChartProps = {
  locale: Locale;
};

type ChartPoint = {
  week: string;
  resolvedPercent: number;
};

export function TammResolutionLineChart({
  locale,
}: TammResolutionLineChartProps) {
  const reduceMotion = usePrefersReducedMotion();
  const data: ChartPoint[] = weeklyTammResolutionRates.map((row) => ({
    week: localize(row.label, locale),
    resolvedPercent: row.resolvedPercent,
  }));
  const seriesName = localize(executiveOverviewCopy.resolutionSeries, locale);
  const localeTag = locale === "ar" ? "ar-AE" : "en-AE";

  return (
    <section className="rounded-xl border border-border bg-surface p-5 shadow-sm">
      <h2 className="text-base font-semibold text-navy dark:text-foreground">
        {localize(executiveOverviewCopy.lineChartTitle, locale)}
      </h2>
      <p className="mt-1 text-sm text-muted">
        {localize(executiveOverviewCopy.lineChartHint, locale)}
      </p>
      <div className="mt-4 h-72 w-full min-h-[18rem]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
            <CartesianGrid stroke="currentColor" className="text-border" strokeDasharray="3 3" />
            <XAxis
              dataKey="week"
              tick={{ fontSize: 12, fill: "currentColor" }}
              className="text-muted"
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              domain={[80, 100]}
              tickFormatter={(value: number) =>
                new Intl.NumberFormat(localeTag, {
                  style: "percent",
                  maximumFractionDigits: 0,
                }).format(value / 100)
              }
              tick={{ fontSize: 12, fill: "currentColor" }}
              className="text-muted"
              axisLine={false}
              tickLine={false}
              width={48}
            />
            <Tooltip
              formatter={(value) => {
                if (typeof value !== "number") return "";
                return new Intl.NumberFormat(localeTag, {
                  style: "percent",
                  minimumFractionDigits: 1,
                  maximumFractionDigits: 1,
                }).format(value / 100);
              }}
              labelFormatter={(label) => String(label)}
            />
            <Line
              type="monotone"
              dataKey="resolvedPercent"
              name={seriesName}
              stroke="var(--navy)"
              strokeWidth={2}
              dot={{ r: 3, fill: "var(--accent)" }}
              isAnimationActive={!reduceMotion}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
