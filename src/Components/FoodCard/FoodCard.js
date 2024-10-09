import React from "react";
import { useState } from "react";
import logo from '../../logo.svg';
import './FoodCard.css';

// kottu image
import KottuImg from '../../Asserts/images/oneplus_buds_3.webp';

const imgDirectory = '../../Asserts/images/';

function FoodCard({ data, sendDataToParent }) {

    const prop = { data };
    const foodcardStyle = { width: 18 + 'rem', marginRight: 8 + 'px' };
    const imgGg = '../../Asserts/images/oneplus_buds_3.webp';



    function handleClick(reciepieSelected) {
        sendDataToParent(reciepieSelected);

    }

    return (
        <>
            {/* card will populate with recipeName, ingredienet, description */}
            <div className="card card-boarder" id="food-card" style={foodcardStyle}>

                {/* <img src={imgDirectory + prop.data.imageName} className="card-img-top" alt="..." /> */}
                <img src={KottuImg} className="card-img-top" alt="..." />

                <div className="card-body">
                    <h4 className="card-title"> {prop.data.recipeName}</h4>
                    <p className="card-text">Ingredient : {prop.data.ingredienet}</p>
                    <p className="card-text">description : {prop.data.description}</p>

                    <div className="row action-group">
                        <div className="col-md-6">
                            <button className="btn btn-success"
                                onClick={() => handleClick(prop.data.recipeName)}
                            >Order</button>
                        </div>
                        <div className="col-md-6">
                            <button className="btn btn-primary"
                                onClick={() => handleClick(prop.data.recipeName)}
                            >Add Cart</button>
                        </div>


                    </div>

                    <div className="row action-group">

                        <div className="col-md-6">
                            <button className="btn btn-primary"
                                onClick={() => handleClick(prop.data.recipeName)}
                            >Add to WishList</button>
                        </div>
                        <div className="col-md-6">
                            <button className="btn btn-primary"
                                onClick={() => handleClick(prop.data.recipeName)}
                            >More details</button>

                        </div>

                    </div>

            
                    
                   
                 
                </div>
            </div>
        </>
    )
}


export default FoodCard;