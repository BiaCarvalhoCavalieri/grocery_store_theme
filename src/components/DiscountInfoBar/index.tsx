import discountIcon from "../../assets/discount-icon.svg"
import { useProductsList } from "../../hooks/useProductList"

import "./styles.css"

export function DiscountInfoBar() {

    const { user } = useProductsList()

    return (        
        <>
            {user.isPromotionApplied && (
                <div className="discount__background">
                    <div className="container">
                        <div className="discount">
                            <img src={discountIcon} alt="desconto do item" />
                            <p>Parabéns, você ativou descontos de 10% em todos os produtos do site!</p>
                        </div>
                    </div>
                </div> 
            )}
        </>    
    )
}

export default DiscountInfoBar