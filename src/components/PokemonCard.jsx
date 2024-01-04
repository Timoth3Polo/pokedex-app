import { useEffect, useState } from "react";
import "../styles/pokemon-type.css";
import "../styles/pokemon-card.css";

export const PokemonCard = ({urlPokemon}) => {

    const [pokemon, setPokemon] = useState(null);

    const findPokemonIconTypeClass = (typeName) => {
        return `type-icon type-${typeName.toLowerCase()}`;
    }

    const findPokemonColorTypeClass = (typeName) => {
        return `pokemon-card pokemon-background-${typeName.toLowerCase()}`;
    }

    const fetchPokemon = async() => {
        try {
            const response = await fetch(urlPokemon);
            const json = await response.json();

            setPokemon(json);
        } catch(error) {
            console.log(`Pokemon ${urlPokemon} non trouvé.`, error);
        }
    }
    
    useEffect(() => {
        fetchPokemon();
    }, []);

    return (
        <div className={pokemon && findPokemonColorTypeClass(pokemon.types.map((typeInfo) => typeInfo.type.name).join('-'))}>
            {pokemon && (
                <>
                    {pokemon.sprites.front_default && (
                        <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                    )}

                    <h3>{pokemon.name.toUpperCase()}</h3>
    
                        <div className="type-card">
                    {pokemon.types.map((typeInfo) => (
                        <div className={findPokemonIconTypeClass(typeInfo.type.name)}> {typeInfo.type.name} </div>
                    ))}
                    </div>
                </>
            )}
        </div>
    );
    
}