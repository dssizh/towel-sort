
// You should implement your task here.

module.exports = function towelSort (matrix) {

    let result = []
    if (matrix == null) {
        return []
    }
    for (i=0; i<matrix.length; i++) {

        if ((i+1)%2==0) {
            temp = matrix[i];
            result = result.concat(temp.reverse());
        } else {
            result = result.concat(matrix[i]);
        }
    }

  return result;
}

// function compareNumeric(a, b) {
//     if (a > b) return 1;
//     if (a == b) return 0;
//     if (a < b) return -1;
//   }
