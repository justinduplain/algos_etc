//link: https://www.codewars.com/kata/52bef5e3588c56132c0003bc/

function treeByLevels(rootNode) {
  let flattened = []
  if (!rootNode) return flattened
  let queue = [rootNode]
  while (queue.length) {
    let node = queue.shift()
    flattened.push(node.value)
    if (node.left) queue.push(node.left)
    if (node.right) queue.push(node.right)
  }
  return flattened
}
