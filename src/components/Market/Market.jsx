
import '../../styles/Market/Product.scss'

const Product = (props) => {
    return (
        <div className="product">
            <p>{props.name}</p>
            <p>cost: {props.cost}$</p>
            { props.isByed ? <span className="is-byed-true"></span> : <span className="is-byed-false"></span> }
        </div>
    );
}

export default Product;