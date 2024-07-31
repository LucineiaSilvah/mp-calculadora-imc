/* eslint-disable react/prop-types */

import styles from './CampoTexto.module.css'
const CampoTexto = ({nome,place,value,onChange, onClick,disabled}) => {


  const handleChange = (e)=>{
    onChange(e.target.value)
  }
  return (
    <>
      <label htmlFor={nome}  className={styles.Etiqueta}>{nome}</label>
      <input 
      type='number'  
      value={value} 
      onChange={handleChange} 
      className={styles.CampoTexto}
       placeholder={place}
       onClick={onClick}
       disabled={disabled}
       />
    </>
  );
}

export default CampoTexto;
