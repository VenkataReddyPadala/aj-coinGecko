import { useEffect, useState } from "react";
import "../App.css";
import Table from "./Table";
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

      <Table coins={coins} />
    </div>
  );
}

export default App;
