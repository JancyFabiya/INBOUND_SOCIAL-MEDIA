import React from 'react';
import Logo from '../../img/log.jpg'
// import {UilSearch} from '@iconscout/react-unicons'
import './LogoSearch.css'
const LogoSearch = () => {
  return (
    <div className="LogoSearch">
<img src={Logo} width="86%" alt=''/>
{/* <div className="Search">
    <input type="text" placeholder='Search'/>
    <div className="s-icon">
        <UilSearch/>
    </div>
</div> */}
    </div>
  );
}

export default LogoSearch;
