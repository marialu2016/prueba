//npm install @mui/material @emotion/react @emotion/styled
//npm install @mui/icons-material

import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Container from "@mui/material/Container";

function Pokemon() {
  const [personajes, setPersonajes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
      .then((res) => res.json())
      .then((data) => setPersonajes(Array.isArray(data.results) ? data.results : []))
      .catch((err) => setError(err.message));
  }, []);

  // Saca el ID del final de la URL: .../pokemon/25/
  const getPokemonId = (url) => {
    const parts = url.split("/");
    return parts[parts.length - 2];
  };

  if (error) return <p>⚠️ Error: {error}</p>;

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Pokédex
      </Typography>

      <Grid container spacing={2}>
        {personajes.map((p) => {
          const id = getPokemonId(p.url);
          const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
          return (
            <Grid item xs={12} sm={6} md={3} key={p.name}>
              <Card sx={{ maxWidth: 280, m: "auto", textAlign: "center" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="160"
                    image={img}
                    alt={p.name}
                    sx={{ objectFit: "contain", bgcolor: "#f6f6f6" }}
                  />
                  <CardContent>
                    <Typography variant="h6" sx={{ textTransform: "capitalize" }}>
                      {p.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      ID: {id}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default Pokemon;
