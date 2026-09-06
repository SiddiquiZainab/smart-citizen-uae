export type Locale = "en" | "ar";

export type LocalizedText = {
  en: string;
  ar: string;
};

export type ServiceTicketStatus = "Pending" | "In Progress" | "Resolved";

export type KpiUnit = "percent" | "count";
export type KpiTrend = "up" | "down" | "flat";

export type VisionKpi = {
  id:
    | "citizenSatisfactionRate"
    | "activeTammRequests"
    | "evChargingStations"
    | "renewableEnergyUsage";
  label: LocalizedText;
  description: LocalizedText;
  vision2030Theme: LocalizedText;
  value: number;
  unit: KpiUnit;
  changePercent: number;
  trend: KpiTrend;
  target2030: number;
};

export type RenewableEnergyBreakdown = {
  source: "barakah" | "masdarCity";
  label: LocalizedText;
  sharePercent: number;
  outputGwh: number;
};

export type LandmarkId =
  | "yas-island"
  | "al-reem-island"
  | "abu-dhabi-corniche"
  | "khalifa-city"
  | "al-ain";

export type MapLandmarkId =
  | "yas-island"
  | "al-reem-island"
  | "abu-dhabi-corniche";

export type Landmark = {
  id: LandmarkId;
  name: LocalizedText;
  coordinates: {
    lat: number;
    lng: number;
  };
  serviceTicketCount: number;
};

export type DistrictStatistic = {
  landmarkId: MapLandmarkId;
  openTickets: number;
  inProgressTickets: number;
  resolvedThisWeek: number;
  avgResolutionHours: number;
  satisfactionPercent: number;
  evChargers: number;
  topCategory: LocalizedText;
  summary: LocalizedText;
};

export const ABU_DHABI_MAP_CENTER = { lat: 24.4539, lng: 54.3773 } as const;

export const MAP_LANDMARK_IDS: readonly MapLandmarkId[] = [
  "al-reem-island",
  "yas-island",
  "abu-dhabi-corniche",
];

export type CitizenServiceRequest = {
  id: string;
  tammReference: string;
  title: LocalizedText;
  category: LocalizedText;
  location: LocalizedText;
  status: ServiceTicketStatus;
  submittedAt: string;
  channel: LocalizedText;
};

export const SERVICE_TICKET_STATUS_LABELS: Record<
  ServiceTicketStatus,
  LocalizedText
> = {
  Pending: { en: "Pending", ar: "قيد الانتظار" },
  "In Progress": { en: "In Progress", ar: "قيد التنفيذ" },
  Resolved: { en: "Resolved", ar: "تم الحل" },
};

