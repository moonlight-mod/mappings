import register from "../../../../registry";
import type {
  Component,
  Ref,
  PropsWithChildren,
  PropsWithoutRef,
  CSSProperties,
  ReactNode,
  ReactElement,
  ComponentClass,
  ComponentType,
  MouseEventHandler,
  KeyboardEventHandler
} from "react";
import * as CSS from "csstype";

// #region TextInput
export enum TextInputSizes {
  DEFAULT = "inputDefault",
  MINI = "inputMini"
}

export interface TextInput
  extends ComponentClass<
    PropsWithoutRef<{
      value?: string;
      name?: string;
      className?: string;
      inputClassName?: string;
      inputPrefix?: string;
      disabled?: boolean;
      size?: TextInputSizes;
      editable?: boolean;
      inputRef?: Ref<any>;
      prefixElement?: Component;
      focusProps?: PropsWithoutRef<any>;
      error?: string;
      minLength?: number;
      maxLength?: number;
      onChange?: (value: string, name: string) => void;
      onFocus?: (event: any, name: string) => void;
      onBlur?: (event: any, name: string) => void;
      // this is literally just the input element's type field
      type?:
        | "button"
        | "checkbox"
        | "color"
        | "date"
        | "datetime-local"
        | "email"
        | "file"
        | "hidden"
        | "image"
        | "month"
        | "number"
        | "password"
        | "radio"
        | "range"
        | "reset"
        | "search"
        | "submit"
        | "tel"
        | "text"
        | "time"
        | "url"
        | "week";
    }>
  > {
  Sizes: typeof TextInputSizes;
}
// #endregion

// #region TextArea
export enum TextAreaAutoComplete {
  ON = "on",
  OFF = "off"
}

export enum TextAreaWrap {
  HARD = "hard",
  SOFT = "soft",
  OFF = "off"
}

export interface TextArea
  extends ComponentClass<
    PropsWithoutRef<{
      value?: string;
      defaultValue?: string;
      autoComplete?: TextAreaAutoComplete;
      autoFocus?: boolean;
      cols?: number;
      disabled?: boolean;
      form?: string;
      maxLength?: number;
      minLength?: number;
      name?: string;
      onChange?: (value: string, name: string) => void;
      onChangeCapture?: (value: string, name: string) => void;
      onInput?: (value: string, name: string) => void;
      onInputCapture?: (value: string, name: string) => void;
      onInvalid?: (value: string, name: string) => void;
      onInvalidCapture?: (value: string, name: string) => void;
      onSelect?: (value: string, name: string) => void;
      onSelectCapture?: (value: string, name: string) => void;
      placeholder?: string;
      readOnly?: boolean;
      required?: boolean;
      rows?: number;
      wrap?: TextAreaWrap;
      className?: string;
    }>
  > {
  AutoCompletes: typeof TextAreaAutoComplete;
  Wraps: typeof TextAreaWrap;
}
// #endregion

// #region FormText
export enum FormTextTypes {
  DEFAULT = "default",
  DESCRIPTION = "description",
  ERROR = "error",
  INPUT_PLACEHOLDER = "placeholder",
  LABEL_BOLD = "labelBold",
  LABEL_DESCRIPTOR = "labelDescriptor",
  LABEL_SELECTED = "labelSelected",
  SUCCESS = "success"
}

interface FormText
  extends ComponentClass<
    PropsWithChildren<{
      type?: FormTextTypes;
      className?: string;
      disabled?: boolean;
      selectable?: boolean;
      style?: CSSProperties;
    }>
  > {
  Types: FormTextTypes;
}
// #endregion

// #region Slider
export enum SliderMarkerPosition {
  ABOVE,
  BELOW
}
// #endregion

