export interface EventItem {
  id: number;
  title: string;
  category: string;
  badgeTextColor?: string;
  date: string;
  location: string;
  organizerInitials: string;
  organizerBg: string;
  organizerTextColor?: string;
  organizerName: string;
  organizerRole: string;
  spotsLabel: string;
  spotsFilled: string;
  spotsPercent: number;
  progressColor: string;
  image: string;
  imageAlt: string;
  filterType: "all" | "weekend" | "environment";
}