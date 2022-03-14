function daysToXmas(date) {
  const month = date.getMonth()
  const dateString = date.toISOString().split("-")[2]
  const time = dateString.split("T")
  let day = Number(time[0])

  if (month === 1) {
    day += 3
  }

  if (day === 25) return 0

  const seconds = time[1].split(".")[0]
  console.log(seconds)
  if (day === 24 && seconds === "23:59:59") return 1
  return 25 - day
}

module.exports = daysToXmas
