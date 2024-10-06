import React, { useState } from "react";
import FoodCard from "../FoodCard/FoodCard";

import './Content.css';
import FoodData from "./FoodData";

function Content() {

    const reciepie = [
        { recipeName: 'Butter chicken', ingredienet: 'chicken, butter', description: 'spicey chicken with garlic masala source', imageName: 'butter-chicken.jpg' },
        { recipeName: 'Pizza', ingredienet: 'Cheese, tomatto, chicken', description: 'Italian pizza with authentic taste', imageName: 'kottu.jpg' },
        { recipeName: 'Kottu rotie', ingredienet: 'chicken, vegitables, onion', description: 'masala chicken with chopped rotie', imageName: 'pasteldeNata.jpg' },
        { recipeName: 'Pastel de Nata', ingredienet: 'Flour, sugar, milk, butter, cinnamon, eggs, salt', description: 'These traditional Portuguese egg custard tarts are known for their flaky crust and creamy filling, often sprinkled with cinnamon. They originated in Lisbon and are enjoyed worldwide.', imageName: 'kottu.jpg' },
        { recipeName: 'Sushi', ingredienet: 'Vinegared rice, raw fish (such as tuna or salmon), seaweed, vegetables, soy sauce, wasabi, pickled ginger', description: 'Sushi is a Japanese dish featuring vinegared rice combined with various ingredienet, including raw fish and vegetables. It is often served with soy sauce, wasabi, and pickled ginger for added flavor.', imageName: 'kottu.jpg' },
        { recipeName: 'Tacos', ingredienet: 'Corn or flour tortillas, meat (such as beef, chicken, or pork), cheese, lettuce, tomatoes, onions, cilantro, lime, salsa', description: 'Tacos are a traditional Mexican dish consisting of a tortilla filled with various ingredienet. They are versatile and can be customized with different meats, vegetables, and toppings.', imageName: 'kottu.jpg' }
    ];
 
    const [dataFromChild, setDataFromChild] = useState("");
    const [itemCount, setItemCount] = useState(0);

    
    function handleDataFromChild(data) {
        setDataFromChild(data);
        setItemCount(itemCount + 1 );
    }

    return (
        <>
            <div className="Container row mt-4">
                <div className="col-md-3">
                    {/* left menu */}
                    <nav className="nav flex-column left-panel">
                        <h2>Filter by food type: </h2>
                        <button className="btn btn-primary nav-button">Non-veg</button>
                        <button className="btn btn-primary nav-button">Veg</button>
                    </nav>
                </div>

                <div className="col-md-9 row">
                    {
                        reciepie.map(
                            foo => <FoodCard data={foo} sendDataToParent={handleDataFromChild} />
                        )
                    }
                    {/* pass input to h3 */}
                    <h3>Selected recipe: {dataFromChild}</h3>
                    <h3>Selected item count: {itemCount}</h3>
                </div>
            </div>
        </>
    )
}


export default Content;