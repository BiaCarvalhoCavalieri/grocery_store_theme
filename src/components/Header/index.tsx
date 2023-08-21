import DiscountInfoBar from "../DiscountInfoBar"
import brandLogo from "../../assets/grocery-store-logo.svg"
import searchIcon from "../../assets/search-icon.svg"
import userIcon from "../../assets/user-icon.svg"
import cartIcon from "../../assets/cart-icon.svg"
import Menu from "../Menu"
import { useNavigate } from "react-router-dom"
import { useProductsList } from '../../hooks/useProductList'

import "./styles.css"

export function Header() {
    
    const { setCartOpen } = useProductsList()
    const navigate = useNavigate()
    
    function returnToHome(){
        navigate("/")
    }

     return (
    
        <div className="header content-flex flex-column">
            <div className="container">
                <div className="header__first-row content-flex align-center justify-center">
                    <img className="header__company-logo" src={brandLogo} onClick={returnToHome}/>
                    <div className="header__search content-flex align-center">
                        <button className="header__search-iconBtn">
                            <img className="header__search-iconImg" src={searchIcon} alt="clique aqui e faça sua busca"/>
                        </button>
                        <input className="header__search-bar" placeholder="Olá! O que você precisa encontrar hoje?"/>
                    </div>
                    <div className="header__infss content-flex">
                        <div className="header__user content-flex align-center">
                            <img className="header__user-icon" src={userIcon} alt="Entrar "/>      
                            <span className="header__user-text">Acessar minha conta</span>              
                        </div>
                        <div className="header__cart content-flex align-center">
                            <img className="header__cart-icon" src={cartIcon} alt="abrir carrinho" onClick={() => setCartOpen(true)}/>                    
                        </div>
                    </div>
                </div>
            </div>
            <Menu />
            <DiscountInfoBar/>
        </div>
    )
}

export default Header