import React from "react";
import "./CreateRecipe.css";
import { useStateValue } from "./../StateProvider";


function CreateRecipe() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="container marketing">
            <div className="jumbotron jumbotron-fluid">
            <div className="container">
            <h1 className="display-4">Add your favorite Recipe!</h1>
            <form role="form" action="#todo" method="POST">
                <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-lg-8 m-2">

                    <input type="hidden" name="_next" value="#"/>
                    <input type="hidden" name="_subject" value="New submission!"/>


                    <div className="form-group">
                    <label for="InputName">Recipe Name</label>
                    <input type="text" className="form-control" name="name" id="InputName" placeholder="Enter Recipe name" required=""/>
                    </div>

                    <div className="form-group">
                    <label for="InputName">Recipe description</label>
                    <input type="text" className="form-control" name="name" id="description" placeholder="A short description of your recipe" required=""/>
                    </div>
                    
                    <div className="form-group">
                    <label for="prepTime">preperation time (minutes)</label>
                    <input type="number" className="form-control" id="prepTime" name="_replyto" placeholder="Enter preperation time in minutes" required=""/>
                    </div>

                    <div className="form-group">
                    <label for="ingredientsList">List all ingredients (seperated by commas)</label>
                    <textarea name="ingredientsList" id="ingredientsList" className="form-control" placeholder="first ingredient, another ingredient, etc..." rows="5" required=""></textarea>
                    </div>

                    <div className="form-group">
                    <label for="InputMessage">preperation instructions:</label>
                    <textarea name="InputMessage" id="instructions" className="form-control" placeholder="Instructions for making the recipe (Markdown supported)" rows="5" required=""></textarea>
                    </div>


                </div>
                <hr className="hidden-lg"/>
                </div>

                <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>

                <input type="submit" name="submit" id="submit" value="SUBMIT" className="btn btn-info pull-right"/>
                </div>
            </form>
            </div>
            <hr className="hidden-lg"/>
            <div className="container">
                <p>Note to TAs: RecipeID is generated automatically. userID is added from loggedIn state. views, rating and other metadata will be generated elsewhere. Not added by user manually. </p>
 
            </div>
      </div>
        </div>

  );
}

export default CreateRecipe;
