import "./styles.css";
import Worker from "./pool/Worker";

export default function App() {
  const data = {'United Kingdom': 'London',
  'France': 'Paris',
  'Germany': 'Berlin',
  'Japan': 'Tokyo',
  'India': 'New Delhi',
  'Brazil': 'Brasília',
  'Australia': 'Canberra',
  'South Africa': 'Pretoria',
  'Canada': 'Ottawa'}
  return (
    <div>
      <Worker data={data} />
    </div>
  );
}