export const visionKpis: VisionKpi[] = [
  {
    id: "citizenSatisfactionRate",
    label: {
      en: "Citizen Satisfaction Rate",
      ar: "معدل رضا المتعاملين",
    },
    description: {
      en: "Share of TAMM and municipal service users rating their experience as satisfied or very satisfied.",
      ar: "نسبة مستخدمي تم والخدمات البلدية الذين قيّموا تجربتهم بمستوى راضٍ أو راضٍ جداً.",
    },
    vision2030Theme: {
      en: "Abu Dhabi Economic Vision 2030 — world-class public services",
      ar: "رؤية أبوظبي الاقتصادية 2030 — خدمات حكومية بمعايير عالمية",
    },
    value: 92.4,
    unit: "percent",
    changePercent: 1.8,
    trend: "up",
    target2030: 95,
  },
  {
    id: "activeTammRequests",
    label: {
      en: "Active TAMM Requests",
      ar: "طلبات تم النشطة",
    },
    description: {
      en: "Open citizen and business requests currently being processed on the TAMM platform.",
      ar: "طلبات المتعاملين والأعمال المفتوحة قيد المعالجة على منصة تم.",
    },
    vision2030Theme: {
      en: "Digital government — unified, paperless service journeys",
      ar: "الحكومة الرقمية — رحلات خدمية موحدة بلا ورق",
    },
    value: 18420,
    unit: "count",
    changePercent: -4.2,
    trend: "down",
    target2030: 12000,
  },
  {
    id: "evChargingStations",
    label: {
      en: "EV Charging Stations in Abu Dhabi",
      ar: "محطات شحن المركبات الكهربائية في أبوظبي",
    },
    description: {
      en: "Public and semi-public electric vehicle chargers operational across the emirate.",
      ar: "شواحن المركبات الكهربائية العامة وشبه العامة العاملة في الإمارة.",
    },
    vision2030Theme: {
      en: "Sustainable mobility and low-carbon transport",
      ar: "التنقل المستدام والنقل منخفض الكربون",
    },
    value: 486,
    unit: "count",
    changePercent: 12.6,
    trend: "up",
    target2030: 1200,
  },
  {
    id: "renewableEnergyUsage",
    label: {
      en: "Renewable Energy Usage (Barakah / Masdar City)",
      ar: "استخدام الطاقة المتجددة (براكة / مدينة مصدر)",
    },
    description: {
      en: "Clean electricity share attributed to Barakah Nuclear Energy Plant and Masdar City renewable generation.",
      ar: "حصة الكهرباء النظيفة المنسوبة إلى محطة براكة للطاقة النووية وتوليد مصادر المتجددة.",
    },
    vision2030Theme: {
      en: "Clean energy mix and climate leadership",
      ar: "مزيج الطاقة النظيفة والريادة المناخية",
    },
    value: 34.7,
    unit: "percent",
    changePercent: 3.1,
    trend: "up",
    target2030: 50,
  },
];

export const renewableEnergyBreakdown: RenewableEnergyBreakdown[] = [
  {
    source: "barakah",
    label: {
      en: "Barakah Nuclear Energy Plant",
      ar: "محطة براكة للطاقة النووية",
    },
    sharePercent: 26.4,
    outputGwh: 40320,
  },
  {
    source: "masdarCity",
    label: {
      en: "Masdar City (solar & clean tech)",
      ar: "مدينة مصدر (الطاقة الشمسية والتقنيات النظيفة)",
    },
    sharePercent: 8.3,
    outputGwh: 12680,
  },
];

export const landmarks: Landmark[] = [
  {
    id: "yas-island",
    name: { en: "Yas Island", ar: "جزيرة ياس" },
    coordinates: { lat: 24.4958, lng: 54.6074 },
    serviceTicketCount: 142,
  },
  {
    id: "al-reem-island",
    name: { en: "Al Reem Island", ar: "جزيرة الريم" },
    coordinates: { lat: 24.4941, lng: 54.4076 },
    serviceTicketCount: 218,
  },
  {
    id: "abu-dhabi-corniche",
    name: { en: "Abu Dhabi Corniche", ar: "كورنيش أبوظبي" },
    coordinates: { lat: 24.4766, lng: 54.321 },
    serviceTicketCount: 305,
  },
  {
    id: "khalifa-city",
    name: { en: "Khalifa City", ar: "مدينة خليفة" },
    coordinates: { lat: 24.4194, lng: 54.5781 },
    serviceTicketCount: 167,
  },
  {
    id: "al-ain",
    name: { en: "Al Ain", ar: "العين" },
    coordinates: { lat: 24.2075, lng: 55.7447 },
    serviceTicketCount: 89,
  },
];

