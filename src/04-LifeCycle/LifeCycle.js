export function Clock(props) {
  return (
    <div>
      <h1>Hola, triupulantes!</h1>
      <h2>Son las {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

/*****************ACTIVIDAD ************************************
1. Convertir el componente funcional a componente clase
2. Agregar el constructor
3. Agregar estado para establecer la fecha a la propiedad date
4. Controlar el setInterval utilizando metodos del ciclo de vida
*****************************************************************/




