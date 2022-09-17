import React from "react";
import './Home.css';

const Home = () => {
    return (
        <div className="container my-5">
            <div className="cart-wrapper ">
                <div className="img-wrapper ">
                    <img src="https://m.media-amazon.com/images/I/81xvGbBFNhL._SL1500_.jpg" alt="Loading..." />
                </div>
                <div className="text-wrapper item mx-5">
                    <div className="mx-3">Samsung</div>
                    <span>Price:$1000.00</span>
                </div>
                <div className="btn-wrapper item my-2 mx-5">
                    <button className="btn btn-primary">Add to cart</button>
                </div>

            </div>

        </div>
    )

}
export default Home;