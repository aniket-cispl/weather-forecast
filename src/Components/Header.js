import React, { memo } from 'react';
import logoImg from '../assets/img/logo.png';

function Header({ days, months }) {

  const currDate = new Date();
  const finalDate = days[currDate.getDay()] + ' - ' + months[currDate.getMonth()] + ' ' + currDate.getDate() + ', ' + currDate.getFullYear()

  return (
    <>
      <header className="">
        <div className="d-flex justify-content-between p-3">
          <div className="">
            <h6><img top width="50px" src={logoImg} alt="Card image cap" className="logoImg" /> WEATHER FORECAST PORTAL</h6>
          </div>

          <div className="">
            <h6>{finalDate}</h6>
          </div>
        </div>
      </header>
    </>
  );
}

export default memo(Header);
