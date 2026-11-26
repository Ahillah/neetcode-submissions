class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let top = 0;
        let bottom = matrix.length - 1;
        while (top <= bottom) {
            let mid = Math.floor((top + bottom) / 2);
            let firist = matrix[mid][0];
            let last = matrix[mid][matrix[mid].length - 1];
            if (target > last) top = mid + 1;
            else if (target < firist) bottom = mid - 1;
            else {
                let left = 0;
                let right = matrix[mid].length - 1;
                while (left <= right) {
                    let colMid  = Math.floor((left + right) / 2);
                    if (target === matrix[mid][colMid ]) return true;
                    else if (target < matrix[mid][colMid ]) right = colMid  - 1;
                    else if (target > matrix[mid][colMid ]) left = colMid  + 1;

                }
                 return false;

            }
        }
        return false;
    }
}
