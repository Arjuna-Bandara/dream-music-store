import React, { useState, useEffect } from "react";
import ItemCard from "../ItemCard/ItemCard";
import { getData } from "../../Services/StoreService";

import './Content.css';

function Content() {


    const [data, setData] = useState([]);

    useEffect(() => {
        // Fetch data when the component mounts
        const fetchData = async () => {
            try {
                const result = await getData('/store');  // API endpoint
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();


    }, []);

    // console.log("outii ", data);

    // test axios

    // const reciepie = [
    //     { recipeName: 'Butter chicken', ingredienet: 'chicken, butter', description: 'spicey chicken with garlic masala source', imageName: 'butter-chicken.jpg' },
    //     { recipeName: 'Pizza', ingredienet: 'Cheese, tomatto, chicken', description: 'Italian pizza with authentic taste', imageName: 'kottu.jpg' },
    //     { recipeName: 'Kottu rotie', ingredienet: 'chicken, vegitables, onion', description: 'masala chicken with chopped rotie', imageName: 'pasteldeNata.jpg' },
    //     { recipeName: 'Pastel de Nata', ingredienet: 'Flour, sugar, milk, butter, cinnamon, eggs, salt', description: 'These traditional Portuguese egg custard tarts are known for their flaky crust and creamy filling, often sprinkled with cinnamon. They originated in Lisbon and are enjoyed worldwide.', imageName: 'kottu.jpg' },
    //     { recipeName: 'Sushi', ingredienet: 'Vinegared rice, raw fish (such as tuna or salmon), seaweed, vegetables, soy sauce, wasabi, pickled ginger', description: 'Sushi is a Japanese dish featuring vinegared rice combined with various ingredienet, including raw fish and vegetables. It is often served with soy sauce, wasabi, and pickled ginger for added flavor.', imageName: 'kottu.jpg' },
    //     { recipeName: 'Tacos', ingredienet: 'Corn or flour tortillas, meat (such as beef, chicken, or pork), cheese, lettuce, tomatoes, onions, cilantro, lime, salsa', description: 'Tacos are a traditional Mexican dish consisting of a tortilla filled with various ingredienet. They are versatile and can be customized with different meats, vegetables, and toppings.', imageName: 'kottu.jpg' }
    // ];


    const [dataFromChild, setDataFromChild] = useState("");
    const [itemCount, setItemCount] = useState(0);


    function handleDataFromChild(data) {
        setDataFromChild(data);
        setItemCount(itemCount + 1);
    }

    return (
        <>
            {/* {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'} */}

            <div className="Container row mt-4">
                <div className="col-md-2">
                    {/* left menu */}
                    <nav className="nav flex-column left-panel">
                        <h2>Filter by Item type: </h2>
                        <button className="btn btn-primary nav-button">Earbuds</button>
                        <button className="btn btn-primary nav-button">Headphones</button>
                        <button className="btn btn-primary nav-button">Bluetooth Speakers</button>

                        <hr></hr>
                        <h2>Filter by price: </h2>
                        Min : <input className="form-control" type="text"></input>
                        Max : <input className="form-control" type="text"></input>
                        <button className="btn btn-primary nav-button">Filter</button>
                    </nav>
                </div>

                <div className="col-md-10 row">


                    {
                        // reciepie.map(
                        //     foo => <FoodCard data={foo} sendDataToParent={handleDataFromChild} />
                        // )
                        data.map(
                            foo => <ItemCard data={foo} sendDataToParent={handleDataFromChild} />
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