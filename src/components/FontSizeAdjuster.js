import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseFontSize, decreaseFontSize } from '../redux/themeSlice';

const FontSizeAdjuster = () => {
  const dispatch = useDispatch();
  const fontSize = useSelector((state) => state.theme.fontSize);

  return (
    <div className='flex items-center gap-4'>
      <button className='text-2xl font-bold border border-white rounded-lg py-2 px-3 text-white ' onClick={() => dispatch(decreaseFontSize())}>-</button>
      <button className='text-2xl font-bold border border-white rounded-lg py-2 px-3 text-white' onClick={() => dispatch(increaseFontSize())}>+</button>
    </div>
  );
};

export default FontSizeAdjuster;
