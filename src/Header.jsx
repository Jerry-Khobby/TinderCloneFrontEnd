import React from 'react';
import './Header.css';
import Person2Icon from '@mui/icons-material/Person2';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';

const Header = () => {
    return ( 
        <div className='header'>
<IconButton>
<Person2Icon fontSize='large' className="header__icon"/>
</IconButton>
<img src="https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png" alt=""  className='header__logo'/>
<IconButton>
<ForumIcon fontSize='large' className='header__icon'/>
</IconButton>
        </div>
     );
}
export default Header;
