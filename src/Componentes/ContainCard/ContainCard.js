import React from 'react';
import'./styles.css'
const ContainCard = (props) => {
  const {children}=props
  return (
    <div className='cont__card'>
      {children}
    </div>
  );
};

export default ContainCard;
