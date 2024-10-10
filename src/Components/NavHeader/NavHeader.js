import React from "react";
import { Link } from "react-router-dom";
import "./NavHeader.css";

// import bootstrapMin from "bootstrap/dist/js/bootstrap.min";

function NavHeader() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid navbar-custom">
                    {/* <a className="navbar-brand" href="#">Navbar </a> */}
                    <a className="navbar-brand" href="#"> 
                        <img src="favicon-2.webp" width={"80px"} alt="ToneMaster Audio Logo"></img>
                    </a>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/hotdeals">Hot Deals</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/about">About us</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
                            </li> */}

                        </ul>

                        <form className="d-flex flex-row bd-highlight" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"  />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                                                
                        <div>
                            <button type="button" class="btn btn-success btn-cart">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
                                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"></path>
                                </svg>
                                 3 items
                            </button>                            
                        </div>


                        <Link className="nav-link active" aria-current="page" to="/login">
                          <button type="button" class="btn btn-warning btn-login" >Login</button>
                        </Link>
                        
                        <Link className="nav-link active" aria-current="page" to="/signup">
                            <button type="button" class="btn btn-info btn-signup">Sign up</button>
                        </Link>
                        
                    </div>
                </div>
            </nav>
        </>
    )
}


export default NavHeader;