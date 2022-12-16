import React from 'react'

const Spinner = () => {
  return (

        <div style={{opacity:"0.8"}} className=" position-absolute top-0 left-0 bg-secondary w-100 vh-100  d-flex justify-content-center align-items-center">
            <div className="spinner-border text-warning d-flex justify-content-center align-item-center" style= {{width: "6rem", height: "6rem"}} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>

  )
}

export default Spinner