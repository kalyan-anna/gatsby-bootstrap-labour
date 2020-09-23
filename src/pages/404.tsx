import React from 'react'

import AppLayout from '../layouts/AppLayout'
import SEO from '../components/SEO/SEO'

const NotFoundPage = () => (
  <AppLayout>
    <SEO title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </AppLayout>
)

export default NotFoundPage
