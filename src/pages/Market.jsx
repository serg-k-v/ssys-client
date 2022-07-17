
import Product from "../components/Market/Market";

const Market = () => {
    
    const productList = [{name:"Audit", cost: 70, isByed: false }, {name:"Network", cost: 70, isByed: false }]

    return (
        <div>
            <h1> Markert </h1>
            <div className="product-container">
                {productList.map(el => { return <Product name={el.name} cost={el.cost}/>})}
            </div>
        </div>
    );
}

export default Market;