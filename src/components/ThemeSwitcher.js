import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setColor } from '../redux/themeSlice';

const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const currentColor = useSelector((state) => state.theme.color);

  useEffect(() => {
    const savedColor = localStorage.getItem('theme');
    if (savedColor) {
      dispatch(setColor(savedColor));
      document.querySelector('#root').className = savedColor;
    }
  }, [dispatch]);

  const handleColorChange = (color) => {
    dispatch(setColor(color));
    localStorage.setItem('theme', color);
    document.querySelector('#root').className = color;
  };

  return (
    <div className='flex gap-2'>
      <button className=' py-2 px-3 text-xl font-bold text-white border border-white rounded-lg changeBtn' onClick={() => handleColorChange('light')} disabled={currentColor === 'light'}>
        A
      </button>
      <button className=' bg-gray-500 py-2 px-3 text-xl font-bold text-white border border-white rounded-lg ' onClick={() => handleColorChange('blue')} disabled={currentColor === 'blue'}>
        A
      </button>
      <button className='bg-black py-2 px-3 text-xl font-bold text-white border border-white rounded-lg ' onClick={() => handleColorChange('dark')} disabled={currentColor === 'dark'}>
        A
      </button>
      
    </div>
  );
};

export default ThemeSwitcher;
