import { useState, useCallback } from 'react';

export default function useDialog(initialMode = false) {
  const [dialogVisible, setDialogVisible] = useState(initialMode);

  const toggleDialog = useCallback(() => {
    setDialogVisible((prev) => !prev);
  }, []);

  return { dialogVisible, toggleDialog };
}
