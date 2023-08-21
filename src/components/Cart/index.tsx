
import closeIcon  from "../../assets/close-icon.svg"
import trashIcon  from "../../assets/trash-icon.svg"
import { useProductsList } from "../../hooks/useProductList"
import { convertToReal } from "../../utils/utils"
import { ChangeEvent } from "react"

import "./styles.css"

export function Cart() {
  const {productsCart, setProductsCart, cartOpen, setCartOpen, user} = useProductsList()
  
  function total() {
    return productsCart.reduce((acc,item) => {
      let priceWithdiscount = Number(item.price)
      if(user.isPromotionApplied) {
        priceWithdiscount = Number(item.price)-(Number(item.price)*item.discountValue)
      }
      acc += priceWithdiscount*item.quantity
      return acc
    },0)
  }
  function deleteCartItem(id: string){
    const newProductsCart = productsCart.filter(item => item.id !== id)
    setProductsCart(newProductsCart)
  }
  function handleChangeQuantity(e: ChangeEvent<HTMLSelectElement>, id: string) {
    const newProductsCart = productsCart.filter(item => {
      if(item.id == id) {
        item.quantity = Number(e.target.value)
      }
      return item
    })
    setProductsCart(newProductsCart)
  }
  return (
    <>
    {cartOpen &&
    <div className="cart-overlay">
      <section className="cart">
        <div className="cart__header">
          <p>Minhas Compras</p>
          <img src={closeIcon} alt="fechar carrinho" className="cart__close" onClick={() => setCartOpen(false)}/>
        </div>
        <div className="cart__body">
            {productsCart.map(({image, name, brand, price, id, quantity, discountValue }) => (
            <div className="item" key={id}>
              <img src={image} alt={name} className="item__image"/>
              <div className="item__description">
                <p className="item__brand">{brand}</p>
                <p className="item__name">{name}</p>
              </div>
              <div className="item__action">
       
                <p className="item__price">
               { user.isPromotionApplied ? convertToReal(Number(price)-(Number(price)*discountValue)): convertToReal(Number(price))}
                </p>
                <select value={quantity.toString()} className="item__quantity" onChange={(e) => handleChangeQuantity(e, id)}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                </select>
                <img src={trashIcon} alt="excluir item" className="item__buttonTrash" onClick={()=>deleteCartItem(id)}/>
              </div>
            </div>
            ))}
        </div>
        <div className="cart__footer">
          <p className="total__description">Subtotal</p>
          <p className="total__price">{convertToReal(total())}</p>
          <button className="cart__button">Ir para o carrinho</button>
        </div>
      </section>
    </div>
    }
    </>
  )
}

export default Cart