// #region Button
export enum ButtonLooks {
  FILLED = "lookFilled",
  INVERTED = "lookInverted",
  OUTLINED = "lookOutlined",
  LINK = "lookLink",
  BLANK = "lookBlank"
}
export enum ButtonColors {
  BRAND = "colorBrand",
  RED = "colorRed",
  GREEN = "colorGreen",
  YELLOW = "colorYellow",
  PRIMARY = "colorPrimary",
  LINK = "colorLink",
  WHITE = "colorWhite",
  BLACK = "colorBlack",
  TRANSPARENT = "colorTransparent",
  BRAND_NEW = "colorBrandNew",
  CUSTOM = ""
}
export enum ButtonBorderColors {
  BRAND = "borderBrand",
  RED = "borderRed",
  GREEN = "borderGreen",
  YELLOW = "borderYellow",
  PRIMARY = "borderPrimary",
  LINK = "borderLink",
  WHITE = "borderWhite",
  BLACK = "borderBlack",
  TRANSPARENT = "borderTransparent",
  BRAND_NEW = "borderBrandNew"
}
export enum ButtonHovers {
  DEFAULT = "",
  BRAND = "hoverBrand",
  RED = "hoverRed",
  GREEN = "hoverGreen",
  YELLOW = "hoverYellow",
  PRIMARY = "hoverPrimary",
  LINK = "hoverLink",
  WHITE = "hoverWhite",
  BLACK = "hoverBlack",
  TRANSPARENT = "hoverTransparent"
}
export enum ButtonSizes {
  NONE = "",
  TINY = "sizeTiny",
  SMALL = "sizeSmall",
  MEDIUM = "sizeMedium",
  LARGE = "sizeLarge",
  XLARGE = "sizeXlarge",
  MIN = "sizeMin",
  MAX = "sizeMax",
  ICON = "sizeIcon"
}

export type Button = ComponentType<
  PropsWithChildren<{
    look?: ButtonLooks;
    color?: ButtonColors;
    borderColor?: ButtonBorderColors;
    hover?: ButtonHovers;
    size?: ButtonSizes;
    fullWidth?: boolean;
    grow?: boolean;
    disabled?: boolean;
    submitting?: boolean;
    type?: string;
    style?: CSSProperties;
    wrapperClassName?: string;
    className?: string;
    innerClassName?: string;
    onClick?: MouseEventHandler;
    onDoubleClick?: MouseEventHandler;
    onMouseDown?: MouseEventHandler;
    onMouseUp?: MouseEventHandler;
    onMouseEnter?: MouseEventHandler;
    onMouseLeave?: MouseEventHandler;
    onKeyDown?: KeyboardEventHandler;
    rel?: any;
    buttonRef?: Ref<any>;
    focusProps?: PropsWithChildren<any>;
    "aria-label"?: string;
    submittingStartedLabel?: string;
    submittingFinishedLabel?: string;
  }>
> & {
  Looks: typeof ButtonLooks;
  Colors: typeof ButtonColors;
  BorderColors: typeof ButtonBorderColors;
  Hovers: typeof ButtonHovers;
  Sizes: typeof ButtonSizes;
};
// #endregion

// #region Tokens
export enum Themes {
  DARK = "dark",
  LIGHT = "light",
  MIDNIGHT = "midnight",
  DARKER = "darker"
}

type ResolverProps = {
  theme: Themes;
  saturation?: number;
  enabledExperiments?: string[];
};

type ResolvedColor = {
  spring: () => CSS.DataType.Color;
  hsl: () => CSS.DataType.Color;
  hex: () => CSS.DataType.Color;
  int: () => number;
};

type ResolvedShadow = {
  boxShadow: CSS.Property.BoxShadow;
  filter: CSS.Property.Filter;
  nativeStyles: {
    elevation: number;
    shadowColor: CSS.DataType.Color;
    shadowColorAndroid: CSS.DataType.Color;
    shadowOffset: {
      width: number;
      height: number;
    };
    shadowOpacity: CSS.Property.Opacity;
    shadowRadius: number;
  };
};

type ColorResolver = (props: ResolverProps) => ResolvedColor;
type ShadowResolver = (props: ResolverProps) => ResolvedShadow;

