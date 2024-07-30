import { useState } from 'react'
import './App.css'
import Botao from './components/Botao/Botao'
import CampoTexto from './components/CampoTexto/CampoTexto'
import Resposta from './components/Resposta/Resposta';
import Tabela from './components/Tabela/Tabela'

function App() {
  const [peso,setPeso] = useState('');
  const [altura,setAltura] = useState('');
  const [resposta,setResposta] = useState('');
 

  const handlePesoChange = (value)=>{
    setPeso(value)
  }
  const handleAlturaChange = (value)=>{
    setAltura(value)
  }
  const calcular = (e)=>{
    e.preventDefault()
    const r = parseFloat(peso) / parseFloat(altura**2);

    if(r < 17){
      const resultado = "Muito abaixo do peso";
      /* empty */
      setResposta(<Resposta 
        peso={peso}
        altura={altura}
        r={r}
        resultado={resultado}/>)
    }else if(r >17 && r <=18.49){
      const resultado = "Abaixo do peso";
      /* empty */
      setResposta(<Resposta 
        peso={peso}
        altura={altura}
        imc={r}
        resultado={resultado}
        />);

    }else if(r >18.5 && r <=24.99){
      const resultado = "Peso normal";
      /* empty */
      setResposta(`
        ${peso}
        ${altura}
        ${r}
        ${resultado}
         `);
    }else if(r >25 && r <=29.99){
      const resultado = "Acima do peso";
      /* empty */
      setResposta(`
        ${peso}
        ${altura}
        ${r}
        ${resultado}
         `);
    }else if(r >30 && r <=34.99){
      const resultado = "Obesidade I";
      /* empty */
      setResposta(`
       ${peso}
       ${altura}
       ${r}
       ${resultado}
        `);
    }else if(r >35 && r <=39.99){
      const resultado = "Obesidade II (severa)";
      /* empty */
      setResposta(`
      
        ${peso}
     
        ${altura}
        ${r}
        ${resultado}
         `);
    }else if(r >40){
      const resultado = "Obesidade III (mórbida)";
      /* empty */
      setResposta(`
        ${peso}
        ${altura}
        ${r}
        ${resultado}
         `);
    }
   
    setPeso('')
    setAltura('')
    
  }


  return (
    <main className='Container'>
      <form className='Formulario' >
        <CampoTexto nome="Peso" place="KG" value={peso} onChange={handlePesoChange}/>
        <CampoTexto nome="Altura" place="CM" value={altura} onChange={handleAlturaChange}/>
        <Botao type='submit' onClick={calcular}>
          Calcular
        </Botao>
      <p>Saiba Agora se esta no seu peso ideal!</p>
       
      </form>
   {resposta}
      <Tabela/>
    </main>
  )
}

export default App
