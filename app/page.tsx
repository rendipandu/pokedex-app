"use client"

import { useState, useEffect } from 'react'
import styles from './page.module.css'
import PokeCard from '@/components/PokeCard'

export default function Home() {
  const [data, setData] = useState([]);
  const [search, setImage] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
      const data = await response.json();

      setData(data.results);
    } catch (error: any) {
      throw new Error(`Failed to fetching movies: ${error.message}`);
    }
  };


  return (
    <main className={styles.main}>
      <div className="search">
        <input
          type="text"
          placeholder="Search for movies"
        />
      </div>
      <div className='products'>
        {data.map((pokemon: { name: string, url: string }, index) => (
          <PokeCard
            key={pokemon.name}
            name={pokemon.name}
            url={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`}
          />
        ))}
      </div>
    </main>
  )
}
