export interface useProductsList {
    productsList: IProductsList[]
    setProductsList: React.Dispatch<React.SetStateAction<IProductsList[]>>
    user: IUser
    setUser: React.Dispatch<React.SetStateAction<IUser>>
    productsCart: IProductCart[],
    setProductsCart:  React.Dispatch<React.SetStateAction<IProductCart[]>>
    cartOpen : boolean,
    setCartOpen:  React.Dispatch<React.SetStateAction<boolean>>
}

export interface ProductsListProviderProps {
    children: React.ReactNode;
}

export type IProductsList =  {
    id: string,
    image: string,
    name: string,
    price: string,
    quantity: number,
    discountValue: number,
    measureUnit: number,
    typeOfMeasure: string,
    brand: string,
}

export type IUser = {   
    birthdate: string,
    isPromotionApplied: boolean
}

export type IBanner  = {
    url: string
}

export type ICard = {
    icon: string,
    text: string
}
export type IMenus = {
   item: string,
   link: string
}

export type IProductCart = {
    id: string,
    image: string,
    name: string,
    price: string,
    quantity: number,
    discountValue: number,
    brand: string,
}