// this entire type is a mess because it relies on generated definitions
export type Tokens = {
  themes: Themes;
  modules: {
    chat: {
      RESIZE_HANDLE_WIDTH: 8;
    };
  };
  colors: {
    [index: string]: {
      css: CSS.DataType.Color;
      resolve: ColorResolver;
    };
  };
  unsafe_rawColors: {
    [index: string]: {
      css: CSS.DataType.Color;
      resolve: ColorResolver;
    };
  };
  shadows: {
    [index: string]: {
      css: string;
      resolve: ShadowResolver;
    };
  };
  radii: {
    none: 0;
    xs: 4;
    sm: 8;
    md: 12;
    lg: 16;
    xl: 24;
    xxl: 32;
    round: 2147483647;
  };
  spacing: {
    PX_4: "4px";
    PX_8: "8px";
    PX_12: "12px";
    PX_16: "16px";
    PX_24: "24px";
    PX_32: "32px";
    PX_40: "40px";
    PX_48: "48px";
    PX_56: "56px";
    PX_64: "64px";
    PX_72: "72px";
    PX_80: "80px";
    PX_96: "96px";
  };
  layout: {
    // mix of px values and vars
    [index: string]: string;
  };
};
// #endregion

// #region Select
export type SelectOption = {
  value: any;
  label: string;
};

export type SelectState = {
  select: (value: SelectOption) => void;
  isSelected: (value: SelectOption) => boolean;
  clear: () => void;
  serialize: (value: SelectOption) => string;
};

export type SelectInteraction = {
  newValues: Set<SelectOption>;
  updated?: Set<SelectOption>;
};

export type SelectInteractionCallback = (
  newValue: SelectOption,
  oldValue: SelectOption
) => SelectInteraction;

export type SelectProps = {
  value: Set<string>;
  onSelectInteraction: SelectInteractionCallback;
  onChange: (value: string) => void;
  serialize?: (value: any) => string;
};
// #endregion

// #region Modal
export type ModalProps = PropsWithoutRef<{
  transitionState: number | null;
}>;

export type ModalCallback = (props: ModalProps) => React.ReactNode;
// #endregion

// #region Tooltip
export type LayerPosition =
  | "top"
  | "bottom"
  | "left"
  | "right"
  | "center"
  | "window_center";
export type LayerAlign = "top" | "bottom" | "center";

export enum TooltipColors {
  PRIMARY = "primary",
  NESTED = "nested",
  GREY = "grey",
  GREEN = "green",
  BRAND = "brand",
  YELLOW = "yellow",
  RED = "red",
  PREMIUM = "premium"
}

type TooltipProps = {
  text: string;
  align?: LayerAlign;
  position?: LayerPosition;
  color?: TooltipColors;
  spacing?: number;
  tooltipClassName?: string;
  tooltipStyle?: CSSProperties;
  tooltipContentClassName?: string;
  disableTooltipPointerEvents?: boolean;
  onAnimationRest?: () => void;
  allowOverflow?: boolean;
  clickableOnMobile?: boolean;
  hideOnClick?: boolean;
  tooltipPointerClassName?: string;
  "aria-label"?: string;
  delay?: number;
  overflowOnly?: boolean;
  onTooltipShow?: (props: TooltipProps) => void;
  onTooltipHide?: (props: TooltipProps) => void;
  shouldShow?: boolean;
  forceOpen?: boolean;
};

export type Tooltip = React.ComponentType<
  TooltipProps & {
    children: ((props: any) => ReactNode) | ReactNode;
  }
> & {
  Colors: TooltipColors;
};
// #endregion

// #region Avatar
export enum AvatarSizes {
  SIZE_16 = "SIZE_16",
  SIZE_20 = "SIZE_20",
  SIZE_24 = "SIZE_24",
  SIZE_32 = "SIZE_32",
  SIZE_40 = "SIZE_40",
  SIZE_48 = "SIZE_48",
  SIZE_56 = "SIZE_56",
  SIZE_80 = "SIZE_80",
  SIZE_120 = "SIZE_120",
  SIZE_152 = "SIZE_152",
  DEPRECATED_SIZE_30 = "DEPRECATED_SIZE_30",
  DEPRECATED_SIZE_60 = "DEPRECATED_SIZE_60",
  DEPRECATED_SIZE_100 = "DEPRECATED_SIZE_100"
}

