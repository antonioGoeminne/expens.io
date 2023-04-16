import { useAutoAnimate } from '@formkit/auto-animate/react';
import _ from 'lodash';
import { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

import { OPTIONS_MENU_EXPENSES } from '@/constants';

export const MenuAdd = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const toggleMenu = (bool: boolean) => {
    setOpenMenu(bool);
  };
  const [parent] = useAutoAnimate({ duration: 150 });
  return (
    <div ref={parent} className='relative'>
      <div
        onMouseEnter={() => toggleMenu(true)}
        onMouseLeave={() => toggleMenu(false)}
        className='h-9  cursor-pointer rounded-full border-4 border-white p-1'
      >
        <AiOutlinePlus color='#fff' fontSize={20} />
      </div>
      {openMenu ? (
        <ul
          onMouseEnter={() => toggleMenu(true)}
          onMouseLeave={() => toggleMenu(false)}
          className='absolute left-5 top-7 z-10 flex flex-col items-start rounded-md bg-white px-3 py-2 shadow-2xl'
        >
          {_.values(OPTIONS_MENU_EXPENSES).map((v: string, index: number) => (
            <li
              key={index}
              className='m-0  cursor-pointer whitespace-nowrap p-1 text-sm font-bold hover:underline active:bg-gray-100'
            >
              {v}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
