import React from 'react'
import {MenuOption} from './MenuOption'
import {useRouter} from 'next/router';
import Link from 'next/link';



function Sidebar() {
    const router = useRouter()
    const active = router.pathname;
    return (
      <nav className="sidebar">
      <div className="nav__container" >
        
          {
            MenuOption.map((item,index) => {
              return (
              <Link href={item.path} key={index} ><a   
                 className={(item.path === active ? 'nav__item active': 'nav__item')} > 

                <div  className="nav__item-icon">
                  {item.icon}
                </div>
                <div className="nav__item-name">{item.title}</div>
                </a>
                </Link>
              )
            })
          }
      </div>
    </nav>

    )
}

export default Sidebar