export type AvatarSizeSpecs = {
  SIZE_16: {
    size: 16;
    status: 6;
    stroke: 2;
    offset: 0;
  };
  SIZE_20: {
    size: 20;
    status: 6;
    stroke: 2;
    offset: 0;
  };
  SIZE_24: {
    size: 24;
    status: 8;
    stroke: 3;
    offset: 0;
  };
  SIZE_32: {
    size: 32;
    status: 10;
    stroke: 3;
    offset: 0;
  };
  SIZE_40: {
    size: 40;
    status: 12;
    stroke: 4;
    offset: 0;
  };
  SIZE_48: {
    size: 48;
    status: 12;
    stroke: 4;
    offset: 0;
  };
  SIZE_56: {
    size: 56;
    status: 14;
    stroke: 4;
    offset: 2;
  };
  SIZE_80: {
    size: 80;
    status: 16;
    stroke: 6;
    offset: 4;
  };
  SIZE_120: {
    size: 120;
    status: 24;
    stroke: 8;
    offset: 8;
  };
  SIZE_152: {
    size: 152;
    status: 30;
    stroke: 10;
    offset: 10;
  };
  DEPRECATED_SIZE_30: {
    size: 30;
    status: 0;
    stroke: 0;
    offset: 0;
  };
  DEPRECATED_SIZE_60: {
    size: 60;
    status: 0;
    stroke: 0;
    offset: 0;
  };
  DEPRECATED_SIZE_100: {
    size: 100;
    status: 0;
    stroke: 0;
    offset: 0;
  };
};

export type Status = "online" | "idle" | "dnd" | "invisible" | "offline";

export type Avatar = ComponentType<
  PropsWithoutRef<{
    src: string;
    status?: Status;
    size: AvatarSizes;
    statusColor?: CSS.DataType.Color;
    isMobile?: boolean;
    isTyping?: boolean;
    typingIndicatorRef?: React.Ref<any>;
    isSpeaking?: boolean;
    statusTooltip?: boolean;
    statusTooltipDelay?: number;
    statusBackdropColor?: string;
    "aria-hidden"?: boolean;
    "aria-label"?: string;
    imageClassName?: string;
  }>
>;
// #endregion

// #region Text
export type TextVariant =
  | "heading-sm/normal"
  | "heading-sm/medium"
  | "heading-sm/semibold"
  | "heading-sm/bold"
  | "heading-sm/extrabold"
  | "heading-md/normal"
  | "heading-md/medium"
  | "heading-md/semibold"
  | "heading-md/bold"
  | "heading-md/extrabold"
  | "heading-lg/normal"
  | "heading-lg/medium"
  | "heading-lg/semibold"
  | "heading-lg/bold"
  | "heading-lg/extrabold"
  | "heading-xl/normal"
  | "heading-xl/medium"
  | "heading-xl/semibold"
  | "heading-xl/bold"
  | "heading-xl/extrabold"
  | "heading-xxl/normal"
  | "heading-xxl/medium"
  | "heading-xxl/semibold"
  | "heading-xxl/bold"
  | "heading-xxl/extrabold"
  | "eyebrow"
  | "heading-deprecated-12/normal"
  | "heading-deprecated-12/medium"
  | "heading-deprecated-12/semibold"
  | "heading-deprecated-12/bold"
  | "heading-deprecated-12/extrabold"
  | "redesign/heading-18/bold"
  | "text-xxs/normal"
  | "text-xxs/medium"
  | "text-xxs/semibold"
  | "text-xxs/bold"
  | "text-xs/normal"
  | "text-xs/medium"
  | "text-xs/semibold"
  | "text-xs/bold"
  | "text-sm/normal"
  | "text-sm/medium"
  | "text-sm/semibold"
  | "text-sm/bold"
  | "text-md/normal"
  | "text-md/medium"
  | "text-md/semibold"
  | "text-md/bold"
  | "text-lg/normal"
  | "text-lg/medium"
  | "text-lg/semibold"
  | "text-lg/bold"
  | "redesign/message-preview/normal"
  | "redesign/message-preview/medium"
  | "redesign/message-preview/semibold"
  | "redesign/message-preview/bold"
  | "redesign/channel-title/normal"
  | "redesign/channel-title/medium"
  | "redesign/channel-title/semibold"
  | "redesign/channel-title/bold"
  | "display-sm"
  | "display-md"
  | "display-lg"
  | "code";

export type Text = ComponentType<
  PropsWithChildren<{
    className?: string;
    style?: CSSProperties;
    variant: TextVariant;
    tag?: string;
    selectable?: boolean;
    lineClamp?: number;
    color?: string;
    tabularNumbers?: boolean;
    scaleFontToUserSettings?: boolean;
  }>
>;
// #endregion

// #region Menu
// TODO: find others
export type MenuVariant = "flexible";

