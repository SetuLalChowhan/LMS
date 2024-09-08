"use client"
import React from 'react'

const VideoPlayer = ({value}) => {
  return (
    
      <video 
       width={464}
       height={371}
        controls 
        className=" rounded-2xl  "
      >
        <source src={value} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
   
  )
}

export default VideoPlayer;
