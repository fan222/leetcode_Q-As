# leetcode_Q-As

A data structure is a way to store and organize data in a computer, so that it can be used efficiently.

We talk about data structures as
- [ ] Mathematical / logical model or abstract data types
- [ ] Implementation

ADTs define data and operations, but no Implementation. We need to study their:
1) logical view
2) operations
3) cost of operations
4) Implementation

How should I decide which data structure to use?

 - [ ] what needs to be stored
 - [ ] cost of operations
 - [ ] memory usage
 - [ ] ease of implementation

## List as abstract data type

Static:
- [ ] store a given number of elements of a given data types
- [ ] write / modify element at a position
- [ ] read element at a position

Dynamic:
- [ ] can be empty list which has size 0
- [ ] insert
- [ ] remove
- [ ] count
- [ ] read / modify element at a position
- [ ] specify data type


### Array Implementation of List

With an **end** property defined, so length can be computed in constant time.

When array is full, create a new larger array by double size, copy previous array into the new array. Then free the memory for the previous array.

read / write element at an index- O(1)
insert - O(n)
remove - O(n)
push - worst O(n), amortized O(1), (In C, the old array may be extended to create new one. Else, a new block of memory is allocated. )

Since size is doubled each time extended, so lots of memory will be un-used.

### Introduction to linked list

Each node contains value and pointer to the next node.

Head - address of the head node gives us access of the complete list.

access to elements - O(n)
insert - O(n)
delete - O(n)

### Array vs. Linked list

What is most frequent operations to be performed on the data structure and what is the size?

1) Cost of accessing an element: array - constant time; linked list - O(n).

2) Memory requirements: array - fixed size, one big chunk; linked list - no un-used memory, extra memory for pointer variable, many small segments.

3) Cost of insertion:
a) at the beginning: array - O(n); linked list - O(1)
b) at end: array - O(1) / O(n); linked list O(n)
c) at i index: array - O(n); linked list - O(n)

### Doubly linked list

Reverse look-up.
Extra memory for pointer to previous node.

## Stack

A collection with the restriction that insertion and deletion can be performed only from on end, called the top.

Operations:
1) push(x), O(1) best, O(n) worst, O(1) average
2) pop(x)
3) top()
4) isEmpty?()
constant time

Application:
1) function calls / recursion
2) undo in an editor
3) balanced parentheses

### Implementation of stacks

We can implement stacks using array and linked list.

1) Array implementation
top: track stack top
overflow: dynamic array

2) Linked list implementation
insert / delete at beginning

Application:
using stack to reverse a string(could be solved with two indices and swapping);
using stack to reverse a linked list - last opened, first closed.

## Queue

A collection with the restriction that insertion can be performed at one end (rear) and deletion can be performed at other end (front).

Operations:
1) enqueue(x)
2) dequeue()
3) front() or peek()
4) isEmpty?()
constant time.

Application:
Requests must be queued to be served by shared resources.
1) Printer queue
2) Process scheduling
3) simulating wait

a) Array implementation
circular array
double size when full
b) Linked list implementation
keep tracking front and rear

## Tree

A collection of nodes that represent hierarchical relations.

Tree is recursive data structure.

Depth of node x is number of edges in path from root to x.

Height of node x is number of edges in longest path from x to a leaf.

Application:
1) storing naturally hierarchical data, eg: file system
2) organize data for quick search, insertion, deletion
3) trie for dictionary
4) network routing algorithm

### Binary Tree

A tree in which each node can have at most 2 children.

Strict/proper binary tree: each node can have either 2 or 0 children.

Complete binary tree: all levels except possibly the last are complete filled and all nodes are as left as possible.

Max number of nodes at level i is 2**i.

Max number of nodes in a binary tree with height h is 2*(h+1) - 1

Balanced binary tree: difference between height of left and right subtree for every node is not more than k (mostly 1).

#### implementation
We can implement binary tree using:
1) dynamically created nodes
2) arrays, store level by level: for complete binary tree, left child index 2*i + 1, right child index 2*i + 2

### BST

A binary tree in which for each node, value of all the nodes in left subtree is less or equal and value of all the nodes in the right subtree is greater.

search, insert and remove are O(log n). (assure this if keep BST balanced)

#### Tree Traversal

Process of visiting each node in the tree exactly once in some order.

a) breadth first / level-order traversal
    implement using queue, time complexity O(n), space complexity worst O(n) best O(1)
b) depth first: in-order, left subtree, node, right subtree
    (implicit) space complexity O(height), worst O(n), best O(log n)
