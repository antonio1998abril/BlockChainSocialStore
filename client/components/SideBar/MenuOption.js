import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faClipboard,faGlobeAsia,faNewspaper,faCogs,faAddressBook,faList,faBuilding, faCartArrowDown,faShip} from '@fortawesome/free-solid-svg-icons'
/* import 'bootstrap/dist/css/bootstrap.min.css'; */

export const MenuOption = [
    {
        title:'Search',
        path:'/',
        icon:<FontAwesomeIcon icon={faGlobeAsia}  inverse transform="shrink-6"  /> ,
        cName:'nav-text'
    },
    {
        title:'Home',
        path:'/home',
        icon:<FontAwesomeIcon icon={faHome}  inverse transform="shrink-6" /> ,
        cName:'nav-text'
    },
    {
        title:'Products',
        path:'/Option/Product',
        icon:<FontAwesomeIcon icon={faClipboard}  inverse transform="shrink-8" />,
        cName:'nav-text'
    },
    {
        title:'Port',
        path:'/service/IndexPort',
        icon:<FontAwesomeIcon icon={faShip}  inverse transform="shrink-6"/>,
        cName:'nav-text'
    },
      {
        title:'News',
        path:'/service/News/NewsIndex',
        icon:<FontAwesomeIcon icon={faNewspaper}  inverse transform="shrink-7" />,
        cName:'nav-text'
    },  
    {
        title:'Categories',
        path:'/service/IndexCategories',
        icon:<FontAwesomeIcon icon={faList}  inverse transform="shrink-8" />,
        cName:'nav-text'
    },{
        title:'Company',
        path:'/service/IndexCompany',
        icon:<FontAwesomeIcon icon={faBuilding}  inverse transform="shrink-8" />,
        cName:'nav-text'
    },
     {
        title:'Shop',
        path:'/service/history/history',
        icon:<FontAwesomeIcon icon={faCartArrowDown}  inverse transform="shrink-6"/>,
        cName:'nav-text'        
    }, 
      {
        title:'Following',
        path:'/service/following/followingIdex',
        icon:<FontAwesomeIcon icon={faAddressBook}  inverse transform="shrink-8" />,
        cName:'nav-text'
    },  
     {
/*         title:'My Perfil',
        path:'/config/config',
        icon:<FontAwesomeIcon icon={faCogs}  inverse transform="shrink-6" />,
        cName:'nav-text' */
        title:'My Perfil',
        path:'/test',
        icon:<FontAwesomeIcon icon={faCogs}  inverse transform="shrink-6" />,
        cName:'nav-text'
    } ,
     
]
