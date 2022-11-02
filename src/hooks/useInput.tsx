import { useState, ChangeEvent } from 'react';

const useInput = (initialState: string) => {
  const [value, setValue] = useState(initialState);

  const onChange = (
    e: ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLInputElement>,
  ) => {
    setValue(e.target.value);
  };

  const resetValue = () => {
    setValue('');
  };

  return { value, onChange, resetValue };
};

export default useInput;
