/**
 * Поиск максимальной длинны подстроки 
 * в строке, без повторяющихся символов
 */
/**
 * @param {string} s
 * @return {number}
 */

var s = "abcabcbb"

 var lengthOfLongestSubstring = function(s) {
    let subStr = ""
    let tmpStr = ""
    tmpStr = s[0];
    let maxLen = s ? 1 : 0;
    for (let i = 1; i < s.length; i++) {
        if (tmpStr.indexOf(s[i]) == -1) {
            // console.log(tmpStr);
            tmpStr+=s[i]
            tmpStr.length > maxLen ? maxLen = tmpStr.length : null
        }
        else if(tmpStr.length > 1){
            tmpStr = tmpStr.slice(1, tmpStr.length)
            i--
        }
        else {
            tmpStr = s[i]
            // i--
        }
    }
    // console.log(maxLen);
    return maxLen
};
lengthOfLongestSubstring(s)