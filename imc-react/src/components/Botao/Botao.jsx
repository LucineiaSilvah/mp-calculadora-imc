
import styles from './Botao.module.css'

// eslint-disable-next-line react/prop-types
const Botao = ({onClick,texto}) => {
  return (
    <>
      <button className={styles.Botao} onClick={onClick}>
      {texto}
      </button>
    </>
  );
}

export default Botao;
