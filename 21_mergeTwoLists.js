var mergeTwoLists = function(list1, list2) {
    const prehead = new ListNode(-1);
    let node = prehead
    while(list1&&list2){
        if(list1.val<list2.val){
            node.next = list1
            list1 = list1.next
        }else{
            node.next = list2
            list2 = list2.next
        }
        prev = prev.next
    }
    node.next = list1||list2
    return prehead.next
};