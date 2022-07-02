import styled from 'styled-components';
import theme from 'styles/theme';

export const DialogWrapper = styled.div`
  position: fixed;
  /* position: absolute; */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10000;
  /* background: black; */
`;

export const DialogDimmed = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const DialogWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const DialogInner = styled.div`
  width: 31.3rem;
  border-radius: 1.4rem;
  background-color: white;
`;

export const DialogContent = styled.div`
  width: 100%;
`;

export const DialogBottom = styled.div`
  border-top: 0.1rem solid ${theme.colors.gray3};
`;

export const CancelBtn = styled.button`
  width: 50%;
  height: 5.92rem;
  ${theme.fonts.h4};
  border-right: 0.1rem solid ${theme.colors.gray3};
  padding: 2rem 0;
  text-align: center;
  cursor: pointer;
`;

export const ActionBtn = styled.button<{ dialogType?: any; disabled?: boolean; onClick?: () => void }>`
  width: 50%;
  height: 5.92rem;
  ${theme.fonts.h4}

  cursor: pointer;
  padding: 1.9rem 0;
  border-bottom-right-radius: 1.4rem;
`;
