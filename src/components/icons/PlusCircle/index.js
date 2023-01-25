import React from "react";

const PlusCircle = ({className,size}) => 
    <svg
    className={className}
        width={size}
        height={size}
        viewBox="0 0 32 32"
         xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M16 30C8.28 30 2 23.72 2 16C2 8.28 8.28 2 16 2C23.72 2 30 8.28 30 16C30 23.72 23.72 30 16 30ZM16 4C9.383 4 4 9.383 4 16C4 22.617 9.383 28 16 28C22.617 28 28 22.617 28 16C28 9.383 22.617 4 16 4Z" />
        <path d="M21 15H17V11C17 10.448 16.552 10 16 10C15.448 10 15 10.448 15 11V15H11C10.448 15 10 15.448 10 16C10 16.552 10.448 17 11 17H15V21C15 21.552 15.448 22 16 22C16.552 22 17 21.552 17 21V17H21C21.552 17 22 16.552 22 16C22 15.448 21.552 15 21 15Z" />
    </svg>

export default PlusCircle