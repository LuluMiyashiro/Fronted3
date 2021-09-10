import data from "./components/data.json";
import React from "react";
import Opciones from "./components/Opciones";
import Historial from "./components/Historial";

//Creo un array vacio donde van a ir las opciones que se eligen
const historial = [];

class App extends React.Component {

  //Constructor con un contador desde 0 y ninguna opcion seleccionada
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
      opcionElegida: "",
    };
  }
 
  //Pusheo las opciones elegidas dentro del array creado anteriormente 
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contador !== this.state.contador) {
      historial.push(this.state.opcionElegida);
    }
  }

  //Modifico el estado dependiendo de la opcion elegida, se va a sumar un determinado numero que va a corresponder a la proxima historia de nuestro JSON.
  handleClick = (e) => {
    const id = e.target.id;
    if (this.state.contador >= 7) {
      alert("Tu aventura termino!");
    } else if (id === "A" && this.state.opcionElegida !== "A") {
      this.setState({
        contador: this.state.contador + 1,
        opcionElegida: "A",
      });
    } else if (id === "A" && this.state.opcionElegida === "A") {
      this.setState({
        contador: this.state.contador + 2,
      });
    } else if (id === "B" && this.state.opcionElegida === "A") {
      this.setState({
        contador: this.state.contador + 3,
        opcionElegida: "B",
      });
    } else if (id === "B") {
      this.setState({
        contador: this.state.contador + 2,
        opcionElegida: "B",
      });
    }
  }; 
  
  //Muestro en pantalla todos los componentes creados
  render() {
    return (
      <div className="layout">
        <p className="historia">{data[this.state.contador].historia}</p>
        <Opciones
          handleClick={this.handleClick}
          opcionA={data[this.state.contador].opciones.a}
          opcionB={data[this.state.contador].opciones.b}
        />
        <Historial
          opcionElegida={this.state.opcionElegida}
          historial={historial.map(
            (e, index) => (
              <li key={index}>{e}</li>
            ),
            data[this.state.contador].id
          )}
        />
      </div>
    );
  }
}

export default App;

