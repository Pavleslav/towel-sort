
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let matr = [];
    if (!matrix){
      return matr;
    } else {
     for (let i = 0; i <= matrix.length-1; i++){
        if (i % 2 == 0) {
        matr.push(matrix[i])}
        else  matr.push(matrix[i].reverse());
     }
    }
     return matr.flat();
}
