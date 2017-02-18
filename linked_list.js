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
    var fn = new ListNode(-1);
    var p = fn;

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

var reverseList = function(head) {
    return rL(head, null);
};

var rL = function(head, newHead) {
    if (head === null) {
        return newHead;
    }
    var next = head.next;
    head.next = newHead;
    return rL(next, head);
};

// reverse print

var reversePrint = function(head) {
  if (head === null) {
    return;
  }
  reversePrint(head.next);
  console.log(head.val);
};

// 234. Palindrome Linked List
var isPalindrome = function(head) {
    var fast = head;
    var slow = head;
    while(fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    if(fast !== null) {
        slow = slow.next;
    }

    slow = reverse(slow, null);
    fast = head;
    while(slow !== null) {
        if (slow.val !== fast.val){
            return false;
        }
        slow = slow.next;
        fast = fast.next;
    }
    return true;
};

var reverse = function(head, newHead) {
  if (head === null) {
      return newHead;
  }
  var next = head.next;
  head.next = newHead;
  return reverse(next, head);
};

// 203. Remove Linked List Elements
var removeElements = function(head, val) {
    if(head === null){
        return null;
    }
    var pointer = head;
    while(pointer.next !== null) {
        if(pointer.next.val === val) {
            pointer.next = pointer.next.next;
        } else {
            pointer = pointer.next;
        }
    }
    if (head.val === val) {
        return head.next;
    } else {
        return head;
    }
};

// 160. Intersection of Two Linked Lists
var getIntersectionNode = function(headA, headB) {
    var lengthA = len(headA);
    var lengthB = len(headB);
    if (lengthA === 0 || lengthB === 0) {
        return null;
    }
    while(lengthA > lengthB) {
        headA = headA.next;
        lengthA -= 1;
    }

    while (lengthA < lengthB) {
        headB = headB.next;
        lengthB -= 1;
    }

    while(headA && headB){
        if(headA === headB) {
            return headA;
        }
        headA = headA.next;
        headB = headB.next;
    }

    return null;
};

var len = function(head) {
    var length = 0;
    while(head !== null){
        length += 1;
        head = head.next;
    }
    return length;
};

// 83. Remove Duplicates from Sorted List
var deleteDuplicates = function(head) {
    var list = head;
    if(head===null) {
        return null;
    } else if (head.next === null) {
        return head;
    }

    while(list.next !== null){
        if (list.val === list.next.val){
            list.next = list.next.next;
        } else {
            list = list.next;
        }
    }
    return head;
};

// 82. Remove Duplicates from Sorted List II
var deleteDuplicates = function(head) {
    if(head === null) {
        return null;
    }
    var newHead = new ListNode(-1);
    newHead.next = head;
    var pre = newHead;
    var cur = head;
    while(cur !== null) {
        while(cur.next !== null && cur.val === cur.next.val){
            cur = cur.next;
        }
        if(pre.next === cur) {
            pre = cur;
        } else {
            pre.next = cur.next;
        }
        cur = cur.next;
    }
    return newHead.next;
};
