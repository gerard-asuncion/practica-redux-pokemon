import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import StarButton from "./StarButton";
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
        extra={
				<StarButton isFavorite={favorite ?? false} />
			}
    >
        <Meta description="fire, magic" />
    </Card>
  )
}

export default PokemonCard
