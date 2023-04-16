import React from 'react';

import { ExpensesChart } from '@/components/ExpensesChart';
import { MenuAdd } from '@/components/MenuAdd';

export const Expenses = () => {
  return (
    <>
      <h1 className='m-2 text-2xl font-bold'>Expens.io</h1>
      <div className='relative min-w-[300px] rounded-b-xl shadow-md'>
        <div className='flex justify-between rounded-t-xl bg-[#52A7B2] px-6 py-4 align-middle'>
          <MenuAdd />
          <div className='leading-1 flex flex-col items-start justify-start text-sm text-white'>
            <p>Balance</p>
            <h2 className='text-xl '>$75.000</h2>
          </div>
        </div>
        <span className='my-5 flex w-full justify-center'>
          <span className='w-60 border border-slate-200'></span>
        </span>
        <ExpensesChart />
      </div>
    </>
  );
};
