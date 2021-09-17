/**
 * @param {character[][]} board
 * @return {boolean}
 */

//       col1 col2
//  row1
//  row2

// 2021/9/17 20:03 AC
// 58.68%(time) 99.21%(Memory)(how?)
// input : board(array) 一個有部分填入數字的數獨陣列
// 目的 : 求出當前的 board 是不是合格的數獨(不管解不解得出來,也不嘗試去解)
// 用簡單的 set 檢查法,先走row,然後 column,最後 9*9 
// 加入 set , 然後用 set.has 檢查是不是已經在 set 裡面 , 有出現就代表違規,return false
// 結尾 return true;
var isValidSudoku = function(board) {

    // check row
    for(let row=0;row<9;row++){
        let set_ = new Set();
        for(let col=0;col<9;col++){
            if(board[row][col]!='.' ){
                if(set_.has(board[row][col])){
                    return false;
                }
                else{
                    set_.add(board[row][col]);
                }
            }
        }
    }
    // ending check row


    // check column 
    for(let row=0;row<9;row++){
        let set_ = new Set();
        for(let col=0;col<9;col++){
            if(board[col][row]!='.' ){
                if(set_.has(board[col][row])){
                    return false;
                }
                else{
                    set_.add(board[col][row]);
                }
            }
        }
    }
    // ending check column 



    // check 3*3
    // 上面兩個比較好理解
    // 數獨的 9 小格的 index 取法
    // 保留 row col 的 雙層 for-loop ,但變成每次 += 3 (一次切一格)
    // 多加一個 index 代表每次取得一個數
    // 從 row 這側開始走訪就是 row 不動,每次 + 一個 column , 因為每走完三步就會換行(row) 
    // row 的算法就是 row + index/3 , js 裡宣告不分 int,float , 所以1/3變成 0.33333...
    // 這裡就變成 row + Math.floor(index/3) (floor => 取<的整數)
    // column 就比較直觀 column + i%3(只有0,1,2會出現)
    // 走訪完就可以了  

    for(let row=0;row<9;row+=3){
        for(let col=0;col<9;col+=3){
            let set_ = new Set();
            for(let i=0;i<9;i++){
                if(board[row + Math.floor(i/3) ][ col+ i%3 ]!='.' ){
                    if(set_.has(board[row + Math.floor(i/3) ][ col+ i%3 ])){
                        return false;
                    }
                    else{
                        set_.add(board[row + Math.floor(i/3) ][ col+ i%3 ]);
                    }
                }
            }
        }
    }
    // ending check 3*3 

    return true;

};

let board = [["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];

console.log(isValidSudoku(board) );