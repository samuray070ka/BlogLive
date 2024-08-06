import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseFontSize, decreaseFontSize } from '../redux/themeSlice';

const FontSizeAdjuster = () => {
  const dispatch = useDispatch();
  const fontSize = useSelector((state) => state.theme.fontSize);

  return (
    <div className='flex items-center gap-4'>
      <button className='text-xl border border-white py-2 px-3 text-black ' onClick={() => dispatch(decreaseFontSize())}>-</button>
      <button className='text-xl border border-white py-2 px-3 text-black' onClick={() => dispatch(increaseFontSize())}>+</button>
    </div>
  );
};

export default FontSizeAdjuster;
