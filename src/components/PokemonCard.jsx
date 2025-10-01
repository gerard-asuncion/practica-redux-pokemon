import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import StarButton from "./StarButton";
import "./PokemonList.css";
import { useDispatch } from "react-redux";
import { setFavorite } from "../actions";

const PokemonCard = ({
	name,
	image,
	types,
	id,
	favorite,
}) => {
  const dispatch = useDispatch();

  const handleOnFavorite = () => {
    dispatch(setFavorite({ pokemonId: id }));
  }

  return (
    <Card
        id={id}
			  title={name}
			  cover={image && <img src={image.front_default} alt={name} />}
        extra={
				<StarButton isFavorite={favorite ?? false} onClick={handleOnFavorite} />
			}
    >
      <Meta description="Types:" />
			<ul style={{color: 'gray'}}>
				{types?.map((type) => (
					<li key={type.type.name}>{type.type.name}</li>
				))}
			</ul>
    </Card>
  )
}

export default PokemonCard
