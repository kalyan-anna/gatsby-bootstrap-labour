import React from 'react'

import AppLayout from '../layouts/AppLayout'
import Logo from '../components/Logo/Logo'
import SEO from '../components/SEO/SEO'

const IndexPage = () => (
  <AppLayout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p className="border border-primary">Welcome to your new Gatsby site.</p>
    <p className="border border-secondary">Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Logo />
    </div>
  </AppLayout>
)

export default IndexPage
