// auto-generated
import ChromaJS from "./mappings/chroma-js";
import classnames from "./mappings/classnames";
import DependencyGraph from "./mappings/dependency-graph";
import Constants from "./mappings/discord/Constants";
import DispatcherInstance from "./mappings/discord/Dispatcher";
import ContextMenuActionCreators from "./mappings/discord/actions/ContextMenuActionCreators";
import UserSettingsModalActionCreators from "./mappings/discord/actions/UserSettingsModalActionCreators";
import AppStartPerformance from "./mappings/discord/common/AppStartPerformance";
import Alerts from "./mappings/discord/components/common/Alerts";
import BaseHeaderBar from "./mappings/discord/components/common/BaseHeaderBar";
import FileUpload from "./mappings/discord/components/common/FileUpload";
import FormSwitchCSS from "./mappings/discord/components/common/FormSwitch.css";
import HeaderBarCSS from "./mappings/discord/components/common/HeaderBar.css";
import HelpMessageCSS from "./mappings/discord/components/common/HelpMessage.css";
import PanelButton from "./mappings/discord/components/common/PanelButton";
import ScrollerCSS from "./mappings/discord/components/common/Scroller.css";
import Components from "./mappings/discord/components/common/index";
import ConfirmModal from "./mappings/discord/components/modals/ConfirmModal";
import BaseRecord from "./mappings/discord/lib/BaseRecord";
import Storage from "./mappings/discord/lib/web/Storage";
import BuildOverrideCSS from "./mappings/discord/modules/build_overrides/web/BuildOverride.css";
import DiscoveryCSS from "./mappings/discord/modules/discovery/web/Discovery.css";
import ForumsCSS from "./mappings/discord/modules/forums/web/Forums.css";
import ForumHeaderCSS from "./mappings/discord/modules/forums/web/Header.css";
import ForumSortMenuCSS from "./mappings/discord/modules/forums/web/SortMenu.css";
import ForumTag from "./mappings/discord/modules/forums/web/Tag";
import GuildSettingsRoleEditCSS from "./mappings/discord/modules/guild_settings/roles/web/GuildSettingsRoleEdit.css";
import AppCardCSS from "./mappings/discord/modules/guild_settings/web/AppCard.css";
import AppCardItemCSS from "./mappings/discord/modules/guild_settings/web/AppCardItem.css";
import GuildSettingsSearchSectionCSS from "./mappings/discord/modules/guild_settings/web/SearchSection.css";
import CategoryChannelCSS from "./mappings/discord/modules/guild_sidebar/web/CategoryChannel.css";
import MarkupUtils from "./mappings/discord/modules/markup/MarkupUtils";
import Menu from "./mappings/discord/modules/menus/web/Menu";
import MarkupCSS from "./mappings/discord/modules/messages/web/Markup.css";
import MessageCSS from "./mappings/discord/modules/messages/web/Message.css";
import Modals from "./mappings/discord/modules/modals/Modals";
import Oauth2 from "./mappings/discord/modules/oauth2/index";
import PeoplePageCSS from "./mappings/discord/modules/people/web/PeoplePage.css";
import ByteSizeActivityCSS from "./mappings/discord/modules/user_profile/web/BiteSizeActivity.css";
import Flux from "./mappings/discord/packages/flux";
import BatchedStoreListener from "./mappings/discord/packages/flux/BatchedStoreListener";
import ChangeListeners from "./mappings/discord/packages/flux/ChangeListeners";
import _Dispatcher from "./mappings/discord/packages/flux/Dispatcher";
import Emitter from "./mappings/discord/packages/flux/Emitter";
import LoggingUtils from "./mappings/discord/packages/flux/LoggingUtils";
import PersistedStore from "./mappings/discord/packages/flux/PersistedStore";
import Store from "./mappings/discord/packages/flux/Store";
import connectStores from "./mappings/discord/packages/flux/connectStores";
import UserRecord from "./mappings/discord/records/UserRecord";
import MarginsCSS from "./mappings/discord/styles/shared/Margins.css";
import Flex from "./mappings/discord/uikit/Flex";
import ClipboardUtils from "./mappings/discord/utils/ClipboardUtils";
import ComponentDispatchUtils from "./mappings/discord/utils/ComponentDispatchUtils";
import HTTPUtils from "./mappings/discord/utils/HTTPUtils";
import MaskedLinkUtils from "./mappings/discord/utils/MaskedLinkUtils";
import NativeUtils from "./mappings/discord/utils/NativeUtils";
import HighlightJS from "./mappings/highlight.js";
import HighlightJSCore from "./mappings/highlight.js/lib/core";
import lodash from "./mappings/lodash";
import murmurhash from "./mappings/murmurhash";
import PlatformJS from "./mappings/platform.js";
import React from "./mappings/react";
import UUID from "./mappings/uuid/v4";

