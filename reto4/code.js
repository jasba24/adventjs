function code(height) {
  const treeTrunk = "\n\n_#_\n_#_"
  let basicTree = "_*_"
  if (height === 1) {
    return basicTree.concat(treeTrunk)
  }

  basicTree = basicTree.concat("\n ".repeat(height - 1))

  const branches = basicTree.split("\n")
  console.log(branches)
  const basicStructure = branches[0].split("")

  for (let i = 1; i < height; i++) {
    const example = basicStructure
    example[4 - i] = "*"
    example[4 + i] = "*"
    const exampleString = example.join("")
    branches[i] = exampleString
  }
  let finalTree = branches.join("\n").concat(treeTrunk)
  console.log(finalTree)
  return finalTree
}

module.exports = code
