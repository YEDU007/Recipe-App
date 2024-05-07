import React from 'react'

const RecipeApp = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<div className="row g-3">
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label htmlFor="" className="form-label">Recipe Title</label>
<input type="text" className="form-control" />

    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label htmlFor="" className="form-label">The Creator</label>
<input type="text" className="form-control" />

    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<label htmlFor="" className="form-label">Description</label>
<textarea name="" id="" className="form-control"></textarea>

    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label htmlFor="" className="form-label">Choose Image</label>
<input type="file" name="" id="" className="form-control" />

    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label htmlFor="" className="form-label">Recipe Type</label>
<select name="" id="" className="form-select">
    <option value="Category">Category</option>
    <option value="Vegiterian">Vegitarian</option>
    <option value="Non Vegiterian">Non Vegitarian</option>
</select>

    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<label htmlFor="" className="form-label">Ingredients</label>
<textarea name="" id="" className="form-control"></textarea>

    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<button className="btn btn-success">Submit</button>

    </div>
</div>

            </div>
        </div>
      </div>
    </div>
  )
}

export default RecipeApp
