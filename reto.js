const carta = "bici   coche   balón _playstation bici coche peluche"

function listGifts(letter) {
  const allGifs = letter.trim().split(" ")
  const gifsFilters = allGifs.filter((g) => !g.startsWith("_"))
  const gifsUniques = gifsFilters.filter((item, index) => {
    return gifsFilters.indexOf(item) === index
  })

  let allIndexs = []

  for (let i = 0; i < gifsFilters.length; i++) {
    allIndexs.push(gifsFilters.findIndex((e) => e === gifsFilters[i]))
  }

  let indexs = new Array(allIndexs.length)
  indexs.fill(0)

  for (let i = 0; i < indexs.length; i++) {
    for (let j = 0; j < allIndexs.length; j++)   {
      if (i == allIndexs[j]) {
        indexs[i] = indexs[i] + 1
      }
    }
  }

  const uniqueIndexs = indexs.filter((c) => c !== 0)

  const gifs = {}

  for (let i = 0; i < gifsUniques.length; i++) {
    gifs[gifsUniques[i]] = uniqueIndexs[i]
  }

  return gifs
}

listGifts(carta)
