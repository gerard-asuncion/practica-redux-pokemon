import PokemonCard from "./PokemonCard";
import "./PokemonList.css";

const PokemonList = ({ pokemons }) => {
  return (
    <div className="PokemonList">
			{pokemons.map((pokemon, index) => (
				<PokemonCard
					id={pokemon.id}
					key={index}
					name={pokemon.name}
					image={pokemon.sprites}
					types={pokemon.types}
					favorite={pokemon.favorite}
				/>
			))}
		</div>
  )
}

export default PokemonList