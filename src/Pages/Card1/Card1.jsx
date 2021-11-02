import React, { useContext } from 'react';
import {
    faEye,
    faHeart,
    faShoppingCart,
    faStar,
  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Card1.css'
import { productsContext } from '../../App';
const Card1 = () => {

    const { products, setProducts } = useContext(productsContext);

  const handleAddToCart = (pd) => {
    console.log(pd,"add to cart")
    const newCart = { ...products, cart: [...products.cart, pd] };
    console.log(newCart);
    setProducts(newCart);

    localStorage.setItem("cart", JSON.stringify(newCart.cart));
  };
    return (
        <div className="card-body">
      <div className="card-container">
      {
      products.pds.length===0?"No Products Found":products.pds.map((pd, index)=>
      <div key={pd.id} className="card">
          <div className="imgBx">
            <img src={pd.img} alt="" srcset="" />
            <ul className="card-action">
              <li>
                <FontAwesomeIcon className="card-star-icon " icon={faHeart} />
                <span>Add to Wishlist</span>
              </li>
              <li onClick={() => handleAddToCart(pd)}>
                <FontAwesomeIcon className="card-star-icon " icon={faShoppingCart} />
                <span>Add to cart</span>
              </li>
              <li>
                <FontAwesomeIcon className="card-star-icon" icon={faEye}/>                  
                <span>View Details</span>                
              </li>
            </ul>
          </div>
          <div className="content">
            <div className="productName">
              <h3>{pd.name}</h3>
            </div>
            <div className="price-rating">
              <h2>${pd.price}</h2>
              <div className="rating">
                <FontAwesomeIcon className="card-star-icon " icon={faStar} />
                <FontAwesomeIcon className="card-star-icon " icon={faStar} />
                <FontAwesomeIcon className="card-star-icon " icon={faStar} />
                <FontAwesomeIcon className="card-star-icon " icon={faStar} />
                <FontAwesomeIcon
                  className="card-star-icon card-star-icon-gray"
                  icon={faStar}
                />
              </div>
            </div>
          </div>
        </div>      
      )
    }
      </div>
    </div>
    );
};

export default Card1;