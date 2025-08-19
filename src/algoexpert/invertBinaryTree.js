function invertBinaryTree(tree, root = null) {
  if (tree.value === root) return tree
  if (tree.left || tree.right) {
    let left = tree.left
    tree.left = tree.right
    tree.right = left
  }
  if (tree.left) invertBinaryTree(tree.left, tree.value)
  if (tree.right) invertBinaryTree(tree.right, tree.value)
}

class BinaryTree {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

const tree = new BinaryTree(1)
tree.left = new BinaryTree(2)
tree.left.left = new BinaryTree(4)
tree.left.left.left = new BinaryTree(8)
tree.left.left.right = new BinaryTree(9)
tree.left.right = new BinaryTree(5)
tree.right = new BinaryTree(3)
tree.right.left = new BinaryTree(6)
tree.right.right = new BinaryTree(7)

invertBinaryTree(tree)
