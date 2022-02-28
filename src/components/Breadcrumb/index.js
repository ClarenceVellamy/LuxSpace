import React from 'react'
import propTypes from 'prop-types'

import { Link } from 'react-router-dom'

export default function Breadcrumb({list}) {
  return (
    <section className="bg-gray-100 py-8 px-4">
      <div className="container mx-auto">
        <ul className="breadcrumb">

          {list?.map?.((item, index) =>{
            const arias = index === list?.length? { 'aria-label' : 'current-page'} : {}
            return (
              <li key={item.url} {...arias}>
                <Link to={item.url}>{item.name}</Link>
              </li>
            )
          })}
          
          {/* <li>
            <a href="#">Office Room</a>
          </li>
          <li>
            <a href="#" aria-label="current-page">Details</a>
          </li> */}
        </ul>
      </div>
    </section>
  )
}

Breadcrumb.propTypes = {
  list: propTypes.array.isRequired
}

