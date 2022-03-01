import React from 'react'

import Header from 'parts/Header'
import PageErrorMessage from 'parts/PageErrorMessage'
import Sitemap from 'parts/Sitemap'
import Footer from 'parts/Footer'

function NotFound() {
  return (
    <>

    <Header theme='black'/>
    <PageErrorMessage/>
   
    <Sitemap/>
    <Footer/>
  </>
  )
}

export default NotFound