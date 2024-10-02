import { ModuleExportType } from "@moonlight-mod/moonmap";
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
    }>
  > {
  Sizes: typeof TextInputSizes;
}

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

export enum SliderMarkerPosition {
  ABOVE,
  BELOW
}

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

// TODO: wtaf is up with react types not working in jsx
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
  FormDivider: ComponentClass<any>;
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
      tag?: string;
      className?: string;
      faded?: boolean;
      disabled?: boolean;
      required?: boolean;
      error?: string;
    }>
  >;
  FormSwitch: ComponentClass<PropsWithChildren<any>>;
  FormItem: ComponentClass<PropsWithChildren<any>>;
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
  Switch: ComponentClass<PropsWithChildren<any>>;
  Button: Button;
  Tooltip: ComponentClass<PropsWithChildren<any>>;
  SmallSlider: Component;
  Avatar: Component;
  Scroller: Component;
  Text: ComponentClass<PropsWithChildren<any>>;
  Heading: ComponentClass<PropsWithChildren<any>>;
  Card: ComponentClass<PropsWithChildren<any>>;
  Popout: ComponentClass<PropsWithChildren<any>>;
  Dialog: ComponentClass<PropsWithChildren<any>>;
  Menu: ComponentClass<PropsWithChildren<any>>;
  MenuItem: ComponentClass<PropsWithChildren<any>>;
  MenuGroup: ComponentClass<PropsWithChildren<any>>;
  MenuCheckboxItem: ComponentClass<PropsWithChildren<any>>;
  SettingsNotice: React.ComponentType<{
    submitting: boolean;
    onReset: () => void;
    onSave: () => void;
  }>;
  TabBar: React.ComponentType<any> & {
    Item: React.ComponentType<any>;
  };
  SingleSelect: React.ComponentType<{
    autofocus?: boolean;
    clearable?: boolean;
    value?: string;
    options?: {
      value: string;
      label: string;
    }[];
    onChange?: (value: string) => void;
  }>;
  Select: React.ComponentType<{
    autofocus?: boolean;
    clearable?: boolean;
    value?: string[];
    options?: {
      value: string;
      label: string;
    }[];
    onChange?: (value: string[]) => void;
  }>;

  // TODO
  useVariableSelect: any;
  multiSelect: any;
  tokens: any;
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
