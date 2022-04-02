import { MouseEventHandler } from "react";
import styles from './Winner.module.css'

export function Winner({ winnerName, doReset, toConfig, ...props }: { winnerName: string, doReset: MouseEventHandler<HTMLButtonElement>, toConfig: MouseEventHandler<HTMLButtonElement> }) {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>The winner is {winnerName}</h1>
            <fieldset className={styles.fieldset}>
                <button className={styles.button} onClick={doReset}>New Game</button>
                <button className={styles.button} onClick={toConfig}>Go to configuration</button>
            </fieldset>

        </div>

    );
}