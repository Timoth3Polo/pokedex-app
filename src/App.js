import React, { useState, useEffect } from 'react';

const App = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [limit, setLimit] = useState(50); // Nombre initial de Pokémon à charger
    const [offset, setOffset] = useState(0); // Décalage initial dans la liste des Pokémon

    useEffect(() => {
        const fetchPokemonList = async() => {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
                const data = await response.json();
                setPokemonList(prevList => [...prevList, ...data.results]);
            } catch (error) {
                console.error('Error fetching Pokemon list:', error);
            }
        };

        fetchPokemonList();
    }, [limit, offset]); // Mettre limit et offset dans la liste de dépendances pour recharger lorsque ceux-ci changent

    const loadMorePokemon = () => {
        setOffset(prevOffset => prevOffset + 50);
    };

    return ( <
        div >
        <
        h1 > Liste des Pokémon < /h1> <
        ul > {
            pokemonList.map((pokemon, index) => ( <
                li key = { index } > { pokemon.name } < /li>
            ))
        } <
        /ul> <
        button onClick = { loadMorePokemon } > Charger les 50 suivants < /button> < /
        div >
    );
};

export default App;