import { Button } from "./Button"



export const Card = ({ product, setBought }) => {

    return (
        <div className="card">          
            <div class="card-image">
                <img src={product.image} alt="" />
            </div>
            <div class="card-info">
                <div class="card-name">{ product.name }</div>
                <div class="card-price">{product.price} ₽</div>
                <Button setBought={setBought} id={product.id} product={product}/>
            </div>

        </div>
    )
}