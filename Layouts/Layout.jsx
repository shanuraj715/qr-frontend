import React from 'react'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

function Layout(props) {

  return props.children.type.layout !== 'blank' ? 
    <>
    <Header />
      <div className={`${props.children.type.layout === 'full-width' ? '' : 'container '} mt-5 pt-2 overflow-hidden`}>
        <div className="pageBG position-fixed w-100 h-100 top-0"></div>
        {props.children}
      </div>
      <Footer />
    </>
  : props.children
}

export default Layout