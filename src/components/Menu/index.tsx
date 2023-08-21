


import { useState } from "react"
import menus from '../../../api/menu'
import { IMenus } from "../../typings/ProductsList"

import "./styles.css"

export function Menu() {

  const [menuList] = useState<IMenus[]>(menus)

  return (
    <section className="menu__background">
      <div className="container">
        <nav className="menu">
            {menuList.map(({link, item}) => (
                <a key={item} href={link} className="menu__item">{item}</a>
                ))}
        </nav>
      </div>
    </section>
  )
}


export default Menu