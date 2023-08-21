import ProductSummary from "../ProductSummary"

import "./styles.css"

export function Shelf() {

     return (
        <div className="shelf__container container">
            <div className="shelf__infos content-flex"> 
                <h2 className="shelf__title">Destaques da semana</h2>
                <span className="shelf__text">Ofertas que vão deixar sua semana ainda mais especial.</span>
            </div>
            <ProductSummary />
        </div>
    )
}

export default Shelf