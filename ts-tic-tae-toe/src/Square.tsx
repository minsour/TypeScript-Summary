import * as React from 'react';

interface SquareProps {
    value: 'O' | 'X';
    onClick(): void;
}

export default function Square(props: SquareProps): JSX.Element {
    return (
        <button className="square" onClick={() => props.onClick()}>
            {props.value}
        </button>
    );   
}