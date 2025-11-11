function Home() {
    return (
        <div className="text-center">
            <section className="my-3">
                <h1>Bienvenido a PixelPlay</h1>
                <p>Explorá juegos indie curados, favoritos y más.</p>
            </section>
            <img src="src/imagenes/juego.jpg" className="img-thumbnail" />
            <img src="src/imagenes/juego2.png" className="img-thumbnail" />
            <section className="my-3">
                <p className="fs-3">Créditos:</p>
                <p>1. https://pixabay.com/es/photos/consola-de-juego-sony-videojuegos-6603120/</p>
                <p>2. https://pixabay.com/es/illustrations/videojuego-plataforma-de-videojuegos-7348585/</p>
            </section>
        </div>
    )
}

export default Home