import React from 'react'
import { useStateValue } from "./StateProvider"

function CreateReview() {

    const [{ user }, dispatch] = useStateValue();

    return (
        <div className="container marketing">
        <div className="jumbotron jumbotron-fluid">
        <div className="container">
        <h1 className="display-4">Review your favorite Recipe!</h1>
        <form role="form" action="#todo" method="POST">
            <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8 m-2">

                <input type="hidden" name="_next" value="#"/>
                <input type="hidden" name="_subject" value="New submission!"/>

                <div className="form-group">
                <label for="rating">Rating </label>
                <input type="number" className="form-control" id="prepTime" name="_replyto" placeholder="Enter a rating between 1-5" required=""/>
                </div>

                <div className="form-group">
                <input type="submit" name="submit" id="submit" value="Upload an image" className="btn btn-info pull-right"/>
                </div>

                <div className="form-group">
                <label for="InputMessage">Review</label>
                <textarea name="InputMessage" id="instructions" className="form-control" placeholder="Your review of the recipe" rows="5" required=""></textarea>
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
            <p>Note to TAs:</p> <p>reviewID is generated automatically. recipeID will be pulled from the recipe the user is reviewing. userID will be added automatically. 
                This form will be moved to an option below a Recipe's individual page. </p>
            <p></p>

        </div>
  </div>
    </div>

    )
}

export default CreateReview
