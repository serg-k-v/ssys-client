
import Product from "../components/Market/Market";

const Market = () => {
    
    const productList = [
        {name:"Audit", cost: 70,   isByed: false, navLink : "/audit-list"}, 
        {name:"Network", cost: 70, isByed: false, navLink : "/error" }]

    return (
        <div>
            <h1> Markert </h1>
            <div className="product-container">
                {productList.map(el => { return <Product {...el}/>})}
            </div>
        </div>
    );
}

export default Market;