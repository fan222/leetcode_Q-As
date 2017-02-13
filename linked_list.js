// 141. Linked List Cycle
var hasCycle = function(head) {
    if (head === null || head.next === null) {
        return false;
    }
    var walker = head;
    var runner = head.next;

    while (walker && runner) {
        if (walker.val === runner.val) {
            return true;
        }
        runner = runner.next;

        if (runner === null) {
            return false;
        } else {
            runner = runner.next;
        }
        walker = walker.next;
    }
    return false;
};

// 237. Delete Node in a Linked List
var deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
};

// 21. Merge Two Sorted Lists
var mergeTwoLists = function(l1, l2) {
    var p1 = l1;
    var p2 = l2;
    var fn = new ListNode(-1)
    var p = fn

    while (p1 && p2) {
        if (p1.val >= p2.val) {
            p.next = p2;
            p2 = p2.next;
        } else {
            p.next = p1;
            p1 = p1.next;
        }
        p = p.next;
    }
    if(p1) {
        p.next = p1;
    } else {
        p.next = p2;
    }

    return fn.next;
};

// 206. Reverse Linked List
// nzgn
var reverseList = function(head) {
    let newHead = null;
    while(head !== null) {
        let next = head.next;
        head.next = newHead;
        newHead = head;
        head = next;
    }
    return newHead;
};
