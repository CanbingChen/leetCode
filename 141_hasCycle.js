var hasCycle = function(head) {
    let slow = head
    let fast = slow
    while(fast&&fast.next){
        slow = slow.next
        fast = fast.next.next
        if(slow === fast){
            return true
        }
    }
    return false
 };