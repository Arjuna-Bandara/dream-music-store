import React from "react";
import { useState } from "react";
import logo from '../../logo.svg';
import './FoodCard.css';

// kottu image
import KottuImg from '../../Asserts/images/Tacos.jpg';

const imgDirectory = '../../Asserts/images/';

function FoodCard({ data, sendDataToParent }) {

    const prop = { data };
    const foodcardStyle = { width: 18 + 'rem', marginRight: 8 + 'px' };
    const imgGg = '../../Asserts/images/Tacos.jpg';

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

                    <button className="btn btn-primary"                      
                        onClick={() => handleClick(prop.data.recipeName)}
                    >Order</button>
                </div>
            </div>
        </>
    )
}


export default FoodCard;