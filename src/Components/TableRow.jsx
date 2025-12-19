function TableRow({ coin }) {
  return (
    <tr key={coin.id}>
      <td className="icon">
        <img src={coin.image} alt={coin.name} width={20} height={20} />
        <span>{coin.name}</span>
        <span>({coin.symbol})</span>
      </td>

      <td>${coin.current_price?.toLocaleString()}</td>
      <td>{coin.price_change_percentage_24h?.toFixed(2)}%</td>
      <td>${coin.total_volume?.toLocaleString()}</td>
      <td>${coin.market_cap?.toLocaleString()}</td>
    </tr>
  );
}

export default TableRow;
