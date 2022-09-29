import React from 'react';

type TestProps = {
    name: string;
    mark: string;
    optional?: string;
    onClick: (name:string) => void;
};

function Test({ name, mark, optional, onClick }: TestProps) {
    const handleClick = () => onClick(name);
    return (
        <div>
        Hello, {name} {mark}
        <button onClick={handleClick}>O</button>
        </div>
    );
}

Test.defaultProps = {
    mark: '!'
};

export default Test;