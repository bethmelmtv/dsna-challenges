// const node3 = {
//   value: 4,
//   next: null,
// };

// const node2 = {
//   value: 12,
//   next: node3,
// };

// const node1 = {
//   value: 34,
//   next: node2,
// };

//constructs each node module
class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  //adds a node
  add(node) {
    if (!this.next) this.next = node;
    //if there is no next node, make the current node the next node
    else {
      this.next.add(node);
      //otherwise, add in the passed in node to the next node
    }
  }

  getList() {
    if (!this.next) {
      return this.value;
    } else {
      //if there is no next node, return that value
      return `${this.value} ${this.next.getList()}`;
    }
  }

  remove(value) {
    if (!this.next) return;
    // if the there's no next value, return what?
    if (this.next.value === value) {
      //if the next value is equal to the current value
      this.next = this.next.next; //what is next next
      //then let next value equal to
    } else {
      this.next.remove(value);
    }
  }
}

class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  add(node) {
    //is the current value greater or lesser than the node
    if (this.value > node.value) {
      //if our current value is greater send left
      //check to see if current value's left is null
      if (!this.left) {
        //add the node value to the current value's left
        this.left = node;
      } else {
        //if there is a left, then
        this.left.add(node);
      }
    } else {
      //check to see if there is a right
      if (!this.right) {
        //  if there is no right
        this.right = node;
        //set the right equal to the node
      } else {
        //if there is a right
        //call the add method on the right node  passing in the new code
        this.right.add(node);
      }
    }
  }
}

const B = new BinaryTreeNode('B');
const A = new BinaryTreeNode('A');
const C = new BinaryTreeNode('C');
const D = new BinaryTreeNode('D');

// B will be the root of the tree:
B.add(A);
B.add(D);
B.add(C);

test('linked list adds', () => {
  const root = new LinkedListNode('A');
  const nodeB = new LinkedListNode('B');
  const nodeC = new LinkedListNode('C');
  const nodeD = new LinkedListNode('D');
  root.add(nodeB);
  root.add(nodeC);
  root.add(nodeD);

  expect(root.next).toBe(nodeB);
  expect(nodeB.next).toBe(nodeC);
  expect(nodeC.next).toBe(nodeD);
  expect(nodeD.next).toBe(null);
});

test('linked list getList', () => {
  const root = new LinkedListNode('A');
  const nodeB = new LinkedListNode('B');
  const nodeC = new LinkedListNode('C');
  const nodeD = new LinkedListNode('D');
  expect(root.getList()).toBe('A');
  root.add(nodeB);
  expect(root.getList()).toBe('A B');
  root.add(nodeC);
  expect(root.getList()).toBe('A B C');
  root.add(nodeD);
  expect(root.getList()).toBe('A B C D');
});

test('linked list remove', () => {
  const root = new LinkedListNode('A');
  const nodeB = new LinkedListNode('B');
  const nodeC = new LinkedListNode('C');
  const nodeD = new LinkedListNode('D');
  root.add(nodeB);
  root.add(nodeC);
  root.add(nodeD);
  root.remove('C');
  expect(root.getList()).toBe('A B D');
});

// console.log(root.getList()); // 'A B'
// const nodeC = new LinkedListNode('C');
// const nodeD = new LinkedListNode('D');
// const nodeE = new LinkedListNode('E');
// root.add(nodeC);
// root.add(nodeD);
// root.add(nodeE);
// console.log(root.getList()); // 'A B C D E'

class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  add(node) {}
}

class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  add(node) {}
}
