let s = "bb"
// let s = "anugnxshgonmqydttcvmtsoaprxnhpmpovdolbidqiyqubirkvhwppcdyeouvgedccipsvnobrccbndzjdbgxkzdbcjsjjovnhpnbkurxqfupiprpbiwqdnwaqvjbqoaqzkqgdxkfczdkznqxvupdmnyiidqpnbvgjraszbvvztpapxmomnghfaywkzlrupvjpcvascgvstqmvuveiiixjmdofdwyvhgkydrnfuojhzulhobyhtsxmcovwmamjwljioevhafdlpjpmqstguqhrhvsdvinphejfbdvrvabthpyyphyqharjvzriosrdnwmaxtgriivdqlmugtagvsoylqfwhjpmjxcysfujdvcqovxabjdbvyvembfpahvyoybdhweikcgnzrdqlzusgoobysfmlzifwjzlazuepimhbgkrfimmemhayxeqxynewcnynmgyjcwrpqnayvxoebgyjusppfpsfeonfwnbsdonucaipoafavmlrrlplnnbsaghbawooabsjndqnvruuwvllpvvhuepmqtprgktnwxmflmmbifbbsfthbeafseqrgwnwjxkkcqgbucwusjdipxuekanzwimuizqynaxrvicyzjhulqjshtsqswehnozehmbsdmacciflcgsrlyhjukpvosptmsjfteoimtewkrivdllqiotvtrubgkfcacvgqzxjmhmmqlikrtfrurltgtcreafcgisjpvasiwmhcofqkcteudgjoqqmtucnwcocsoiqtfuoazxdayricnmwcg"


var longestPalindrome = function(s) {
    let count = 1
    let FromTo = []
    let flag = false
    let longest = 0;
    let from = 0
    let to = 0
for (let i = 1; i < s.length-1; i++) {
    if (s[i-count]==s[i+count]) {
        flag = true;
        while (flag) {
            count++;
            if (s[i-count] && s[i-count]==s[i+count]) {
                continue;
            }
            else {
                flag = false;
                count--;
                FromTo.push(i-count);
                FromTo.push(i+count);
                count = 1;
            }
        }
        
    }
}
for (let j = 1; j < s.length; j++) {
    if (s[j-count]==s[j+count-1]) {
        flag = true;
        while (flag) {
            count++;
            if (s[j-count] && s[j-count]==s[j+count-1]) {
                continue;
            }
            else {
                flag = false;
                count--;
                FromTo.push(j-count);
                FromTo.push(j+count-1);
                count = 1;
            }
        }
        
    }
}
if(FromTo[0] == undefined) {
 return s[0];
}
else {
    for (let k = 1; k < FromTo.length; k+=2) {
        if (FromTo[k]-FromTo[k-1] > longest) {
            from = FromTo[k-1]
            to = FromTo[k]+1
            longest = FromTo[k]-FromTo[k-1]
        }
        
    }
    let rez = s.slice(from, to)
    return rez
}
};

console.log(longestPalindrome(s))