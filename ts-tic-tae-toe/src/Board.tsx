import * as React from 'react';
import Square from './Square';

interface BoardProps {
    squares: Array<'O' | 'X'>;
    onClick(i: number): void;
}

export default class Board extends React.Component<BoardProps> {
    public render() {
        return (
        <div>
            <div className="board-row">
            {this._renderSquare(0)}
            {this._renderSquare(1)}
            {this._renderSquare(2)}
            </div>
            <div className="board-row">
            {this._renderSquare(3)}
            {this._renderSquare(4)}
            {this._renderSquare(5)}
            </div>
            <div className="board-row">
            {this._renderSquare(6)}
            {this._renderSquare(7)}
            {this._renderSquare(8)}
            </div>
        </div>
        );
    }
    private _renderSquare(i: number) {
        const squares = this.props.squares;
        return <Square value={squares[i]} onClick={() => this.props.onClick(i)} />;
    }
}