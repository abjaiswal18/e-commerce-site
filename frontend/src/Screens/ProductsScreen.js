
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { saveProduct } from "../actions/productActions";
import { signin } from "../actions/userActions";



function ProductsScreen (props) {

    const [name,setName] = useState("");
    const [price,setPrice] = useState("");
    const [image,setImage] = useState("");
    const [brand,setBrand] = useState("");
    const [category,setCategory] = useState("");
    const [countInStock,setCountInStock] = useState("");
    const [description,setDescription] = useState("");
    

    const productSave = useSelector(state=>state.productSave);
    const {loading: loadingSave, success: successSave, error: errorSave} = productSave;
    const dispatch = useDispatch();

    useEffect(() => {
       
        
        return () => {
            //
        };
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveProduct({name, price, image, brand, category,
             countInStock, description}));
    }

    return  <div className="form">
    <form onSubmit={submitHandler}>
        <ul className="form-container">
            <li>
                <h2>Create Product</h2>
            </li>
            <li>
                {loadingSave && <div>Loading...</div>}
                {errorSave && <div>{errorSave}</div>}
            </li>
            <li>
                <label htmlFor="name">
                    Name
                </label>
                <input type="text" name="name" id="name" onChange={(event) => setName(event.target.value)} >
                    </input>
            </li>

            <li>
                <label htmlFor="price">
                    Price
                </label>
                <input type="text" name="price" id="price" onChange={(event) => setPrice(event.target.value)} >
                    </input>
            </li>
            <li>
                <label htmlFor="image">
                    Image
                </label>
                <input type="text" name="image" id="image" onChange={(event) => setImage(event.target.value)} >
                    </input>
            </li>
            <li>
                <label htmlFor="brand">
                    Brand
                </label>
                <input type="text" name="brand" id="brand" onChange={(event) => setBrand(event.target.value)} >
                    </input>
            </li>
            <li>
                <label htmlFor="countInStock">
                    Count InStock
                </label>
                <input type="text" name="countInStock" id="countInStock" onChange={(event) => setCountInStock(event.target.value)} >
                    </input>
            </li>
            <li>
                <label htmlFor="category">
                    Category
                </label>
                <input type="text" name="category" id="category" onChange={(event) => setCategory(event.target.value)} >
                    </input>
            </li>
            <li>
                <label htmlFor="description">
                    Description
                </label>
                <textarea name="description" id="description" onChange={(event) => setDescription(event.target.value)} >
                    </textarea>
            </li>
            
            <li>
                <button type="submit" className="button primary">Create</button>
            </li>
            
        </ul>
    </form>
    </div>
}

export default ProductsScreen;