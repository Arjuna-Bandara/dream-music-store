import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from '../../logo.svg';
import './ItemCard.css';
import { StoreContext, StoreProvider } from "../../Context/StoreContext";

// kottu image
import KottuImg from '../../Asserts/images/oneplus_buds_3.webp';

const imgDirectory = '../../Asserts/images/';

function ItemCard({ data, sendDataToParent }) {

    const prop = { data };
    const ItemcardStyle = { width: 18 + 'rem', marginRight: 8 + 'px' };

    const {cart, addCart} = useContext(StoreContext);


    function handleClick(reciepieSelected) {
        sendDataToParent(reciepieSelected);

    }

    function addToCard(value){
        addCart(value);
        console.log(cart);
    }

    return (
        <>
            <div className="card card-boarder" id="item-card" style={ItemcardStyle}>
                <div className="wish-item">
                    <button className="btn btn-primary"
                        onClick={() => handleClick(prop.data.name)}
                    > 🤍 </button>
                </div>

                <img src={KottuImg} className="card-img-top" alt="..." />

                <div className="card-body">
                    <h4 className="card-title"> {prop.data.name}</h4>
                    <p className="card-text">Short description : {prop.data.short_desc}</p>

                    <Link className="nav-link active" aria-current="page" to="/iteminfo" value="testi" >
                        <button className="btn btn-info"
                            onClick={() => handleClick(prop.data.name)}
                        >Details</button>                    
                    </Link>


                    <p>
                        <strong className="card-text">Price : USD {prop.data.price} </strong>
                    </p>

                    <div className="row action-group">
                        <div className="col-md-4">
                            <button className="btn btn-success"
                                onClick={() => handleClick(prop.data.name)}
                            >Order</button>
                        </div>
                        <div className="col-md-6">
                            <button className="btn btn-primary"
                                onClick={() => addToCard(prop.data)}
                            >Add Cart</button>
                        </div>


                    </div>

                </div>
            </div>
        </>
    )
}


export default ItemCard;