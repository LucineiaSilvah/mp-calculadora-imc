import styles from './Rodape.module.css';

const Rodape = () => {
  return (
    <footer className={styles.Rodape}>
    <p>Projeto de : <span>
    
    <a href="https://codante.io/mini-projetos" target='__blank'>Codante</a>
  </span></p>
   
    <p>Desenvolvido por: <span>
    
    <a href="https://github.com/LucineiaSilvah" target='__blank'>Luh Silva</a>
  </span></p>
   
  </footer>
  );
}

export default Rodape;
