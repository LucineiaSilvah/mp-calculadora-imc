import styles from './Resposta.module.css'
// eslint-disable-next-line react/prop-types
const Resposta = ({peso,altura,r,resultado}) => {
  return (
    <table className={styles.Resposta}>
    <thead>
     <th>Peso</th>
     <th>Altura</th>
     <th>imc</th>
     <th>Resultado</th>
    </thead>
    <tbody>
     <tr>
       <td>{peso}</td>
       <td>{altura}</td>
       <td>{r}</td>
       <td>{resultado}</td>
     </tr>
    </tbody>
 </table>
  );
}

export default Resposta;
