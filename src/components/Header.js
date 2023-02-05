import React, { useState } from 'react';
import './header.css';
import MenuItem from './MenuItem';

const Header = () => {
  // array of menu items
  const [menuItems, setMenuItems] = useState([
    'About Me',
    'Contact',
    'Services Provided',
  ]);

  return (
    <div className="header-container">
      {menuItems.map((singleItem, index) => {
        return <MenuItem menuItem={singleItem} index={index} />;
      })}
    </div>
  );
};

export default Header;
