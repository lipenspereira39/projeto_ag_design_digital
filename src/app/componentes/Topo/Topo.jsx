import estilos from './Topo.module.css';
import Logo from '/public/Logo2.png';
import iconeSol from '/public/sun.png';
import iconeLua from '/public/moon.png';
import Image from 'next/image';

export default function Topo(props) {
  return(
    <header className={props.ehTemaEscuro ? estilos.topo_modo_escuro : estilos.topo_modo_claro}>
      <Image className={estilos.logo} src={Logo} alt="logomarca"/>
      <button onClick={props.alterarTema} className={props.ehTemaEscuro ? estilos.btn_modo_escuro : estilos.btn_modo_claro}>
        <Image className={estilos.iconesBtn} src={props.ehTemaEscuro ? iconeSol : iconeLua} alt='icone'/>
      </button>
    </header>
  )
}