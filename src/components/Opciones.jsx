import React from "react";

class Opciones extends React.Component {
  render() {
    return (
      <div className="opciones">
        <div className="opcion">
          <button id="A" className="botones" onClick={this.props.handleClick}>
            A
          </button>
          <p className="textoOpcion">{this.props.opcionA}</p>
        </div>
        <div className="opcion">
          <button id="B" className="botones" onClick={this.props.handleClick}>
            B
          </button>
          <p className="textoOpcion">{this.props.opcionB}</p>
        </div>
      </div>
    );
  }
}

export default Opciones;
