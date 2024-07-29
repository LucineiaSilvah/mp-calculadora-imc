
import styles from './Botao.module.css'

// eslint-disable-next-line react/prop-types
const Botao = ({children,onClick}) => {
  return (
    <>
      <button className={styles.Botao} onClick={onClick}>
      {children}
      </button>
    </>
  );
}

export default Botao;
