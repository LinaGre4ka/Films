function Footer() {
    return <footer className="page-footer orange accent-2">
        <div className="footer-copyright">
            <div className="container">
                © {new Date().getFullYear()} Angelina Kurepina
                <a className="grey-text text-lighten-4 right" href="#!">Repository</a>
            </div>
        </div>
    </footer>
}
export { Footer };