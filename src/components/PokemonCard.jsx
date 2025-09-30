import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import "./PokemonList.css";

const PokemonCard = () => {
  return (
    <Card
        style={{ width: 250}}
        title="Ditto"
        cover={<img src="" alt="Ditto" />}
    >
        <Meta description="fire, magic" />
    </Card>
  )
}

export default PokemonCard
