export default function getCurrencyHistoryLastTenDay(currencyCode, fetchingArchiveCurrencies) {
  const createHistoryItem = (date, value, nominal) => {
    return { date, value, nominal }
  }

  const currencyHistory = {
    name: fetchingArchiveCurrencies[0].currencies[currencyCode].Name,
    history: []
  }

  fetchingArchiveCurrencies.map(item => {
    const currency = item.currencies[currencyCode]
    currencyHistory.history.push(createHistoryItem(item.date, currency.Value, currency.Nominal))
  })

  return currencyHistory
}