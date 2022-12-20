export function getRemainingTime() {
  const today = new Date().getTime()
  const weddingDate = new Date('07/08/2023').getTime()
  const daysLeft = Math.ceil((weddingDate - today) / (1000 * 60 * 60 * 24))
  return daysLeft
}

export function findCenter(coords) {
  const lats = coords.map((m) => m.lat)
  const lngs = coords.map((m) => m.lng)
  return {
    lat: (Math.min(...lats) + Math.max(...lats)) / 2,
    lng: (Math.min(...lngs) + Math.max(...lngs)) / 2,
  }
}

export function mod(m, n) {
  return ((m % n) + n) % n
}
