// 341. Flatten Nested List Iterator
var NestedIterator = function(nestedList) {
    this.stack = [];

    for(var i = nestedList.length; i--;) {
        this.stack.push(nestedList[i]);
    }
};

NestedIterator.prototype.hasNext = function() {
    while(this.stack.length > 0) {
        var next = this.stack[this.stack.length - 1];

        if(next.isInteger()) {
            return true;
        }

        this.stack.pop();
        var list = next.getList();
        for(var i = list.length; i--;) {
            this.stack.push(list[i]);
        }
    }

    return false;
};

NestedIterator.prototype.next = function() {
    return this.stack.pop();
};

// 150. Evaluate Reverse Polish Notation
var evalRPN = function(tokens) {
    var stack = [];
    var operations  = {'+': true, '-': true, '*': true, '/': true};

    tokens.forEach(function(ele) {
        if (operations[ele]){
            var val2 = stack.pop();
            var val1 = stack.pop();
            if(ele === '*') {
                stack.push(parseInt(val1 * val2));
            } else if(ele === '/') {
                stack.push(parseInt(val1 / val2));
            } else if(ele === '-') {
                stack.push(val1 - val2);
            } else if(ele === '+') {
                stack.push(val1 + val2);
            }
        } else {
            stack.push(parseInt(ele));
        }
    });
    return parseInt(stack[0]);
};




var BSTIterator = function(root) {
    this.stack = [];
    this.pushLeft(root);
};

BSTIterator.prototype.hasNext = function() {
    return this.stack.length !== 0;
};

BSTIterator.prototype.next = function() {
    if(this.hasNext()) {
        var node = this.stack.pop();

        if(node.right) {
            this.pushLeft(node.right);
        }

        return node.val;
    }
};

BSTIterator.prototype.pushLeft = function(node) {
    while(node) {
        this.stack.push(node);
        node = node.left;
    }
};
