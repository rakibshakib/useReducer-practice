import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import { addToCart, getProducts } from '../../provider/actions/cartAction';
import { FoodDataContext } from '../../provider/reducers/cartProvider';


const ProductDetails = () => {
    const { id } = useParams();
    const { state, dispatch } = useContext(FoodDataContext);
    const { product } = state;

    useEffect(() => {
       dispatch(getProducts(id))
    }, [id, dispatch]);

    const addToCartHandler = () => {
        dispatch(addToCart(product, 1))
    }
      return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-6">
                    <h1>{product?.title} </h1>
                    <p>{product?.description}</p>
                    <button className="btn btn-primary" onClick={addToCartHandler}>Add to Cart</button>
                </div>
                <div className="col-md-6">
                    <img src={product?.img} alt="" className="img-fluid" />
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;