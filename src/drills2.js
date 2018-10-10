class BinarySearchTree {
  constructor(key=null, value=null, parent=null) {
      this.key = key;
      this.value = value;
      this.parent = parent;
      this.left = null;
      this.right = null;
  }
  insert(key, value) {
    //if the tree is empty then this key being inserted is the root node of the tree
    if (this.key == null) {
        this.key = key;
        this.value = value;
    }

    //If the tree already exist, then start at the root, 
    //and compare it to the key you want to insert
    // If the new key is less than the node's key 
    //then the new node needs to live in the left-hand branch.
    else if (key < this.key) {
        //if the existing node does not have any left child, 
        //meaning that if the `left` pointer is empty 
        //then we can just instantiate and insert the new node 
        //as the left child of that node, passing `this` as the parent.  
        if (this.left == null) {
            this.left = new BinarySearchTree(key, value, this);
        }
        //if the node has an existing left child, 
        //then we recursively call the `insert` method 
        //so the node is added further down the tree.
        else {
            this.left.insert(key, value);
        }
    }
    //Similarly, if the new key is greater than the node's key 
    //then you do the same thing, but on the right-hand side.
    else {
        if (this.right == null) {
            this.right = new BinarySearchTree(key, value, this);
        }
        else {
            this.right.insert(key, value);
        }
    }
  }
  dfsPreOrder(values=[]) {
    values.push(this.key);
    if (this.left) {
      values = this.left.dfsPreOrder(values);
    }
    if (this.right) {
      values = this.right.dfsPreOrder(values);
    }
    return values;
  }
}
function treeTraversal() {
  let bst = new BinarySearchTree();
  let dataSet = [ 25, 15, 50, 10, 24, 35, 70, 4, 12, 18, 31, 44, 66, 90, 22 ];
  for (let i = 0; i < dataSet.length; i++) {
    bst.insert(dataSet[i]);  
  }
  console.log(bst.dfsPreOrder());
}

treeTraversal();