export const districtStatistics: Record<MapLandmarkId, DistrictStatistic> = {
  "al-reem-island": {
    landmarkId: "al-reem-island",
    openTickets: 218,
    inProgressTickets: 64,
    resolvedThisWeek: 41,
    avgResolutionHours: 18.4,
    satisfactionPercent: 91.2,
    evChargers: 28,
    topCategory: { en: "Planning & Permits", ar: "التخطيط والتراخيص" },
    summary: {
      en: "High-rise permit follow-ups and utility connections dominate open TAMM work on Al Reem Island.",
      ar: "متابعة تراخيص الأبراج وربط المرافق تشكل معظم أعمال تم المفتوحة في جزيرة الريم.",
    },
  },
  "yas-island": {
    landmarkId: "yas-island",
    openTickets: 142,
    inProgressTickets: 39,
    resolvedThisWeek: 52,
    avgResolutionHours: 14.1,
    satisfactionPercent: 93.8,
    evChargers: 46,
    topCategory: { en: "Sustainable Mobility", ar: "التنقل المستدام" },
    summary: {
      en: "Visitor-facing EV charging and venue access requests are the main service load around Yas Island.",
      ar: "طلبات شحن المركبات الكهربائية ووصول الزوار للمنشآت تشكل العبء الخدمي الرئيسي حول جزيرة ياس.",
    },
  },
  "abu-dhabi-corniche": {
    landmarkId: "abu-dhabi-corniche",
    openTickets: 305,
    inProgressTickets: 88,
    resolvedThisWeek: 37,
    avgResolutionHours: 22.6,
    satisfactionPercent: 88.4,
    evChargers: 19,
    topCategory: { en: "Public Works", ar: "الأشغال العامة" },
    summary: {
      en: "Lighting, public realm, and waterfront maintenance account for most Corniche municipal tickets.",
      ar: "الإنارة والمجال العام وصيانة الواجهة البحرية تشكل معظم تذاكر بلدية الكورنيش.",
    },
  },
};

export function isMapLandmarkId(id: LandmarkId): id is MapLandmarkId {
  return MAP_LANDMARK_IDS.includes(id as MapLandmarkId);
}

export function getMapLandmarks(): Landmark[] {
  return landmarks.filter((landmark) => isMapLandmarkId(landmark.id));
}

export const recentCitizenRequests: CitizenServiceRequest[] = [
  {
    id: "req-24091",
    tammReference: "TAMM-AD-24091",
    title: {
      en: "Street lighting outage along Corniche Road",
      ar: "انقطاع إنارة الشوارع على طريق الكورنيش",
    },
    category: { en: "Public Works", ar: "الأشغال العامة" },
    location: { en: "Abu Dhabi Corniche", ar: "كورنيش أبوظبي" },
    status: "In Progress",
    submittedAt: "2026-09-05T08:14:00+04:00",
    channel: { en: "TAMM App", ar: "تطبيق تم" },
  },
  {
    id: "req-24088",
    tammReference: "TAMM-AD-24088",
    title: {
      en: "EV charger reservation at Yas Marina",
      ar: "حجز شاحن مركبة كهربائية في ياس مارينا",
    },
    category: { en: "Sustainable Mobility", ar: "التنقل المستدام" },
    location: { en: "Yas Island", ar: "جزيرة ياس" },
    status: "Resolved",
    submittedAt: "2026-09-04T19:42:00+04:00",
    channel: { en: "TAMM Web", ar: "موقع تم" },
  },
  {
    id: "req-24084",
    tammReference: "TAMM-AD-24084",
    title: {
      en: "Building permit follow-up for Al Reem tower",
      ar: "متابعة رخصة بناء لبرج في جزيرة الريم",
    },
    category: { en: "Planning & Permits", ar: "التخطيط والتراخيص" },
    location: { en: "Al Reem Island", ar: "جزيرة الريم" },
    status: "Pending",
    submittedAt: "2026-09-04T11:05:00+04:00",
    channel: { en: "Service Centre", ar: "مركز خدمة" },
  },
  {
    id: "req-24079",
    tammReference: "TAMM-AD-24079",
    title: {
      en: "Waste collection delay in Khalifa City A",
      ar: "تأخير جمع النفايات في مدينة خليفة أ",
    },
    category: { en: "Municipality", ar: "البلدية" },
    location: { en: "Khalifa City", ar: "مدينة خليفة" },
    status: "In Progress",
    submittedAt: "2026-09-03T16:28:00+04:00",
    channel: { en: "TAMM App", ar: "تطبيق تم" },
  },
  {
    id: "req-24071",
    tammReference: "TAMM-AD-24071",
    title: {
      en: "Irrigation leak near Al Ain Oasis visitor path",
      ar: "تسرب في شبكة الري قرب مسار زوار واحة العين",
    },
    category: { en: "Parks & Public Realm", ar: "الحدائق والمجال العام" },
    location: { en: "Al Ain", ar: "العين" },
    status: "Resolved",
    submittedAt: "2026-09-02T09:51:00+04:00",
    channel: { en: "Hotline 800", ar: "الخط الساخن 800" },
  },
  {
    id: "req-24066",
    tammReference: "TAMM-AD-24066",
    title: {
      en: "Trade licence renewal for Masdar City SME",
      ar: "تجديد رخصة تجارية لمنشأة صغيرة في مدينة مصدر",
    },
    category: { en: "Business Licensing", ar: "تراخيص الأعمال" },
    location: { en: "Masdar City", ar: "مدينة مصدر" },
    status: "Pending",
    submittedAt: "2026-09-01T13:17:00+04:00",
    channel: { en: "TAMM Web", ar: "موقع تم" },
  },
];

