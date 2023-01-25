import React from "react";

const Information = ({size, className}) => 
<svg
        className={className}
		width={size}
		height={size}
		viewBox="0 0 32 32"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path d="M16 30C8.275 30 2 23.725 2 16C2 8.275 8.275 2 16 2C23.725 2 30 8.275 30 16C30 23.725 23.725 30 16 30ZM16 4C9.387 4 4 9.387 4 16C4 22.613 9.387 28 16 28C22.613 28 28 22.613 28 16C28 9.387 22.613 4 16 4Z" />
		<path d="M19 22H17V13C17 12.45 16.55 12 16 12H13C12.45 12 12 12.45 12 13C12 13.55 12.45 14 13 14H15V22H13C12.45 22 12 22.45 12 23C12 23.55 12.45 24 13 24H19C19.55 24 20 23.55 20 23C20 22.45 19.55 22 19 22Z" />
		<path d="M17 9C17 9.552 16.552 10 16 10C15.448 10 15 9.552 15 9C15 8.448 15.448 8 16 8C16.552 8 17 8.448 17 9Z" />
	</svg>

export default Information