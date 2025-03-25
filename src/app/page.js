'use client';
import { useState } from 'react';
import Topo from './componentes/Topo/Topo';
import SecaoBanner from './componentes/SecaoBanner/SecaoBanner';
import SecaoExperiencia from './componentes/SecaoExperiencia/SecaoExperiencia';
import Rodape from './componentes/Rodape/Rodape';
import estilos from './page.module.css';

export default function Home() {
  const [ehTemaEscuro, setTemaEscuro] = useState(false)

  function alterarTema() {
    setTemaEscuro(!ehTemaEscuro)
  }

  return (
    <div className={estilos.container}>
      <Topo alterarTema={alterarTema} ehTemaEscuro={ehTemaEscuro}/>
      <main>
        <SecaoBanner ehTemaEscuro={ehTemaEscuro}/>
        <SecaoExperiencia ehTemaEscuro={ehTemaEscuro}/>
      </main>
      <Rodape ehTemaEscuro={ehTemaEscuro}/>
    </div>
  );
}