export default function formatCurrency(value) {
  return Intl.NumberFormat('ru', {
    currency: 'RUB',
    style: 'currency'
  }).format(value)
}