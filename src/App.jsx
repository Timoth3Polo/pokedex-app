import React, { useState, useEffect } from 'react';
import { PokemonList } from "./components/PokemonList";
import { Sidebar } from './components/Sidebar';
import "./index.css";

const limit = 50;

const App = () => {

    const [pokemonList, setPokemonList] = useState([]);
    const [offset, setOffset] = useState(0);

    const loadMorePokemon = () => {
        setOffset(prevOffset => prevOffset + 50);
    }

    const fetchPokemons = async() => {
        try {
            const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

            const response = await fetch(url);
            const json = await response.json();

            setPokemonList(prevPokemonList => [...prevPokemonList, ...json.results]);
        } catch(error) {
            console.log("Erreur lors de la recherche des pokémons.", error);
        }
    }

    useEffect(() => {
        fetchPokemons();
    }, [offset]);

    return (
        <div className="main-container">
            <Sidebar />
            <PokemonList pokemonList={pokemonList} onLoadMorePokemon={loadMorePokemon}/>
        </div>
      );
}

export default App;