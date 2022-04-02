import { MouseEventHandler, useRef } from 'react';
import styles from './Welcome.module.css';

export function Welcome({ player1, player2, x, y, newGame, ...props }: { player1: string, player2: string, x: number, y: number, newGame: (player1Name: string, player2Name: string, x: number, y: number) => void }) {
    const player1Ref = useRef(null);
    const player2Ref = useRef(null);
    const SizeXRef = useRef(null);
    const SizeYRef = useRef(null);

    function fillNewGame(e: any) {
        e.preventDefault();
        let x = +SizeXRef?.current?.value;
        let y = +SizeYRef?.current?.value;
        let player1Name = player1Ref.current.value || player1;
        let player2Name = player2Ref.current.value || player2;
        newGame(player1Name, player2Name, x, y);
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Welcome to connect 4</h1>
            <p className={styles.subtitle}>Please imput your game settings</p>
            <form className={styles.form}>
                <fieldset className={styles.fielset}>
                    <label htmlFor="player1">Player1's name:</label>
                    <input className={styles.input} type="text" name="player1" id="player1" defaultValue={player1} ref={player1Ref} />
                </fieldset>
                <fieldset className={styles.fielset}>
                    <label htmlFor="player2">Player1's name:</label>
                    <input className={styles.input} type="text" name="player2" id="player2" defaultValue={player2} ref={player2Ref} />
                </fieldset>
                <fieldset className={styles.fielset}>
                    <label htmlFor="x">Number of columns:</label>
                    <input className={styles.input} type="number" name="x" id="x" defaultValue={x} ref={SizeXRef} min="4" />
                </fieldset>
                <fieldset className={styles.fielset}>
                    <label htmlFor="y">Number of rows:</label>
                    <input className={styles.input} type="number" name="y" id="y" defaultValue={y} ref={SizeYRef} min="4" />
                </fieldset>
                <button onClick={fillNewGame} className={styles.button}>New Game</button>
            </form>
        </div>
    );
}