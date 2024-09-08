import React from 'react'

const Head = ({header,details}) => {
  return (
    // Every section head component
    <div>
         <h1 className="lg:text-[40px] text-3xl font-[700] text-center text-blue ">
            {" "}
            {header}{" "}
          </h1>
          <p className=" lg:w-full  text-[17px] font-[400px] text-[#6F6F73] text-center mt-5">
            {details}
          </p>
    </div>
    
  )
}

export default Head