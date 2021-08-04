let l1 = [2,4,3]
let l2 = [5,6,4]
//односторонний связанный список. Вернусь позже
function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
var addTwoNumbers = function(l1, l2) {
    let l1Revers = Number(Array.from(l1).reverse().join(""))
    let l2Revers = Number(Array.from(l2).reverse().join(""))
    let arrRez = String((l1Revers+l2Revers)).split("").reverse()
    let rez = new ListNode
    console.log(rez);
    return rez
};
addTwoNumbers(l1, l2)