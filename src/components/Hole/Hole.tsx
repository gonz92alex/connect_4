import styles from './Hole.module.css';

export function Hole({ player, clickPiece, ...props }: { player: number; column_id: number; clickPiece: () => void; }) {
  const { player1, player2, empty } = styles;
  const playerPiece = player === 1 ? player1 : player === 2 ? player2 : empty;
  return (
    <div className={styles.hole} {...props} onClick={(e) => clickPiece()}>
      <div className={`${styles.piece} ${playerPiece}`}></div>
    </div>
  );
}
