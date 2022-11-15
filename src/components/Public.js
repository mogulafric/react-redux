import { Link } from "react-router-dom"

const Public = () => {

    const content = (
        <section className="public">
            <header>
                <h1>ST. Francis of Assi Kaliini Sec. School</h1>
            </header>
            <main>
                <p>School system.</p>
                <p>&nbsp;</p>
                <address>
                    School<br />
                    555 Foo Drive<br />
                    Email, 12345<br />
                    <a href="tel:+25455555555">(555) 555-5555</a>
                </address>
            </main>
            <footer>
                <Link to="/login">Login</Link> <br></br>
                <Link to="/resetpassword">Password Reset</Link>
            </footer>
        </section>

    )
    return content
}
export default Public