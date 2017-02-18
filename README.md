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
