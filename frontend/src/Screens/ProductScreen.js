import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { detailsProduct } from "../actions/productActions";


function ProductScreen (props) {

    const [qty, setqty] = useState(1);
    
    
    const productDetails = useSelector(state => state.productDetails);
    const {product, loading, error} = productDetails;
    const dispatch = useDispatch();
    const productId = props.match.params.id;
    useEffect(() => {
        dispatch(detailsProduct(productId));
        return () => {
            //
        };
    }, [])
    
    function setQuantity(event){
        setqty(event.target.value);
    }

    const handleAddToCart = () => {
        //to redirect to another url
        props.history.push("/cart/" + props.match.params.id + "?qty=" +qty);
    }

    return  (<div>
    <div className="back-to-result">
        <Link to="/">Back to result</Link>
    </div>
    {loading ? (<div>Loading...</div>) : 
   ( error ? (<div>{error}</div>) :
    (<div className="details">
        <div className="details-image">
            <img src={product.image} alt="product" ></img>
        </div>
        <div className="details-info">
            <ul>
                <li>
                    <h4>{product.name}</h4>
                </li>
                <li>
                    {product.rating} Stars ({product.numReviews} Reviews)
                </li>
                <li>
                    Price: <b>Rs{product.price}</b>
                </li>
                <li>
                    Description:
                    <div>
                        {product.description}
                    </div>
                </li>
            </ul>
        </div>
        <div className="details-action">
            <ul>
                <li>
                    Price: {product.price}
                </li>
                <li>
                    Status: {product.countInStock > 0 ? "In Stock" :"Unavailable"}
                </li>
                <li>
                    Qty: <select value={qty} onChange={setQuantity}>
                        {/* <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option> */}

                        {[...Array(product.countInStock).keys()].map(x => 
                        <option key={x+1} value = {x+1}>{x+1}</option>)}

                    </select>
                </li>
                <li>
                            {product.countInStock > 0 ?
                    <button onClick = {handleAddToCart} className="button">Add to Cart</button> :
                    <div> Out of Stock</div>}
                </li>
            </ul>
        </div>
        </div>))
    
    }
         

    </div>
    );
}

export default ProductScreen;