export type MappedModules = {
  "chroma-js": ChromaJS;
  classnames: classnames;
  "dependency-graph": DependencyGraph;
  "discord/Constants": Constants;
  "discord/Dispatcher": DispatcherInstance;
  "discord/actions/ContextMenuActionCreators": ContextMenuActionCreators;
  "discord/actions/UserSettingsModalActionCreators": UserSettingsModalActionCreators;
  "discord/common/AppStartPerformance": AppStartPerformance;
  "discord/components/common/Alerts": Alerts;
  "discord/components/common/BaseHeaderBar": BaseHeaderBar;
  "discord/components/common/FileUpload": FileUpload;
  "discord/components/common/FormSwitch.css": FormSwitchCSS;
  "discord/components/common/HeaderBar.css": HeaderBarCSS;
  "discord/components/common/HelpMessage.css": HelpMessageCSS;
  "discord/components/common/PanelButton": PanelButton;
  "discord/components/common/Scroller.css": ScrollerCSS;
  "discord/components/common/index": Components;
  "discord/components/modals/ConfirmModal": ConfirmModal;
  "discord/lib/BaseRecord": BaseRecord;
  "discord/lib/web/Storage": Storage;
  "discord/modules/build_overrides/web/BuildOverride.css": BuildOverrideCSS;
  "discord/modules/discovery/web/Discovery.css": DiscoveryCSS;
  "discord/modules/forums/web/Forums.css": ForumsCSS;
  "discord/modules/forums/web/Header.css": ForumHeaderCSS;
  "discord/modules/forums/web/SortMenu.css": ForumSortMenuCSS;
  "discord/modules/forums/web/Tag": ForumTag;
  "discord/modules/guild_settings/roles/web/GuildSettingsRoleEdit.css": GuildSettingsRoleEditCSS;
  "discord/modules/guild_settings/web/AppCard.css": AppCardCSS;
  "discord/modules/guild_settings/web/AppCardItem.css": AppCardItemCSS;
  "discord/modules/guild_settings/web/SearchSection.css": GuildSettingsSearchSectionCSS;
  "discord/modules/guild_sidebar/web/CategoryChannel.css": CategoryChannelCSS;
  "discord/modules/markup/MarkupUtils": MarkupUtils;
  "discord/modules/menus/web/Menu": Menu;
  "discord/modules/messages/web/Markup.css": MarkupCSS;
  "discord/modules/messages/web/Message.css": MessageCSS;
  "discord/modules/modals/Modals": Modals;
  "discord/modules/oauth2/index": Oauth2;
  "discord/modules/people/web/PeoplePage.css": PeoplePageCSS;
  "discord/modules/user_profile/web/BiteSizeActivity.css": ByteSizeActivityCSS;
  "discord/packages/flux": Flux;
  "discord/packages/flux/BatchedStoreListener": BatchedStoreListener;
  "discord/packages/flux/ChangeListeners": ChangeListeners;
  "discord/packages/flux/Dispatcher": _Dispatcher;
  "discord/packages/flux/Emitter": Emitter;
  "discord/packages/flux/LoggingUtils": LoggingUtils;
  "discord/packages/flux/PersistedStore": PersistedStore;
  "discord/packages/flux/Store": Store;
  "discord/packages/flux/connectStores": connectStores;
  "discord/records/UserRecord": UserRecord;
  "discord/styles/shared/Margins.css": MarginsCSS;
  "discord/uikit/Flex": Flex;
  "discord/utils/ClipboardUtils": ClipboardUtils;
  "discord/utils/ComponentDispatchUtils": ComponentDispatchUtils;
  "discord/utils/HTTPUtils": HTTPUtils;
  "discord/utils/MaskedLinkUtils": MaskedLinkUtils;
  "discord/utils/NativeUtils": NativeUtils;
  "highlight.js": HighlightJS;
  "highlight.js/lib/core": HighlightJSCore;
  lodash: lodash;
  murmurhash: murmurhash;
  "platform.js": PlatformJS;
  react: React;
  "uuid/v4": UUID;
};

export declare function WebpackRequire<T extends keyof MappedModules>(module: T): MappedModules[T];
