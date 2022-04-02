import { BoardColumn } from "./BoardColumn";

export class Board {
    winner: number = 0;
    columns: BoardColumn[];

    constructor(x: number = 7, y: number = 6) {
        this.columns = Array(x).fill(0).map(e => new BoardColumn(y));
    }
    put_piece = (column: number, player: number) => {
        try {
            const row = this.columns[column].put_piece(player);
            return this.is_winner(column, row, player);
            //return { column, row };
        }
        catch (e) {
            alert('Invalid move')
            console.log(e)
        }
    }

    get_row(row_id: number) {
        return this.columns.map(r => r.column[row_id]);
    }

    private check_hole(row: number, column: number, player: number) {
        if (column > +0 && column < this.columns.length) {
            if (row >= 0 && row < this.columns[column].column.length) {
                if (this.columns[column].column[row] === player) {
                    return true;
                }
            }
        }
    }

    private is_winner = (column: number, row: number, player: number) => {
        if (row >= 3) {
            let winner = this.columns[column].column.slice(row - 3, row).every(r => r === player);
            if (winner) return true;
        }
        const boardRow = this.get_row(row);
        let count_row = 0;
        let last_col;
        for (let c of boardRow) {
            if (c === player) {
                if (last_col === undefined || last_col !== c) count_row = 1;
                else count_row += 1;
                if (count_row >= 4) return true;
            }
            last_col = c;
        }
        let [clu, cld, cru, crd] = [1, 1, 1, 1]; // check left and up, check left and down, check right and up, check right and down
        for (let i = 1; i <= 3; i++) {
            let cl = column - i; // column left
            let cr = column + i; // column right
            let rd = row - i; // row down
            let ru = row + i; // row up
            if (this.check_hole(rd, cl, player)) {
                cld += 1;
                if (cld === 4) return true;
            }
            if (this.check_hole(ru, cl, player)) {
                clu += 1;
                if (clu === 4) return true;
            }
            if (this.check_hole(rd, cr, player)) {
                crd += 1;
                if (crd === 4) return true;
            }
            if (this.check_hole(ru, cr, player)) {
                cru += 1;
                if (cru === 4) return true;
            }
        }
        return false;
    }

    get_board = () => {
        return this.columns.map(r => r.column);
    }

}