import React from 'react';

// Punto inicial
// export function Clock(props) {
//   return (
//     <div>
//       <h1>Hola, triupulantes!</h1>
//       <h2>Son las {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   );
// }

export class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerId = setInterval(() =>{
      this.tick();
    },1000);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div>
        <h1>Hola, triupulantes!</h1>
        <h2>Son las {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}




/*****************ACTIVIDAD ************************************
1. Convertir el componente funcional a componente clase
2. Agregar el constructor
3. Agregar estado para establecer la fecha a la propiedad date
4. Controlar el setInterval utilizando metodos del ciclo de vida
*****************************************************************/




