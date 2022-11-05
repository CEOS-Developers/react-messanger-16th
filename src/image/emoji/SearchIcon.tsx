import React from 'react';

interface searchIconProps {
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
}

const SearchIcon = ({ onClick }: searchIconProps) => {
  return (
    <div style={{ cursor: 'pointer' }} onClick={onClick}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.34998 10.8C4.34998 7.23777 7.23774 4.35001 10.8 4.35001C14.3622 4.35001 17.25 7.23777 17.25 10.8C17.25 14.3622 14.3622 17.25 10.8 17.25C7.23774 17.25 4.34998 14.3622 4.34998 10.8ZM10.8 2.85001C6.40931 2.85001 2.84998 6.40934 2.84998 10.8C2.84998 15.1907 6.40931 18.75 10.8 18.75C12.7252 18.75 14.4906 18.0656 15.8662 16.9269L20.1691 21.2298C20.462 21.5227 20.9369 21.5227 21.2298 21.2298C21.5227 20.9369 21.5227 20.462 21.2298 20.1691L16.9269 15.8663C18.0656 14.4907 18.75 12.7253 18.75 10.8C18.75 6.40934 15.1906 2.85001 10.8 2.85001Z"
          fill="#4F4C4C"
        />
      </svg>
    </div>
  );
};

export default SearchIcon;
