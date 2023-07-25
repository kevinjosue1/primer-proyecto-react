import { useCounter } from "../assets/hooks/UseCounter"


export const ContadoComponent = () => {
 
  const {contador, incrementar, decrementar, resetear} = useCounter(0)
    return (
    <>
    <h1>Contador: {contador}</h1>
    <button className="btn btn-primary m-1" onClick={() => incrementar()}>+1</button>
    <button className="btn btn-danger m-2" onClick={() => resetear()}>Resetear</button>
    <button className="btn btn-primary m-1" onClick={() => decrementar(1)}>-1</button>
    </>
  )
}
