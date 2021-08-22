/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

// let s = "PAYPALISHIRING";
let s = "PAYPALISHIRING";
let numRows = 10;

var convert = function(s, numRows) {
    let rezStr = "";
    let k = -2;
    let flag=false
    if (numRows == 1) {
        return s
    } else {
    for (let start = 0; start < numRows; start++) {
        k += 2;
        flag = true
        for (let i = 0; i < s.length;) {
            if (s[start + i]) {
                rezStr += s[start + i]
            }
            if (start == 0 || start == numRows-1) {
                i += (numRows*2-2)
            }
            else {
                flag ? i += numRows*2-2 - k : i += k
                flag = !flag;
            }
        }

    }
    return rezStr
    }
};

console.log(convert(s, numRows));