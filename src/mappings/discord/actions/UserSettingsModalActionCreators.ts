import { ModuleExportType } from "@moonlight-mod/moonmap";
import register from "../../../registry";

export type UserSettingsOpenOptions = {
  openWithoutBackstack: boolean;
};

export type AccountChanges = {
  username: string;
  email: string;
  emailToken: string;
  password: string;
  avatar: string;
  newPassword: string;
  discriminator: string;
};

export type UserSettingsModalActionCreators = {
  open: (
    section?: string,
    subsection?: string,
    options?: UserSettingsOpenOptions
  ) => void;
  init: (
    section?: string,
    subsection?: string,
    options?: UserSettingsOpenOptions
  ) => void;
  close: () => void;
  setSection: (
    section: string,
    subsection?: string,
    options?: UserSettingsOpenOptions
  ) => void;
  clearSubsection: (section: string) => void;
  clearScrollPosition: (section: string) => void;
  updateAccount: (settings: any) => void;
  submitComplete: () => void;
  reset: () => void;
  saveAccountChanges: (
    changes: AccountChanges,
    options: { close: boolean }
  ) => any;
};

register((moonmap) => {
  const name = "discord/actions/UserSettingsModalActionCreators";
  moonmap.register({
    name,
    find: ':"USER_SETTINGS_MODAL_SET_SECTION"',
    process({ id }) {
      moonmap.addModule(id, name);

      return true;
    }
  });
});

export default UserSettingsModalActionCreators;
