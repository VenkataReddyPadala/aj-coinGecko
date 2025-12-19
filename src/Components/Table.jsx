import TableRow from "./TableRow";

function Table({ coins }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Coin</th>
          <th>Price</th>
          <th>24h</th>
          <th>24h Volume</th>
          <th>Market Cap</th>
        </tr>
      </thead>

      <tbody>
        {coins.map((coin) => (
          <TableRow key={coin.id} coin={coin} />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
