import Header from '../../components/Header'
import  Modal  from '../../components/Modal'
import Shelf from '../../components/Shelf'
import Banner from '../../components/Banner'
import Card  from '../../components/Card'
import Footer from '../../components/Footer'
import Cart from '../../components/Cart'
import { ProductsListProvider } from '../../contexts/ProductsList'

export function Home() {
  
  return (
    <ProductsListProvider>
      <Header />
      <Cart/>
      <Banner/>
      <Card/>
      <Modal />
      <Shelf />
      <Footer/>
    </ProductsListProvider>
  )
}

export default Home
