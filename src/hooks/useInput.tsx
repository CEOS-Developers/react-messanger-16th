import { useState } from 'react';

const useInput = (initialValue: string) => {
  const [chat, setChat] = useState(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setChat(e.target.value);
  };

  const resetChat = (): void => {
    setChat('');
  };

  return { chat, handleChange, resetChat };
};

export default useInput;
