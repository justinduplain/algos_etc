 function ListNode(val, next) {
   this.val = (val===undefined ? 0 : val)
   this.next = (next===undefined ? null : next)
 }
 
var deleteDuplicates = function(head, prev, result = []) {
    if (!head.next) {
        // check current value vs. prev
        (head.val === prev)
            ? null
            : result.push(head.val)
        return result;
    }
    if (head.val === prev || head.val === head.next.val) {
        deleteDuplicates(head.next, head.val, result)
    } else {
        result.push(head.val);
        deleteDuplicates(head.next, head.val, result)
    }
}
