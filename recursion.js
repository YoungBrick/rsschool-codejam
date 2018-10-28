module.exports = function recursion(tree) {
  const structure = [];

  function traverse(obj, depth = 0) {
    if (!structure[depth]) structure.push([]);

    structure[depth].push(obj.value);

    if (obj.left) {
      traverse(obj.left, depth + 1);
    }
    if (obj.right) {
      traverse(obj.right, depth + 1);
    }
    return structure;
  }

  return traverse(tree);
};
