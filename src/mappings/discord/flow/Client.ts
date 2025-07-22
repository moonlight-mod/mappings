export interface SettingsSection {
  section: string;
  label?: string;
  color?: string | null;
  pos?: number;
  notice?: {
    element?: () => React.ReactNode;
    stores: any[];
  };
  searchableTitles?: string[];
  ariaLabel?: string;
  type?: string;
  newIndicator?: any;
  badgeCount?: number;
  newIndicatorDismissibleContentTypes?: number[];
  impressionName?: string;
  impressionProperties?: any;
  className?: string;
  icon?: any;
}
