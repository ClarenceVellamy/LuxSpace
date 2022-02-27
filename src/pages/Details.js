import React from 'react'

import Header from 'parts/Header'
import Breadcrumb from 'components/Breadcrumb'
import Clients from 'parts/Clients'
import Sitemap from 'parts/Sitemap'
import Footer from 'parts/Footer'

function HomePage() {
  return (
    <>
        <Header/>
        <Breadcrumb/>
        <Clients/>
        <Sitemap/>
        <Footer/>
    </>
  )
}

export default HomePage