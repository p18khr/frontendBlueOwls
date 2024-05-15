import React from 'react'

export default function AddPatient() {
  return (
    <div>
     <form className="mx-3 my-5">
          <div className="form-row">
            <div className="col-md-6 mb-3">
              <label style={{ color: "white" }}>
                Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <label
                style={{ color: "white" }}
              >
                Mobile Number
              </label>
              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  aria-describedby="inputGroupPrepend2"
                  required
                />
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-6 mb-3">
              <label style={{ color: "white" }}>
                City
              </label>
              <input
                type="text"
                className="form-control"
                id="validationDefault03"
                placeholder="City"
                
                required
              />
            </div>
            
          </div>
          
          
          
          <div className="my-4" style={{ textAlign: "center" }}>
            <br />
            <br />
            {/* <span>Total Estimate: &#8377; {(adult * 2000 + kids * 900)*days} for {days} nights</span>
            <br />
            <br /> */}
            <button className="btn btn-primary" type='submit'>
              Submit
            </button>
          </div>
        </form>
    </div>
  )
}
