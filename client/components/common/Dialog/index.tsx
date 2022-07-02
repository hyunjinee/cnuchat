import { useCallback } from 'react';
import { createPortal } from 'react-dom';
import {
  ActionBtn,
  CancelBtn,
  DialogBottom,
  DialogContent,
  DialogDimmed,
  DialogInner,
  DialogWrap,
  DialogWrapper,
} from './styles';

interface DialogProps {
  type: 'modal' | 'alert';
  confirmText?: string;
  children: React.ReactNode;
  disabled?: boolean;
  onConfirm?: () => void;
  onClose?: () => void;
}

const Dialog: React.FC<DialogProps> = ({
  type = 'modal',
  confirmText,
  disabled = false,
  onConfirm,
  onClose,
  children,
}) => {
  const dialogRef = typeof window !== 'undefined' && (document.getElementById('root-dialog') as HTMLDivElement);
  if (!dialogRef) return null;

  const renderDialogActionText = useCallback(() => {
    if (confirmText) return confirmText;
  }, []);

  return createPortal(
    <DialogWrapper>
      <DialogDimmed onClick={onClose} />
      <DialogWrap>
        <DialogInner>
          <DialogContent>{children}</DialogContent>
          <DialogBottom>
            <CancelBtn onClick={onClose}>취소</CancelBtn>
            <ActionBtn dialogType={type} disabled={disabled} onClick={onConfirm}>
              ㅇㅋ
            </ActionBtn>
          </DialogBottom>
        </DialogInner>
      </DialogWrap>
    </DialogWrapper>,
    dialogRef
  );
};

export default Dialog;
