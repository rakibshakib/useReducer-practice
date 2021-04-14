import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FoodDataContext } from '../../provider/reducers/cartProvider';

const Navbar = () => {
    const { state } = useContext(FoodDataContext);
    return (
        <nav class="navbar navbar-light bg-light py-2">
            <div class="container">
                <Link class="navbar-brand" to="/">
                    <img src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" />
                </Link>
                <ul className="navbar-nav">
                    <li class="nav-item">
                        <Link to="/cart" className=" nav-link active">
                            Cart ( {state.cart.length} )
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/wishlist" className="nav-link active">
                            Wishlist ({state.wishlist.length})
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;