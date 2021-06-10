import React from 'react';

export const AllPizzas = () => {
  return (
    <div className="container">
      <h1 className="display-6">All pizza options</h1>

      <div className="container row">
        <div className="card col m-5">
          <div className="card-body">
            <h5 className="card-title">Bbq</h5>
            <a href="" className="btn btn-primary">Choose</a>
          </div>
        </div>

        <div className="card col m-5">
          <div className="card-body">
            <h5 className="card-title">Pepperoni</h5>
            <a href="" className="btn btn-primary">Choose</a>
          </div>
        </div>
      </div>

      <div className="container row">
        <div className="card col m-5">
          <div className="card-body">
            <h5 className="card-title">Vegan garden</h5>
            <a href="" className="btn btn-primary">Choose</a>
          </div>
        </div>

        <div className="card col m-5">
          <div className="card-body">
            <h5 className="card-title">Vegan cheese</h5>
            <a href="" className="btn btn-primary">Choose</a>
          </div>
        </div>
      </div>
    </div>
  )
}