export type MenuSeparator = ComponentType<PropsWithoutRef<{}>>;
export type MenuGroup = ComponentType<PropsWithChildren<{}>>;

export type MenuItemProps = {
  className?: string;
  id: string;
  navigatable?: boolean;
  render?: (props: MenuItemProps) => ReactNode;
  label: string;
  onChildrenScroll?: () => void;
  childRowHeight?: number;
  listClassName?: string;
  subMenuClassName?: string;
  color?: string;
  icon?: ReactNode;
  iconLeftSize?: string; // TODO: icon sizes type
  hint?: string;
  subtext?: string;
  subtextLineClamp?: number;
  hasSubmenu?: boolean;
  disabled?: boolean;
  isFocused?: boolean;
  menuItemProps?: any;
  action?: () => void;
  onClose?: () => void;
  onFocus?: () => void;
  focusedClassName?: string;
  subMenuIconClassName?: string;
  dontCloseOnActionIfHoldingShiftKey?: boolean;
  dontCloseOnAction?: boolean;
  iconProps?: any;
  sparkle?: boolean;
  parentItem?: ReactNode;
  menuSubmenuProps?: any;
  rows?: ReactNode[];
  rowHeight?: number;
  onScroll?: () => void;
  renderSubmenu?: () => ReactNode;
  keepItemStyles?: boolean;
};
export type MenuItem = ComponentType<PropsWithChildren<MenuItemProps>>;

export type MenuCheckboxItem = ComponentType<
  PropsWithoutRef<{
    className?: string;
    id: string;
    color?: string;
    label: string;
    checked: boolean;
    subtext?: string;
    disabled?: boolean;
    isFocued?: boolean;
    menuItemProps?: any;
    action?: () => void;
    focusedClassName?: string;
  }>
>;

export type MenuRadioItem = ComponentType<
  PropsWithoutRef<{
    id: string;
    color?: string;
    label: string;
    checked: boolean;
    subtext?: string;
    disabled?: string;
    isFocused?: boolean;
    menuItemProps?: any;
    action?: () => void;
  }>
>;

export type MenuControlItem = ComponentType<
  PropsWithChildren<{
    id: string;
    control?: (props: any, ref: React.Ref<any>) => ReactNode;
    interactive?: boolean;
    color?: string;
    label: string;
    disabled?: boolean;
    isFocused?: boolean;
    showDefaultFocus?: boolean;
    menuItemProps?: any;
    onClose?: () => void;
  }>
>;

export type Menu = ComponentType<
  PropsWithChildren<{
    className?: string;
    navId: string;
    variant?: MenuVariant;
    hideScroller?: boolean;
    onClose?: () => void;
    onSelect?: () => void;
  }>
>;
// #endregion

export type TitleTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type Breadcrumb = {
  id: string;
  label: string;
};

