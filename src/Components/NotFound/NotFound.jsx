
import React from 'react'
import notFound from '../../assets/images/notFound.jpg'
export default function NotFound() {
  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="parent   d-flex justify-content-center align-items-center   vh-100">
            <div className="imageNotFound text-center mb-5">
              <img src={notFound} alt="portHome" className=" w-75  rounded-5" />
            </div>

         
          </div>
        </div>
      </div>
    </div>
  )
}
