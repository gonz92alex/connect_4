 export class BoardColumn {
    column: number[];
    nextRow: number = 0;
  
  
    constructor(size: number = 6) {
      this.column = Array(size).fill(0);
  
    }
  
  
    put_piece = (player: number) => {
      if (this.nextRow !== this.column.length) {
        this.column[this.nextRow] = player;
        this.nextRow += 1;
        return this.nextRow - 1;
      }
      else {
        console.log(this.nextRow === this.column.length)
        throw new Error('End of column');
      }
    }
  
  
    get length() {
      return this.column.length;
    }
  }