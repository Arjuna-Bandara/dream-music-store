import React from "react";
import NavHeader from "../NavHeader/NavHeader";
import "./AboutPage.css";

function AboutPage() {
    return (
        <>
            <NavHeader />
            <div className="container">
                <h2>Hello there 👋</h2>
                <h3>Good day!</h3>

                <div className="row">
                    <div className="col-md-8">
                        <p>
                            Welcome to ToneMaster Audio, where great sound meets affordability! Founded by Arjuna Thennakoon and based in the heart of Kandy, Sri Lanka, we’re passionate about bringing you the newest and best in headphones, earbuds, and microphones—without the hefty price tag.
                        </p>

                        <p>

                            At ToneMaster Audio, we believe everyone deserves to enjoy top-quality audio gear, whether you're jamming to your favorite tunes or getting crystal-clear sound for your calls. We carefully select our products to make sure you get the latest tech at prices that won’t break the bank.


                        </p>

                        <p>
                            Join us on a journey to better sound, and let’s find the perfect audio gear for you!
                        </p>
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

                        <a href="#" class="fa fa-facebook"></a>
                        <a href="#" class="fa fa-twitter"></a>                        
                    </div>

                    <div className="col-md-4">
                        

                        <img class="img-thumbnail" alt="..." src="./store-main-logo.webp"></img>
                    </div>
                </div>

            </div>

        </>
    )
}

export default AboutPage;