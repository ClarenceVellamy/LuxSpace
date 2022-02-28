import React from 'react'

import Header from 'parts/Header'
import Breadcrumb from 'components/Breadcrumb'
import ProductDetails from 'parts/Details/ProductDetails'
import Suggestion from 'parts/Details/Suggestion'
import Clients from 'parts/Clients'
import Sitemap from 'parts/Sitemap'
import Footer from 'parts/Footer'

function Details() {
  return (
    <>
        <Header theme='black'/>
        <Breadcrumb
          list={[
            { url: '/', name: "Home"},
            { url: '/categories/1234', name: 'Office Room'},
            { url: '/categories/1234/products/4321', name: 'Details'}
          ]}
        />
        <ProductDetails/>
        <Suggestion/>
        <Clients/>
        <Sitemap/>
        <Footer/>
    </>
  )
}

export default Details