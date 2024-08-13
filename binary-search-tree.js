class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    //create a new node
    const newNode = new Node(val)
    //determine if root exists
    if (this.root){
      //if so, set root as current Node
      let currentNode = this.root
      while (currentNode){
        if (newNode.val > currentNode.val){
          if (currentNode.right){
            currentNode = currentNode.right;
          } else {
            currentNode.right = newNode;
            return this;
          }
        } else {
          if (currentNode.left) {
            currentNode = currentNode.left;
          } else {
            currentNode.left = newNode;
            return this;
          }
        }
      }
    } else {
      //if not, insert as root
      this.root = newNode;
      return this;
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    const insertHelper = (node) => {
      if (val > node.val){
        if (node.right) {
          return insertHelper(node.right)
        } else {
          node.right = new Node(val);
          return this;
        }
      } else {
        if (node.left) {
          return insertHelper(node.left)
        } else {
          node.left = new Node(val);
          return this;
        }
      }
    }
    if (!this.root){
      this.root = new Node(val);
      return this;
    } else {
      return insertHelper(this.root);
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {

  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {

  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {

  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {

  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {

  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {

  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
