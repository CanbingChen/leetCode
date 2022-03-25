var reverseList = function(head) {

    if(!head)return head
    let current = head
    let pre = null
    while(!current){
        const next = current.next
        current.next = pre
        pre = current
        current = next
    }
};