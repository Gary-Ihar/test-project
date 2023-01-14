// TODO: no ID in SVG, BUGSSSS.... :(
import React from 'react';

export default function YouTube(props: React.HTMLProps<HTMLSpanElement>) {
  return (
    <span role="img" className="anticon" {...props}>
      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_3655_6230)">
          <path
            d="M21.543 6.998C22 8.78 22 12.5 22 12.5C22 12.5 22 16.22 21.543 18.002C21.289 18.987 20.546 19.762 19.605 20.024C17.896 20.5 12 20.5 12 20.5C12 20.5 6.107 20.5 4.395 20.024C3.45 19.758 2.708 18.984 2.457 18.002C2 16.22 2 12.5 2 12.5C2 12.5 2 8.78 2.457 6.998C2.711 6.013 3.454 5.238 4.395 4.976C6.107 4.5 12 4.5 12 4.5C12 4.5 17.896 4.5 19.605 4.976C20.55 5.242 21.292 6.016 21.543 6.998ZM10 16L16 12.5L10 9V16Z"
            fill="#ABB6B7"
          />
        </g>
        <defs>
          <clipPath id="clip0_3655_6230">
            <rect width="24" height="24" fill="white" transform="translate(0 0.5)" />
          </clipPath>
        </defs>
      </svg>
    </span>
  );
}