export type WeeklyTammResolution = {
  weekKey: string;
  label: LocalizedText;
  resolvedPercent: number;
};

export type MunicipalRequestCategoryId =
  | "roads"
  | "waste"
  | "licensing"
  | "energy";

export type MunicipalRequestCategory = {
  id: MunicipalRequestCategoryId;
  label: LocalizedText;
  count: number;
};

export const weeklyTammResolutionRates: WeeklyTammResolution[] = [
  {
    weekKey: "2026-W28",
    label: { en: "Week 28", ar: "الأسبوع 28" },
    resolvedPercent: 86.1,
  },
  {
    weekKey: "2026-W29",
    label: { en: "Week 29", ar: "الأسبوع 29" },
    resolvedPercent: 87.4,
  },
  {
    weekKey: "2026-W30",
    label: { en: "Week 30", ar: "الأسبوع 30" },
    resolvedPercent: 88.0,
  },
  {
    weekKey: "2026-W31",
    label: { en: "Week 31", ar: "الأسبوع 31" },
    resolvedPercent: 89.6,
  },
  {
    weekKey: "2026-W32",
    label: { en: "Week 32", ar: "الأسبوع 32" },
    resolvedPercent: 90.2,
  },
  {
    weekKey: "2026-W33",
    label: { en: "Week 33", ar: "الأسبوع 33" },
    resolvedPercent: 91.5,
  },
  {
    weekKey: "2026-W34",
    label: { en: "Week 34", ar: "الأسبوع 34" },
    resolvedPercent: 92.1,
  },
  {
    weekKey: "2026-W35",
    label: { en: "Week 35", ar: "الأسبوع 35" },
    resolvedPercent: 93.4,
  },
];

export const municipalRequestCategories: MunicipalRequestCategory[] = [
  {
    id: "roads",
    label: { en: "Roads", ar: "الطرق" },
    count: 1240,
  },
  {
    id: "waste",
    label: { en: "Waste", ar: "النفايات" },
    count: 980,
  },
  {
    id: "licensing",
    label: { en: "Licensing", ar: "التراخيص" },
    count: 720,
  },
  {
    id: "energy",
    label: { en: "Energy", ar: "الطاقة" },
    count: 410,
  },
];

export const MUNICIPAL_CATEGORY_COLORS: Record<
  MunicipalRequestCategoryId,
  { light: string; dark: string }
> = {
  roads: { light: "#1b365d", dark: "#8fa4c4" },
  waste: { light: "#3d6b5a", dark: "#8fbfa8" },
  licensing: { light: "#9a7b3c", dark: "#d4bc7a" },
  energy: { light: "#4d6d8a", dark: "#9bb4c9" },
};

