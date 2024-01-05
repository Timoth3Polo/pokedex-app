import "../styles/pokemon-card-modal.css";

export const PokemonCardModal = ({ onClose, pokemon }) => {
    //Pq le e.stopPropagation marche même lorsque je ne click pas sur une "carte" dans PokemonCard.jsx
    const findPokemonIconTypeClass = (typeName) => {
        return `type-icon type-${typeName.toLowerCase()}`;
    }

    const findPokemonColorTypeClass = (typeName) => {
        return `pokemon-cart-modal-content pokemon-background-${typeName.toLowerCase()}`;
    }

    const type = pokemon.types.length > 1 ? "TYPES" : "TYPE";

    return (
        <div className="pokemon-cart-modal-overlay" onClick={(e) => e.stopPropagation()}>
            <div className={pokemon && findPokemonColorTypeClass(pokemon.types.map((typeInfo) => typeInfo.type.name).join('-'))}>
                <div className="close-modal" onClick={onClose}>X</div>
                {pokemon && (
                    <>
                        <div className="pokemon-img-modal">
                            {pokemon.sprites.front_default && (
                                <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                            )}
                        </div>
                        <div className="text-pokemon-modal">
                            <div>NAME : {pokemon.name.toUpperCase()}</div>
            
                            <div> {type} :&nbsp;
                                {pokemon.types.map((typeInfo) => (
                                    <div className={findPokemonIconTypeClass(typeInfo.type.name)}> {typeInfo.type.name} </div>
                                ))}
                            </div>

                            <div>HEIGHT : {pokemon.height}</div>
                            <div>WEIGHT : {pokemon.weight}</div>

                            {pokemon.stats.map((stat) => (
                                <div>{stat.stat.name.toUpperCase()} : {stat.base_stat}</div>
                            ))

                            }
                        </div> 
                    </>
                )}
            </div>
        </div>
    );

}