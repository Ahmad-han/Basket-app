



export const Button = ({ setBought, id, product }) => {

    return (
        <div className="card-button">
            <button className={product.bought === false ? "btn" : "btn2"} onClick={() => setBought(id)}>
                {product.bought === false ? "Добавить в корзину" : "ДОБАВЛЕНО"}
                </button>
        </div>
    )
}