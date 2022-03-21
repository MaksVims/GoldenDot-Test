export default function getDifPercent(current, prev) {
  const dif = ((current - prev) / prev) * 100
  return Number(dif.toFixed(2))
}