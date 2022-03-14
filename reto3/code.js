function code(letter) {
  if (
    letter.includes("{") ||
    letter.includes("}") ||
    letter.includes("[" || letter.includes("]") || letter.includes("()"))
  ) {
    return false
  }
  const phrases = letter.split(" ")
  const completePhrases = phrases.filter(
    (l) => l.startsWith("(") && l[l.length - 1] === ")"
  )
  if (completePhrases.length === 0) return false
  if(letter.includes("(") && letter.includes(")")) return true
}

module.exports = code
