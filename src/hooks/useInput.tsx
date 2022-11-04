import { useCallback, useState } from 'react';

const useInput = (init: string) => {
  const [text, setText] = useState(init);

  const handleChangeInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setText(e.target.value);
    },
    []
  );

  const reset = useCallback((): void => {
    setText(init);
  }, [init]);

  return [text, handleChangeInput, reset] as const;
};

export default useInput;
