import { useSelector } from "react-redux"
import { selectCurrentUser } from "./authSlice"
import { Link } from "react-router-dom"

const Welcome = () => {
    const user = useSelector(selectCurrentUser)
    //

    const welcome = user ? `Signed as ${user}.` : 'Welcome!'
    //const tokenAbbr = `${token.slice(0, 12)}...`

    const content = (
        <section className="welcome">
            <h1>{welcome}</h1>
            <p><Link to="/userslist">Go to the Users List</Link></p>
            <p><Link to="/updateprofile">Update your profile</Link></p>
            <br></br><br></br>
            <p><Link to="/noaccess">Go to the Exams module</Link></p>
            <p><Link to="/noaccess">Go to the Students module</Link></p>
            <p><Link to="/noaccess">Go to Parents module</Link></p>
            <p><Link to="/noaccess">Go to Teachers module</Link></p>
            <br></br>
            <p><Link to="/noaccess">Administrator</Link></p>

        </section>
    )

    return content
}
export default Welcome