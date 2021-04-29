import React from 'react'
import "./Home.css"
import Carousel from "./Carousel"
import "./carousel.css"
import "./Recipe.css"
import { Link } from "react-router-dom"


function indexPage() {
    return (
                <div className="home">
                    <div className="home__container">





                    <div className="row featurette">
                    <div className="col-md-7 order-md-2">
                    <h2 className="featurette-heading">Index</h2>
                    
                    
                    </div>
                    <div className="col-md-5">
                    
                </div>
            </div>


            <div className="container marketing">
            <p>This page is an index of all nescessary pages for TA's to grade during this project step.</p>
           
            <hr className="featurette-divider"/>
            <ul class="list-group">
                <li class="list-group-item"><Link to="/">Home Page</Link> </li>
                <li class="list-group-item"><Link to="/login">login</Link> </li>
                <li class="list-group-item"><Link to="/register">Create Account (add user)</Link> </li>
                <li class="list-group-item"><Link to="/CreateReview">Write Review</Link></li>
                <li class="list-group-item"><Link to="/recipe">View Recipe</Link></li>
                <li class="list-group-item"><Link to="/ingredient">Add Ingredient</Link></li>
            </ul>
            

            </div>


        </div>
</div>
    )
}

export default indexPage
