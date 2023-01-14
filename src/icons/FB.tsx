// TODO: no ID in SVG, BUGSSSS.... :(
import React from 'react';

export default function FB(props: React.HTMLProps<HTMLSpanElement>) {
  return (
    <span role="img" className="anticon" {...props}>
      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_3655_6224)">
          <path
            d="M12 2.5C6.477 2.5 2 6.977 2 12.5C2 17.491 5.657 21.628 10.438 22.379V15.39H7.898V12.5H10.438V10.297C10.438 7.791 11.93 6.407 14.215 6.407C15.309 6.407 16.453 6.602 16.453 6.602V9.062H15.193C13.95 9.062 13.563 9.833 13.563 10.624V12.5H16.336L15.893 15.39H13.563V22.379C18.343 21.629 22 17.49 22 12.5C22 6.977 17.523 2.5 12 2.5Z"
            fill="#ABB6B7"
          />
        </g>
        <defs>
          <clipPath id="clip0_3655_6224">
            <rect width="24" height="24" fill="white" transform="translate(0 0.5)" />
          </clipPath>
        </defs>
      </svg>
    </span>
  );
}
