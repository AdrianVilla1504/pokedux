import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setPokemons } from "../actions/";

import { Col } from "antd";
import PokemonList from "@/components/PokemonList";
import Searcher from "@/components/Searcher";
import styles from "@/styles/Home.module.css";
import { getPokemons } from "@/services";

function Home(): any {
  const pokemons = useSelector((state: any) => state?.pokemons);
  const dispatch = useDispatch();

  console.log("POKEMONS=>", pokemons);

  useEffect(() => {
    const fetchPokemons = async () => {
      const mons: any = await getPokemons();
      dispatch(setPokemons(mons));
    };
    fetchPokemons();
  }, []);

  console.log("POKEMONS=>", pokemons);

  return (
    <div>
      <Col span={4} offset={10}>
        <img
          src="https://raw.githubusercontent.com/musartedev/curso-redux/27298f5dd3e37caf2a90a7a82580cd2905fcab31/src/statics/logo.svg"
          alt="Pokedux"
        />
      </Col>
      <Col span={8} offset={8} className={styles.input_search}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default Home;
