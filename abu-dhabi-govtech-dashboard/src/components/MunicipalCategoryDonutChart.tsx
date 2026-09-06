"use client";

import { useEffect, useState } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import {
  executiveOverviewCopy,
  localize,
  MUNICIPAL_CATEGORY_COLORS,
  municipalRequestCategories,
  type Locale,
  type MunicipalRequestCategoryId,
} from "@/src/data/mockData";
import { usePrefersReducedMotion } from "@/src/hooks/usePrefersReducedMotion";
import { formatCount } from "@/src/lib/format";

export type MunicipalCategoryDonutChartProps = {
  locale: Locale;
};

export function MunicipalCategoryDonutChart({
  locale,
}: MunicipalCategoryDonutChartProps) {
  const reduceMotion = usePrefersReducedMotion();
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const sync = () => setDark(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  const localeTag = locale === "ar" ? "ar-AE" : "en-AE";
  const colorFor = (id: MunicipalRequestCategoryId) =>
    dark
      ? MUNICIPAL_CATEGORY_COLORS[id].dark
      : MUNICIPAL_CATEGORY_COLORS[id].light;
  const data = municipalRequestCategories.map((row) => ({
    id: row.id,
    name: localize(row.label, locale),
    value: row.count,
  }));
  const total = data.reduce((sum, row) => sum + row.value, 0);

  return (
    <section className="rounded-xl border border-border bg-surface p-5 shadow-sm">
      <h2 className="text-base font-semibold text-navy dark:text-foreground">
        {localize(executiveOverviewCopy.donutChartTitle, locale)}
      </h2>
      <p className="mt-1 text-sm text-muted">
        {localize(executiveOverviewCopy.donutChartHint, locale)}
      </p>
      <div className="mt-4 flex flex-col items-center gap-6 sm:flex-row">
        <div className="h-64 w-full min-h-[16rem] sm:w-1/2">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                innerRadius={58}
                outerRadius={88}
                paddingAngle={2}
                isAnimationActive={!reduceMotion}
              >
                {data.map((entry) => (
                  <Cell key={entry.id} fill={colorFor(entry.id)} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value, name) => {
                  if (typeof value !== "number") return "";
                  return [formatCount(value, locale), String(name)];
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <ul className="grid w-full grid-cols-1 gap-3 sm:w-1/2">
          {municipalRequestCategories.map((row) => {
            const share = row.count / total;
            return (
              <li key={row.id} className="flex items-center gap-3 text-sm">
                <span
                  className="size-3 shrink-0 rounded-full"
                  style={{ backgroundColor: colorFor(row.id) }}
                  aria-hidden
                />
                <span className="text-foreground">{localize(row.label, locale)}</span>
                <span className="ms-auto text-muted">
                  {formatCount(row.count, locale)} ·{" "}
                  {new Intl.NumberFormat(localeTag, {
                    style: "percent",
                    maximumFractionDigits: 0,
                  }).format(share)}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
