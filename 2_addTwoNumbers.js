/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode (val) {
  this.val = val;
  this.next = null;
}

var getNum = function (ListNode) {
    let num = ListNode.val;
    if (ListNode.next) {
      return getNum (ListNode.next)*10 + num;
    } else {
      return num;
    }
  };
  
  var getNode = function (num) {
    if (!num) return null;
    var remainder = num % 10;
    var result = new ListNode (remainder);
    result.next = getNode ((num - remainder) / 10);
    return result;
  };
  // var addTwoNumbers = function (l1, l2) {
  //   var num1 = getNum (l1);
  //   var num2 = getNum (l2);
  //   var sum = num1 + num2;
  //   if(!sum)return new ListNode (sum);
  //   return getNode (sum);
  // };
  
  
  var addTwoNumbers = function (l1, l2) {
    let list1 = l1;
    let list2 = l2;
    let carry = 0;
    let center3, list3;
    while (list1 || list2 || carry) {
      var value1 = 0;
      var value2 = 0;
      var sum = 0;
      if (list1) {
        value1 = list1.val;
        list1 = list1.next;
      }
      if (list2) {
        value2 = list2.val;
        list2 = list2.next;
      }
      sum = value1 + value2 + carry;
      carry = Math.floor (sum / 10);
      if (!center3) {
        list3 = new ListNode (sum % 10);
        center3 = list3;
      } else {
        center3.next = new ListNode (sum % 10);
        center3 = center3.next;
      }
    }
    return list3;
  };

// const l1 = {
//   val: 0,
//   next:null,
// };
// const l2 = {
//   val: 5,
//   next: {
//     val: 6,
//     next: {
//       val: 4,
//       next: null,
//     },
//   },
// };
var l1 = new ListNode (1000000000000000000000000000001);
var l2 = new ListNode (465);
console.log (JSON.stringify (addTwoNumbers (l1, l2)));
