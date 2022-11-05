import React from 'react';

export interface HomeIconProps {
  name?: string;
  onClickIcon?: React.MouseEventHandler<HTMLButtonElement>;
  isSelected?: boolean;
}

const ProfileIcon = ({ name, isSelected, onClickIcon }: HomeIconProps) => {
  return (
    <button onClick={onClickIcon} name={name}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="currentColor"
        className="bi bi-person-fill"
        viewBox="0 0 16 16"
        color={isSelected ? '#222222' : '#a1a1a1'}
      >
        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
      </svg>
    </button>
  );
};

export default ProfileIcon;
