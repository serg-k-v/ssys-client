
import '../../styles/Market/Product.scss'
import { useNavigate } from "react-router-dom";

const Product = (props) => {
    
    const navigate = useNavigate();
    const onClickProduct = (event, navLink)  => {
        event.preventDefault()
        
        if ( !navLink )
        {
            console.log("Not authorised!")
            console.log("link: ", navLink)

            return
        }

        navigate(navLink)
    }

    return (
        <div className="product" onClick={e => onClickProduct(e,  props.isByed ? props.navLink : "") }>
            <p>{props.name}</p>
            <p>cost: {props.cost}$</p>
            { props.isByed ? <span className="is-byed-true"></span> : <span className="is-byed-false"></span> }
        </div>
    );
}

export default Product;