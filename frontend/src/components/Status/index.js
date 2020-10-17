import React from 'react';

import './index.css';

const Status = ({description, status}) => {
  return (
    <>
      <span className='journeyItemStatus'>
        <p className={'svg status' + status}/>

        <p>{description}</p>
      </span>
    </>
  )
}

export default Status;