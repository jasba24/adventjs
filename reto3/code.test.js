const code = require("./code")

describe("Challengue 3", () => {
  test("should receive a letter", () => {
    const expected = true
    const result = code("bici coche (balón) bici coche peluche")
    expect(expected).toBe(result)
  })
  test("should receive an error if the letter contains a incorrect character", () => {
    const expected = false
    const result = code("peluche (bici [coche) bici coche balón")
    expect(expected).toBe(result)
  })
  test("third", () => {
    const expected = false
    const result = code("bici coche (balón bici coche")
    expect(expected).toBe(result)
  })
})
