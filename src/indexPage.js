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
            <ul className="list-group">
                <p>This first set of links are to the User facing UI and are not relevant to the rubric/project step</p>
                <li className="list-group-item"><Link to="/">Home Page</Link> </li>
                <li className="list-group-item"><Link to="/login">login</Link> </li>
                <li className="list-group-item"><Link to="/register">Create Account (add user)</Link> </li>
                <li className="list-group-item"><Link to="/CreateRecipe">Create Recipe</Link></li>
                <li className="list-group-item"><Link to="/CreateReview">Write Review</Link></li>
                <li className="list-group-item"><Link to="/recipe">View Recipe</Link></li>
                {/* <li className="list-group-item"><Link to="/ingredient">Add Ingredient</Link></li> */}
                
                <p>All the links below here are to admin/table management pages.</p>
                <li className="list-group-item"><Link to="/RecipesIngredientsTable">RecipesIngredients table view</Link></li>
                <p>page for viewing and manipulating RecipesIngredients table</p>
                <li className="list-group-item"><Link to="/UsersTable">Users Table view</Link></li>
                <p>page for viewing and manipulating Users table</p>
                <li className="list-group-item"><Link to="/RecipesTable">Recipes Table view</Link></li>
                <p>page for viewing and manipulating Recipes table</p>
                <li className="list-group-item"><Link to="/IngredientsTable">Ingredients Table view</Link></li>
                <p>page for viewing and manipulating Ingredients table</p>
                <li className="list-group-item"><Link to="/ReviewsTable">Reviews table view</Link></li>
                <p>page for viewing and manipulating Reviews table</p>

            </ul>
            

            </div>


        </div>
</div>
    )
}

export default indexPage
