import register from "../../../../registry";
import type { ReactNode, ComponentType } from "react";
import type { ButtonColors, ModalTransitionState } from "../common/index";

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
  transitionState?: ModalTransitionState;
  titleClassName?: string;
};

register((moonmap) => {
  const name = "discord/components/modals/ConfirmModal";
  moonmap.register({
    name,
    find: ".minorContainer,children:",
    process({ id }) {
      moonmap.addModule(id, name);

      return true;
    }
  });
});

type ConfirmModal = ComponentType<ConfirmModalProps>;
export default ConfirmModal;
