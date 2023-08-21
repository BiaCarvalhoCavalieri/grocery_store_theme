import {useContext} from 'react'
import { ProductsListContext } from '../contexts/ProductsList'

export function useProductsList() {
    const context = useContext(ProductsListContext)
    return context
}