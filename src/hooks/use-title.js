import { useState } from 'react';

const useTitle = () => {
  const [title, setTitle] = useState('');

  const handleChange = e => setTitle(e.target.value);

  return [title, handleChange];
};

export default useTitle;
