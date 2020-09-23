import React from "react"

import Layout from "../layouts/layout"
import Logo from "../components/logo"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p className="border border-primary">Welcome to your new Gatsby site.</p>
    <p className="border border-secondary">Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Logo />
    </div>
  </Layout>
)

export default IndexPage
