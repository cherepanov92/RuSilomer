function getWordForPoints(points) {
  let pointsText = 'балла'

  if ([1].includes(points)) {
    pointsText = 'балл'
  } else if ([2, 3, 4].includes(points)) {
    pointsText = 'балла'
  } else if ([0, 5, 6, 7, 8, 9, 10, 12, 15, 30].includes(points)) {
    pointsText = 'баллов'
  }

  return pointsText
}

export default getWordForPoints
