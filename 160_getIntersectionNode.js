function getIntersectionNode(headA, headB){


    let left = headA
    let right = headB
    if(!left||!right)return null
    while(left!==right){
        left = !left?headB:left.next
        right = !right?headA:right.next
    }
    return left 


}