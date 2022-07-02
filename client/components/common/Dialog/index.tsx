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
  disabledConfirm?: boolean;
  onConfirm?: () => void;
  onCancel?: () => void;
}

const Dialog: React.FC<DialogProps> = ({
  type = 'modal',
  confirmText,
  disabledConfirm = false,
  onConfirm,
  onCancel,
  children,
}) => {
  const dialogRef = typeof window !== 'undefined' && (document.getElementById('root-dialog') as HTMLDivElement);
  if (!dialogRef) return null;

  return createPortal(
    <DialogWrapper>
      <DialogDimmed />
      <DialogWrap>
        <DialogInner>
          hi
          <DialogContent>{children}</DialogContent>
          <DialogBottom>
            <CancelBtn>취소</CancelBtn>
            <ActionBtn>ㅇㅋ</ActionBtn>
          </DialogBottom>
        </DialogInner>
      </DialogWrap>
    </DialogWrapper>,
    dialogRef
  );
};

export default Dialog;
