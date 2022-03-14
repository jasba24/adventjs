const code = require("./code")

describe("Challengue 4", () => {
  test("Should return this tree when height is equal to 1", () => {
    const expected = "_*_\n\n_#_\n_#_"
    const result = code(1)
    expect(expected).toBe(result)
  })
  test("Should return a tree with the specificies height", () => {
    const expected = "____*____\n___***___\n__*****__\n_*******_\n*********\n\n____#____\n____#____"
    const result = code(5)
    expect(expected).toBe(result)
  })
})
