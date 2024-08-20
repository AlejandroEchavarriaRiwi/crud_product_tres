'use client'
import React from 'react';
import DarkModeToggle from '@/controllers/button.mode/button.toggle';


const NightMode: React.FC = () => {
  return (
    <div className='DarkModeButtonContainer'>
      <DarkModeToggle />
    </div>
  )
}

export default NightMode;