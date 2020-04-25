import React from "react"
import { Link } from "gatsby"
import Header from '../components/header'

export default () => (
    <div style={{ color: `purple` }}>
        <Link to="/contact/">Contact</Link>
        <Header headerText="Hello Gatsby!"/>
        <p> Hi I am learning gatsby</p>
        <img style={{maxWidth: `100%`}} src="https://images.unsplash.com/photo-1501183007986-d0d080b147f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60" alt="random image"/>
    </div>
)