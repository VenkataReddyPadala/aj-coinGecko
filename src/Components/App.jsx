import { useEffect, useState } from "react";
import "../App.css";
const URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";

function App() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(URL);
        if (!res.ok) throw new Error("Something went wrong fetching");
        const data = await res.json();
        setCoins(data);
      } catch (err) {
        console.error(err.message);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Top 10 Crypto Currencies</h1>

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
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
