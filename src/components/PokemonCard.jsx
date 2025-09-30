import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import "./PokemonList.css";

const PokemonCard = ({
	name,
	image,
	types,
	id,
	favorite,
}) => {
  return (
    <Card
        id={id}
			  title={name}
			  cover={image && <img src={image.front_default} alt={name} />}
    >
        <Meta description="fire, magic" />
    </Card>
  )
}

export default PokemonCard
