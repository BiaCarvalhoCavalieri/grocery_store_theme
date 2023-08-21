import { ChangeEvent, FormEvent, useState } from "react"
import { convertToReal } from "../../utils/utils"
import { useProductsList } from "../../hooks/useProductList"

import './styles.css'


export function ProductSummary() {
    const  { productsList, user, setProductsCart, productsCart, setCartOpen } = useProductsList()
    const initialProductSelectedState = productsList.map(product => ({
        id: product.id,
        productSelected: false
    }))
    const [productSelected, setProductSelected] = useState(initialProductSelectedState)

    function handleChange(e: ChangeEvent<HTMLSelectElement>, id:string) {
        const { value } = e.target
        const valueNumber = parseInt(value)
        if (valueNumber >= 1) {
            const updatedProducts = productSelected.map(product => {
                if (product.id === id) {
                    return { ...product, productSelected: true }
                } else {
                    return product
                }
            })
            setProductSelected(updatedProducts)
        } else {
            const updatedProducts = productSelected.map(product => {
                if (product.id === id) {
                    return { ...product, productSelected: false }
                } else {
                    return product
                }
            })
            setProductSelected(updatedProducts)
        }    
    }
    function checkingTypeOfMeasure(typeOfMeasure:string) {
        let measureName 
        if (typeOfMeasure === "grams") {
            measureName = "g"
        } else if (typeOfMeasure === "kilo") {
            measureName = "kg"
        } else {
            measureName = ""
        }
        return measureName
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>, id: string, image: string, name: string, price: string, discountValue: number, brand: string) {
        event.preventDefault();
        const form = event.target as HTMLFormElement
        const selectElement = form.elements.namedItem("quantity") as HTMLSelectElement
        const selectedValue = parseInt(selectElement.value)

        const indexProductsCart  =productsCart.findIndex(product => product.id == id)

        let newProductsCart = []
        if(indexProductsCart < 0) {
            newProductsCart = [
                ...productsCart,
                {  
                    id: id,
                    image: image,
                    name: name,
                    price: price,
                    quantity: selectedValue,
                    discountValue: discountValue,
                    brand: brand
                }
            ]
        } else {
            newProductsCart = productsCart.filter(item => {
                if(item.id === id) {
                    item.quantity +=selectedValue
                }
                return item
            })    
        }

        setProductsCart(newProductsCart)

        setCartOpen(true)
    
    }

    return (
        <>
            { productsList ? (
                <div className="shelf__container content-flex">
                
                    {productsList.map(({ id, image, name, price, discountValue, measureUnit, typeOfMeasure, brand }) => (
                        <form className="product__container content-flex" key={id} onSubmit={(event) => handleSubmit(event, id, image, name, price, discountValue, brand)}>
                            <img src={image} alt="Imagem do Produto" className="product__image"/>
                            <h3 className="product__title">
                                {name}
                            </h3>
                            <div className="product__price-container content-flex flex-column">
                                { user.isPromotionApplied ? (
                                    <span className="product__oldPrice">
                                        {convertToReal(Number(price))}
                                    </span>
                                ): null }
                                <span className="product__currentPrice content-flex align-center">
                                    { user.isPromotionApplied ? (
                                        <>
                                            {convertToReal(Number(price)-(Number(price)*discountValue))}
                                            <span className="product__discountFlag">
                                                -{discountValue*100}%
                                            </span>
                                        </>
                                    ): (
                                        <>
                                            {convertToReal(Number(price))}
                                        </>
                                    )}
                                </span>
                                <span className="product__promotion">
                                    Compre 2 leve 3!
                                </span>
                            </div>
                            
                            <select name="quantity" className="product__quantity-selection" onChange={(e) => handleChange(e, id)}>
                                <option value="0">0</option>
                                <option value="1">{measureUnit*1}{checkingTypeOfMeasure(typeOfMeasure)}</option>
                                <option value="2">{measureUnit*2}{checkingTypeOfMeasure(typeOfMeasure)}</option>
                                <option value="3">{measureUnit*3}{checkingTypeOfMeasure(typeOfMeasure)}</option>
                                <option value="4">{measureUnit*4}{checkingTypeOfMeasure(typeOfMeasure)}</option>
                                <option value="5">{measureUnit*5}{checkingTypeOfMeasure(typeOfMeasure)}</option>
                                <option value="6">{measureUnit*6}{checkingTypeOfMeasure(typeOfMeasure)}</option>
                                <option value="7">{measureUnit*7}{checkingTypeOfMeasure(typeOfMeasure)}</option>
                                <option value="8">{measureUnit*8}{checkingTypeOfMeasure(typeOfMeasure)}</option>
                                <option value="9">{measureUnit*9}{checkingTypeOfMeasure(typeOfMeasure)}</option>
                                <option value="10">{measureUnit*10}{checkingTypeOfMeasure(typeOfMeasure)}</option>
                                <option value="11">{measureUnit*11}{checkingTypeOfMeasure(typeOfMeasure)}</option>
                                <option value="12">{measureUnit*12}{checkingTypeOfMeasure(typeOfMeasure)}</option>
                                <option value="13">{measureUnit*13}{checkingTypeOfMeasure(typeOfMeasure)}</option>
                                <option value="14">{measureUnit*14}{checkingTypeOfMeasure(typeOfMeasure)}</option>
                                <option value="15">{measureUnit*15}{checkingTypeOfMeasure(typeOfMeasure)}</option>
                            </select>
                            
                        
                            <button
                                key={id}
                                className={`product__buyButton ${productSelected.find(product => product.id === id && product.productSelected) ? 'active' : ''}`}
                                type="submit"
                            >
                                Adicionar ao Carrinho 
                            </button>
                        </form>
                    ))}
                    
                </div>
            ) : null }
        </>
    )
}

export default ProductSummary
