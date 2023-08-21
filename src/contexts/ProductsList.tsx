import React from 'react'
import { 
    ProductsListProviderProps,
    useProductsList, 
    IProductsList
} from '../typings/ProductsList'
import products from '../../api/products'
import { useState } from 'react'
import { Loading } from '../components/Loading'
import { IProductCart } from '../typings/ProductsList'

export const ProductsListContext = React.createContext<useProductsList>(
    {} as useProductsList
)

export function ProductsListProvider({ children }: ProductsListProviderProps) {
    const [productsList, setProductsList] = useState<IProductsList[]>([] as IProductsList[])
    const [user, setUser] = useState({
        birthdate: '',
        isPromotionApplied: false
    })
    const [cartOpen, setCartOpen] = useState(false)
    const [productsCart, setProductsCart] = useState<IProductCart[]>([])
     setTimeout(() => {
        setProductsList(products)
     }, 1000);

    
    return ( 
        <ProductsListContext.Provider 
            value={{
                productsList, 
                setProductsList,
                user,
                setUser,
                productsCart,
                setProductsCart,
                cartOpen, 
                setCartOpen
            }}>
            {productsList.length <= 1 ? <Loading /> : children}
        </ProductsListContext.Provider>
    )
}