export const executiveOverviewCopy = {
  kicker: {
    en: "Abu Dhabi Government · Smart City Operations",
    ar: "حكومة أبوظبي · عمليات المدينة الذكية",
  },
  title: {
    en: "Executive overview",
    ar: "النظرة التنفيذية",
  },
  subtitle: {
    en: "Vision 2030 service performance across TAMM and municipal channels.",
    ar: "أداء الخدمات وفق رؤية 2030 عبر منصة تم والقنوات البلدية.",
  },
  languageToggle: { en: "العربية", ar: "English" },
  languageToggleName: {
    en: "Switch to Arabic",
    ar: "التبديل إلى الإنجليزية",
  },
  kpisHeading: {
    en: "Priority KPIs",
    ar: "المؤشرات الرئيسية",
  },
  targetLabel: { en: "2030 target", ar: "مستهدف 2030" },
  trendUp: { en: "Improved", ar: "تحسن" },
  trendDown: { en: "Declined", ar: "انخفاض" },
  trendFlat: { en: "Unchanged", ar: "بدون تغيير" },
  lineChartTitle: {
    en: "Weekly TAMM service resolution rate",
    ar: "معدل حل خدمات تم أسبوعياً",
  },
  lineChartHint: {
    en: "Share of TAMM requests closed within the service-level window.",
    ar: "نسبة طلبات تم المغلقة ضمن نافذة مستوى الخدمة.",
  },
  donutChartTitle: {
    en: "Municipal request categories",
    ar: "فئات الطلبات البلدية",
  },
  donutChartHint: {
    en: "Open and recently closed requests by service family.",
    ar: "الطلبات المفتوحة والمغلقة مؤخراً حسب فئة الخدمة.",
  },
  resolutionSeries: {
    en: "Resolution rate",
    ar: "معدل الحل",
  },
} as const;

export const abuDhabiMapCopy = {
  title: {
    en: "Service demand by district",
    ar: "الطلب على الخدمات حسب المنطقة",
  },
  hint: {
    en: "Select Al Reem, Yas Island, or the Corniche to inspect live TAMM and municipal statistics.",
    ar: "اختر جزيرة الريم أو جزيرة ياس أو الكورنيش للاطلاع على إحصاءات تم والخدمات البلدية.",
  },
  loading: { en: "Loading Abu Dhabi map", ar: "جاري تحميل خريطة أبوظبي" },
  openStats: { en: "View district statistics", ar: "عرض إحصاءات المنطقة" },
  closeDrawer: { en: "Close district statistics", ar: "إغلاق إحصاءات المنطقة" },
  tickets: { en: "Open service tickets", ar: "التذاكر المفتوحة" },
  inProgress: { en: "In progress", ar: "قيد التنفيذ" },
  resolvedWeek: { en: "Resolved this week", ar: "تم حلها هذا الأسبوع" },
  avgHours: { en: "Average resolution time", ar: "متوسط زمن الحل" },
  hoursUnit: { en: "hours", ar: "ساعة" },
  satisfaction: { en: "Citizen satisfaction", ar: "رضا المتعاملين" },
  chargers: { en: "EV chargers nearby", ar: "شواحن المركبات الكهربائية القريبة" },
  topCategory: { en: "Top request category", ar: "أبرز فئة للطلبات" },
  tileAttribution: {
    en: "Map data © OpenStreetMap contributors, © CARTO",
    ar: "بيانات الخريطة © مساهمو OpenStreetMap، © CARTO",
  },
} as const;

export const smartCityDashboard = {
  generatedAt: "2026-09-06T16:00:00+04:00",
  emirate: {
    en: "Abu Dhabi",
    ar: "أبوظبي",
  },
  visionKpis,
  renewableEnergyBreakdown,
  landmarks,
  recentCitizenRequests,
  weeklyTammResolutionRates,
  municipalRequestCategories,
  districtStatistics,
} as const;

export function localize(text: LocalizedText, locale: Locale): string {
  return text[locale];
}

export function localizeStatus(
  status: ServiceTicketStatus,
  locale: Locale,
): string {
  return SERVICE_TICKET_STATUS_LABELS[status][locale];
}
