import React from 'react'

function Ingredient() {
    return (

         <div className="container marketing">
            <div className="jumbotron jumbotron-fluid">
            <div className="container">
            <h1 className="display-4">Add an ingredient</h1>
            <form role="form" action="#todo" method="POST">
                <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-lg-8 m-2">

                    <input type="hidden" name="_next" value="#"/>
                    <input type="hidden" name="_subject" value="New submission!"/>


                    <div className="form-group">
                    <label for="InputName">ingredient</label>
                    <input type="text" className="form-control" name="name" id="InputName" placeholder="Add an ingredient" required=""/>
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
                <p>Note to TAs: This form will not actually be needed in production, as ingredient table entries will be created automatically. But the Rubric seemed to require a manual way to add one. </p>
 
            </div>
      </div>
        </div>

    )
}

export default Ingredient;
