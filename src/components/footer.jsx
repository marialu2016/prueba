function Footer() {
    return (
        <div>
            <footer className="footer fixed-bottom text-center bg-primary py-3">
                © {new Date().getFullYear()} PixelPlay todos los derechos reservados
            </footer>
        </div>
    )
}

export default Footer