import { useEffect, useState } from "react";
import { PokemonCard } from "./PokemonCard";
import { LoadMoreButton } from "./LoadMoreButton";
import "../styles/pokemon-list.css";

export const PokemonList = ({pokemonList, onLoadMorePokemon}) => {
    
    return ( 
        <div className="work-container">
            <h1 className="header-container"> Liste des Pokémons </h1>
            <div className="pokemon-card-container">
                {pokemonList.map((pokemon) => (
                    <PokemonCard key={`card_${pokemon.name}`} urlPokemon={pokemon.url} />
                ))}
            </div>
            <LoadMoreButton onClick={onLoadMorePokemon} label="&#43;" />
        </div>
    );
}