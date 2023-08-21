import cards from "../../../api/cards"
import { ICard } from "../../typings/ProductsList"

import "./styles.css"

export function Card() {

  const cardsList:ICard[] = cards
  
  return (
    <div className="container">
      <section className="cards">
        {cardsList.map((card, index) => (
            <div className="card" key={index}>
              <img src={card.icon}  className="card__icon" />
              <p className="card__text">{card.text}</p>
            </div>
          ))}
      </section>
    </div>
  )
}

export default Card