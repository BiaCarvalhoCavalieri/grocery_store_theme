import banners from '../../../api/banner'
import { IBanner } from "../../typings/ProductsList"

import "./styles.css"

export function Banner() {
  
  const bannersList:IBanner[] = banners
  
  return (
    <section className="banners">
      <div className="container">
        {bannersList.map((banner, index) => <img src={banner.url} key={index} className="banner" />)}
      </div>
    </section>
  )
}

export default Banner