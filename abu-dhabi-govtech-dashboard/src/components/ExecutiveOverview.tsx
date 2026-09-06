"use client";

import { useState } from "react";
import {
  executiveOverviewCopy,
  localize,
  visionKpis,
  type Locale,
} from "@/src/data/mockData";
import { KpiStatCard } from "@/src/components/KpiStatCard";
import { MunicipalCategoryDonutChart } from "@/src/components/MunicipalCategoryDonutChart";
import { TammResolutionLineChart } from "@/src/components/TammResolutionLineChart";

export type ExecutiveOverviewProps = {
  initialLocale?: Locale;
};

export function ExecutiveOverview({
  initialLocale = "en",
}: ExecutiveOverviewProps) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const nextLocale: Locale = locale === "en" ? "ar" : "en";

  return (
    <div
      className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8"
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <header className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-wide text-accent">
            {localize(executiveOverviewCopy.kicker, locale)}
          </p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-navy dark:text-foreground sm:text-3xl">
            {localize(executiveOverviewCopy.title, locale)}
          </h1>
          <p className="mt-2 text-sm text-muted sm:text-base">
            {localize(executiveOverviewCopy.subtitle, locale)}
          </p>
        </div>
        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-border bg-surface px-4 text-sm font-medium text-navy transition-colors duration-200 hover:bg-canvas dark:text-foreground"
          onClick={() => setLocale(nextLocale)}
          aria-label={localize(executiveOverviewCopy.languageToggleName, locale)}
        >
          {localize(executiveOverviewCopy.languageToggle, locale)}
        </button>
      </header>

      <section aria-labelledby="kpi-heading">
        <h2 id="kpi-heading" className="sr-only">
          {localize(executiveOverviewCopy.kpisHeading, locale)}
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {visionKpis.map((kpi) => (
            <KpiStatCard key={kpi.id} kpi={kpi} locale={locale} />
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <TammResolutionLineChart locale={locale} />
        </div>
        <div className="lg:col-span-2">
          <MunicipalCategoryDonutChart locale={locale} />
        </div>
      </div>
    </div>
  );
}
