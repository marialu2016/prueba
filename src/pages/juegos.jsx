import { useState, useEffect } from "react";

function Juegos() {
  const [pokemons, setPokemons] = useState([]);
  const [detalle, setDetalle] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=12")
      .then((res) => res.json())
      .then((data) => setPokemons(data.results))
      .catch(console.error);
  }, []);

  // ✅ Nueva función para traer los detalles individuales
  const verDetalle = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDetalle(data))
      .catch(console.error);
  };
  return (
    <div style={{ padding: 24 }}> {/*contenedor con padding para que
      no quede pegado a los bordes*/}
      <h1>🎮 Juegos (Pokémon)</h1>

      {/* 🔹 Listado de Pokémon */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 20,
        }}
      >
        {pokemons.map((p) => (
          <div
            key={p.name}
            style={{
              background: "#222",
              color: "white",
              borderRadius: 8,
              padding: 16,
              width: 160,
              textAlign: "center",
              boxShadow: "0 0 8px #000",
              transition: "transform 0.2s ease",
            }}
          >
            <h4 style={{ textTransform: "capitalize" }}>{p.name}</h4>

            {/* Imagen obtenida con el ID desde la URL */}
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                p.url.split("/")[6]
              }.png`}
              alt={p.name}
              width="100"
              height="100"
            />

            <br />
            <button
              onClick={() => verDetalle(p.url)}
              style={{
                background: "#0d6efd",
                color: "white",
                border: "none",
                borderRadius: 4,
                padding: "6px 12px",
                cursor: "pointer",
                marginTop: 8,
              }}
            >
              Ver detalle
            </button>
          </div>
        ))}
      </div>

      {/* 🔹 Card del detalle */}
      {detalle && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 40,
            marginBottom: 100,
          }}
        >
          <div
            style={{
              background: "#111",
              color: "white",
              padding: 20,
              borderRadius: 10,
              width: 300,
              textAlign: "center",
              boxShadow: "0 0 10px rgba(0,0,0,0.3)",
            }}
          >
            <h2 style={{ textTransform: "capitalize" }}>{detalle.name}</h2>
            <img
              src={detalle.sprites.front_default}
              alt={detalle.name}
              width="120"
              height="120"
            />
            <p>
              <b>Altura:</b> {detalle.height}
            </p>
            <p>
              <b>Peso:</b> {detalle.weight}
            </p>
            <p>
              <b>Tipo:</b> {detalle.types.map((t) => t.type.name).join(", ")}
            </p>

            <button
              onClick={() => setDetalle(null)}
              style={{
                background: "#dc3545",
                color: "white",
                border: "none",
                borderRadius: 4,
                padding: "6px 12px",
                cursor: "pointer",
                marginTop: 10,
              }}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Juegos;
