import { Hole } from '../Hole/Hole';
import styles from './BoardColumn.module.css';


export function BoardColumn({ column, column_id, clickColumn, ...props }: { column: number[], column_id: number, clickColumn: (column: number) => void }) {
    function clickPiece() {
        return clickColumn(column_id);
    }
    return (
        <div className={styles.column}>
            {column.map((r, i) => <Hole player={r} key={i} column_id={i} clickPiece={clickPiece} />)}
        </div>
    )

}