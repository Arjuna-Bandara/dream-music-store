import React from "react";
import NavHeader from "../NavHeader/NavHeader";
import { useParams } from "react-router-dom";

import KottuImg from '../../Asserts/images/oneplus_buds_3.webp';

function ItemInfoPage({data}) {
    return (
        <>
            <NavHeader />
            <div className="container">
                <h2>Item info</h2>

                <img src={KottuImg} className="card-img-top" alt="..." style={{"width":"200px"}} />

                <div className="card-body">
                    <h4 className="card-title"> </h4>
                    <p className="card-text">Short description : </p>


                    <p>
                        <strong className="card-text">Price : USD </strong>
                    </p>

                </div>
            </div>
        </>
    )
}

export default ItemInfoPage