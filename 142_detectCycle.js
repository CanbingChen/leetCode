var detectCycle = function(head) {
    let slow = head
    let fast = slow
    let isLoop = false
    while(fast&&fast.next){
        slow = slow.next
        fast = fast.next.next
        if(slow === fast){
            isLoop = true;
            break;
        }
    }
   if(!isLoop){
       return null
   }
   const preNode = head
   while(preNode!==fast){
    fast = fast.next
    preNode = preNode.next
   }
   return preNode
};