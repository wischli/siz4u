import DesktopTeaser from '../images/siz4u-header-old.png'
import React from 'react';

export default function Header() {
  return (
    <header className='App-header' style={{ paddingTop: 50 }}>
      <div className='wrapper'>
        <img
          src={DesktopTeaser}
          className='App-logo'
          width='100%'
          height='100%'
          alt='logo'
        />
      </div>
    </header>
  )
}