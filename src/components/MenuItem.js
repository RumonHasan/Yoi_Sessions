import React, { useState } from 'react';
const MenuItem = (props) => {
  const { menuItem, index } = props;
  const [colorChangeState, setColorChangeState] = useState(false);
  // change color function;
  const changeColor = () => {
    const newState = !colorChangeState;
    setColorChangeState(newState);
  };
  return (
    <span
      onClick={changeColor}
      className={
        colorChangeState ? 'menu-item trueColor' : 'menu-item falseColor'
      }
      key={index}
    >
      {menuItem}
    </span>
  );
};

export default MenuItem;
