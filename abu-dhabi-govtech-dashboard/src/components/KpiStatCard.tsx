import { TrendingDown, TrendingUp, Minus } from "lucide-react";
import {
  executiveOverviewCopy,
  localize,
  type Locale,
  type VisionKpi,
} from "@/src/data/mockData";
import { formatKpiValue, formatPercentPoint } from "@/src/lib/format";

export type KpiStatCardProps = {
  kpi: VisionKpi;
  locale: Locale;
};

export function KpiStatCard({ kpi, locale }: KpiStatCardProps) {
  const TrendIcon =
    kpi.trend === "up" ? TrendingUp : kpi.trend === "down" ? TrendingDown : Minus;
  const trendLabel =
    kpi.trend === "up"
      ? localize(executiveOverviewCopy.trendUp, locale)
      : kpi.trend === "down"
        ? localize(executiveOverviewCopy.trendDown, locale)
        : localize(executiveOverviewCopy.trendFlat, locale);

  return (
    <article className="flex min-h-[11rem] flex-col rounded-xl border border-border bg-surface p-5 shadow-sm">
      <h3 className="text-sm font-medium text-muted">{localize(kpi.label, locale)}</h3>
      <p className="mt-3 font-sans text-3xl font-semibold tracking-tight text-navy dark:text-foreground">
        {formatKpiValue(kpi.value, kpi.unit, locale)}
      </p>
      <p className="mt-2 flex items-center gap-2 text-sm text-muted">
        <TrendIcon
          aria-hidden
          className="size-4 shrink-0 text-navy dark:text-accent"
        />
        <span>
          {trendLabel} {formatPercentPoint(kpi.changePercent, locale)}
        </span>
      </p>
      <p className="mt-auto pt-4 text-xs text-muted">
        {localize(executiveOverviewCopy.targetLabel, locale)}{" "}
        {formatKpiValue(kpi.target2030, kpi.unit, locale)}
      </p>
    </article>
  );
}
