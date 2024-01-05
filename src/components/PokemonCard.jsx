import { useEffect, useState } from "react";
import { PokemonCardModal } from "./PokemonCardModal";
import "../styles/pokemon-type.css";
import "../styles/pokemon-card.css";

export const PokemonCard = ({urlPokemon}) => {

    const [pokemon, setPokemon] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    const handleClick = () => {
        setModalOpen(!modalOpen);
    }

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
        <div onClick={handleClick}
            className={pokemon && findPokemonColorTypeClass(pokemon.types.map((typeInfo) => typeInfo.type.name).join('-'))}>
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
            {modalOpen && <PokemonCardModal onClose={() => setModalOpen(false)} pokemon={pokemon} />}
        </div>
    );
    
}