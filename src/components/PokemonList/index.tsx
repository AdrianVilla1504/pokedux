import React from "react";
import PokemonCard from "../PokemonCard";
import styles from "./styles.module.css";

function PokemonList({ pokemons }: any) {
  return (
    <div className={styles.PokemonList}>
      {pokemons.map((pokemon: any, index: number) => {
        return <PokemonCard name={pokemon.name} key={index} />;
      })}
    </div>
  );
}

export default PokemonList;

PokemonList.defaultProps = {
  pokemons: Array(10).fill(""),
};
