import React from "react";

const ProdList = (props) => (
  <div className="prod-list">
    {/* Hacemos un map a los datos para mostrarlos
        O mostrar un mensaje que no hay productos  */}

    {props.prods.length > 0 ? (
      props.prods.map((prod) => (
        <div key={prod.id} className="prod">
          <div className="prod-item id">{prod.id}</div>
          <div className="prod-item nombre-prod">{prod.name}</div>
          <div className="prod-item precio">{prod.price}</div>
          <div className="prod-item action">
            <button
              onClick={() => {
                props.editRow(prod);
              }}
              className="btn"
            >
              +
            </button>
            <button onClick={() => props.deleteProd(prod.id)} className="btn">
              x
            </button>
          </div>
        </div>
      ))
    ) : (
      <div>
        <p colSpan={3}>No hay productos</p>
      </div>
    )}
  </div>
);

export default ProdList;