// TODO: wtaf is up with react types not working in jsx
// FIXME: tsc doesnt see [index: string]: any;
type CommonComponents = {
  [index: string]: any;
  Clickable: ComponentClass<
    PropsWithChildren<{
      onClick?: () => void;
      href?: any;
      onKeyPress?: () => void;
      ignoreKeyPress?: boolean;
      innerRef?: Ref<any>;
      focusProps?: any;
      tag?: string | Component;
      role?: any;
      tabIndex?: any;
      className?: string;
    }>
  >;
  TextInput: TextInput;
  TextArea: TextArea;
  FormDivider: ComponentClass<
    PropsWithoutRef<{
      className?: string;
      style?: CSSProperties;
    }>
  >;
  FormSection: ComponentClass<
    PropsWithChildren<{
      className?: string;
      titleClassName?: string;
      title?: ReactNode;
      icon?: ReactNode;
      disabled?: boolean;
      htmlFor?: any;
      tag?: string;
    }>
  >;
  FormText: FormText;
  FormTitle: ComponentClass<
    PropsWithChildren<{
      tag?: TitleTag;
      className?: string;
      faded?: boolean;
      disabled?: boolean;
      required?: boolean;
      error?: string;
    }>
  >;
  FormSwitch: ComponentClass<
    PropsWithChildren<{
      className?: string;
      style?: CSSProperties;
      value: boolean;
      disabled?: boolean;
      hideBorder?: boolean;
      tooltipNote?: string;
      onChange?: (value: boolean) => void;
      note?: string;
      disabledText?: string;
    }>
  >;
  FormItem: ComponentClass<
    PropsWithChildren<{
      className?: string;
      style?: CSSProperties;
      disabled?: boolean;
      titleClassName?: string;
      tag?: TitleTag;
      required?: boolean;
      title?: string;
      error?: string;
    }>
  >;
  Slider: ComponentClass<
    PropsWithChildren<{
      disabled?: boolean;
      stickToMarkers?: boolean;
      className?: string;
      barStyles?: CSSProperties;
      fillStyles?: CSSProperties;
      mini?: boolean;
      hideBubble?: boolean;
      initialValue?: number;
      orientation?: "horizontal" | "vertical";
      onValueRender?: (value: number) => string;
      renderMarker?: (marker: number) => ReactNode;
      getAriaValueText?: (value: number) => string;
      barClassName?: string;
      grabberClassName?: string;
      grabberStyles?: CSSProperties;
      markerPosition?: SliderMarkerPosition;
      "aria-hidden"?: "true" | "false";
      "aria-label"?: string;
      "aria-labelledby"?: string;
      "aria-describedby"?: string;
      minValue?: number;
      maxValue?: number;
      asValueChanges?: (value: number) => void;
      onValueChange?: (value: number) => void;
      keyboardStep?: number;
    }>
  >;
  Switch: ComponentClass<
    PropsWithChildren<{
      className?: string;
      id?: string;
      onChange?: (value: boolean) => void;
      checked: boolean;
      disabled?: boolean;
      focusProps?: PropsWithoutRef<any>;
      innerRef?: React.Ref<any>;
    }>
  >;
  Button: Button;
  Tooltip: Tooltip;
  Avatar: Avatar;
  AvatarSizes: AvatarSizes;
  AvatarSizeSpecs: AvatarSizeSpecs;
  Scroller: ComponentType<
    PropsWithChildren<{
      className?: string;
      style?: CSSProperties;
      dir?: "ltr" | "rtl";
      orientation?: "vertical" | "horizontal";
      paddingFix?: boolean;
      fade?: boolean;
      onScroll?: () => void;
    }>
  >;
  Text: Text;
  Heading: React.ComponentType<
    PropsWithChildren<{
      color?: string;
      variant?: TextVariant;
      className?: string;
    }>
  >;
  Card: React.ComponentType<
    PropsWithChildren<{
      editable?: boolean;
      outline?: boolean;
      type?: string;
      className?: string;
    }> &
      React.HTMLAttributes<HTMLDivElement>
  > & {
    Types: {
      PRIMARY: string;
      DANGER: string;
      WARNING: string;
      SUCCESS: string;
      BRAND: string;
      CUSTOM: string;
    };
  };
  Popout: React.ComponentType<
    {
      shouldShow?: boolean;
      position?: string;
      onRequestOpen?: () => void;
      onRequestClose?: () => void;
      align?: "top" | "bottom" | "left" | "right" | "center" | "window_center";
      autoInvert?: boolean;
      fixed?: boolean;
      nudgeAlignIntoViewport?: boolean;
      useRawTargetDimensions?: boolean;
      spacing?: number;
      onShiftClick?: () => void;
      positionKey?: string;
      preload?: any;
      disablePointerEvents?: boolean;
      ignoreModalClicks?: boolean;
      closeOnScroll?: boolean;
      useMouseEnter?: boolean;
      renderPopout?: (props: { closePopout: () => void }) => ReactNode;
    } & {
      children: (props: any, props2: { isShown: boolean }) => ReactElement;
    }
  >;
  Dialog: React.ComponentType<
    PropsWithChildren<{
      impressionType?: string;
      impression?: any;
      disableTrack?: boolean;
      returnRef?: React.Ref<any>;
      ref?: React.Ref<any>;
    }> &
      React.HTMLAttributes<HTMLDivElement>
  >;
  Menu: Menu;
  MenuItem: MenuItem;
  MenuGroup: MenuGroup;
  MenuRadioItem: MenuRadioItem;
  MenuCheckboxItem: MenuCheckboxItem;
  MenuControlItem: MenuControlItem;
  SettingsNotice: React.ComponentType<{
    submitting: boolean;
    onReset: () => void;
    onSave: () => void;
  }>;
  TabBar: React.ComponentType<
    PropsWithChildren<{
      className?: string;
      type?: "side" | "top" | "top-pill";
      style?: CSSProperties;
      "aria-label"?: string;
      orientation?: "horizontal" | "vertical";

      selectedItem: any;
      onItemSelect: (id: any) => void;
      look?: string;
    }>
  > & {
    Item: React.ComponentType<
      PropsWithChildren<{
        className?: string;
        id?: any;
        selectedItem?: string;
        color?: string;
        disabled?: boolean;
        onContextMenu?: (event: React.MouseEvent) => void;
        clickableRef?: React.Ref<any>;
        look?: string;
        disableItemStyles?: boolean;
      }>
    >;
  };
  SingleSelect: React.ComponentType<{
    autofocus?: boolean;
    clearable?: boolean;
    value?: string;
    options?: SelectOption[];
    onChange?: (value: string) => void;
  }>;
  Select: React.ComponentType<
    | {
        autofocus?: boolean;
        clearable?: boolean;
        closeOnSelect?: boolean;
        value?: Set<string>;
        options?: SelectOption[];
        onChange?: (value: string[]) => void;
      }
    | SelectState
  >;
  NoticeColors: {
    BRAND: string;
    CUSTOM: string;
    DANGER: string;
    DEFAULT: string;
    INFO: string;
    NEUTRAL: string;
    PLAYSTATION: string; // notice how it's a CSS class instead of having games
    PREMIUM_TIER_0: string;
    PREMIUM_TIER_1: string;
    PREMIUM_TIER_2: string;
    SPOTIFY: string;
    STREAMER_MODE: string;
    WARNING: string;
  } & Record<string, string>;
  Notice: React.ComponentType<
    PropsWithChildren<{
      color?: string;
      className?: string;
      style?: CSSProperties;
    }>
  >;
  NoticeCloseButton: React.ComponentType<{
    onClick?: React.MouseEventHandler;
    noticeType: string;
  }>;
  PrimaryCTANoticeButton: React.ComponentType<
    {
      noticeType: string;
    } & React.ButtonHTMLAttributes<HTMLButtonElement>
  >;
  Breadcrumbs: React.ComponentType<
    PropsWithChildren<{
      activeId: string;
      breadcrumbs: Breadcrumb[];
      renderCustomBreadcrumb?: (
        breadcrumb: Breadcrumb,
        last: boolean
      ) => ReactNode;
      onBreadcrumbClick?: (breadcrumb: Breadcrumb) => void;
      className?: string;
      separatorClassName?: string;
    }>
  >;
  Image: React.ComponentType<
    React.PropsWithChildren<{
      className?: string;
      imageClassName?: string;
      readyState?: string;
      src?: string;
      srcIsAnimated?: boolean;
      placeholder?: string;
      placeholderVersion?: number;
      alt?: string;
      width?: number;
      height?: number;
      maxWidth?: number;
      maxHeight?: number;
      minWidth?: number;
      minHeight?: number;
      mediaLayoutType?: string;
      limitResponsiveWidth?: boolean;
      zoomable?: boolean;
      original?: string;
      onClick?: React.MouseEventHandler;
      tabIndex?: number;
      dataSafeSrc?: string;
      useFullWidth?: boolean;
    }>
  >;

  tokens: Tokens;
  useVariableSelect: (props: SelectProps) => SelectState;
  useMultiSelectState: (props: SelectProps) => SelectState;
  useSingleSelectState: (props: SelectProps) => SelectState;
  useMultiSelect: (value: any) => [Set<any>, (...args: any[]) => any];
  useSingleSelect: (value: any) => [Set<any>, (...args: any[]) => any];
  multiSelect: SelectInteractionCallback;
  openModal: (modal: ModalCallback) => string;
  openModalLazy: (modal: () => Promise<ModalCallback>) => Promise<string>;
  closeModal: (id: string) => void;
  useModalsStore: any;
};

register((moonmap) => {
  const name = "discord/components/common/index";
  moonmap.register({
    name,
    find: "MasonryList:function",
    process({ id }) {
      moonmap.addModule(id, name);

      return true;
    }
  });
});

export default CommonComponents;
