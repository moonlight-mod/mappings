import register from "../../../../registry";
import type { ReactNode, ComponentType } from "react";
import type { ModalTransitionState } from "../common/index";
import type { ButtonColors } from "../../uikit/legacy/Button";

export type ConfirmModalProps = {
  body?: ReactNode;
  cancelText?: ReactNode;
  className?: string;
  confirmColor?: ButtonColors;
  confirmText?: ReactNode;
  secondaryConfirmText?: ReactNode;
  onCancel?: () => void;
  onConfirm?: () => void;
  onConfirmSecondary?: () => void;
  title?: ReactNode;
  transitionState: ModalTransitionState | null;
  titleClassName?: string;
};
export type ConfirmModal = ComponentType<ConfirmModalProps>;

type Exports = {
  default: ConfirmModal;
};
export default Exports;

register((moonmap) => {
  const name = "discord/components/modals/ConfirmModal";
  moonmap.register({
    name,
    find: 'parentComponent:"Alert",',
    process({ id }) {
      moonmap.addModule(id, name);

      return true;
    }
  });
});
