import { useRef, useState } from 'react';
import styles from './GameBoard.module.css';
import { Winner } from '../Winner/Winner';
import { Welcome } from '../Welcome/Welcome';
import { Board } from '../../models/Board';
import { BoardColumn } from '../BoardColumn/BoardColumn';

export function GameBoard() {
  const [init, setInit] = useState(true);
  const [sizes, setSizes] = useState({ x: 7, y: 6 });
  const [board, setBoard] = useState(new Board(sizes.x, sizes.y));
  const [player, setPlayer] = useState(1);
  const [winner, setWinner] = useState(0);
  const [player1, setPlayer1] = useState('Player 1');
  const [player2, setPlayer2] = useState('Player 2');


  function reset(e: any, x: number = sizes.x, y: number = sizes.y) {
    if (e) e.preventDefault();
    console.log(sizes, new Date())
    setBoard(new Board(x, y));
    setPlayer(1);
    setWinner(0);
  }

  function newGame(player1Name: string, player2Name: string, x: number, y: number) {
    setPlayer1(player1Name);
    setPlayer2(player2Name);
    setSizes({ x, y });
    setInit(false);
    reset(undefined, x, y);
  }



  function clickColumn(column: number) {
    let is_winner = board.put_piece(column, player);
    setBoard(board);
    if (is_winner) {
      setWinner(player);
    }
    setPlayer(player === 1 ? 2 : 1);

  }
  if (init === false) {
    if (winner === 0) {
      return (
        <div className={styles.container}>
          <div>
          <h1>Turn: <span className={`${styles.player} ${player === 1 ? styles.player1 : styles.player2}`}>{player === 1 ? player1 : player2}</span></h1>
          </div>
          <div className={styles.board}>
            {
              board.get_board().map((column, i) => {
                return <BoardColumn key={i} column={column} column_id={i} clickColumn={clickColumn} />
              })
            }
          </div>
        </div>

      );
    }
    else {
      return <Winner winnerName={winner === 1 ? player1 : player2} doReset={reset} toConfig={(e) => { e.preventDefault(); setInit(true) }} />
    }
  }
  else {
    return <Welcome player1={player1} player2={player2} x={sizes.x} y={sizes.y} newGame={newGame} />

  }
}

