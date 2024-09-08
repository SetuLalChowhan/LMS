"use client";
import React from "react";

export const Button = ({ value, name,linkValue }) => {
  return (
   
      
      <button className={value}> {name} </button>
     
    
  );
};

export const ButtonIcon = ({ value, name, icon,linkValue }) => {
  return (
    
    <button className={`flex justify-center items-center ${value}`}>
      <div > {name} </div>
      <div className=""> {icon} </div>
    </button>
    
  );
};

export const Button2 = ({ value, name,linkValue }) => {
  return (
    <div className="">
      <button className={value}>{name}</button>
    </div>
  );
};
