import React from "react"
import { Link } from "react-router-dom"

const NoAccess = () => {
  
    const content = (
        <section className="welcome">
            <h1>It's not you!</h1>
            <p>Sorry, your account does not have all the required permission to accesss this resource.</p>
            <Link to="../welcome">Back to Home</Link>
        </section>
    )

    return content
}

export default NoAccess