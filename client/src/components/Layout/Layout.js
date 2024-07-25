import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Helmet } from 'react-helmet'

import { Toaster } from 'react-hot-toast';

const Layout = ({children , title , description , author , keywords}) => {
  return (
    <div>
      <Helmet>
      <meta charset="UTF-8"/>

  <meta name="description" content={description} />
  <meta name="keywords" content={keywords}/>
  <meta name="author" content={author} />

<title>{title}</title>
      </Helmet>
      <Header/>
        <main style={{maxWidth:"100vw",  minHeight : '80vh'}}> 
        <Toaster />
        {children}</main>
       <Footer/>
    </div>
  )
};

Layout.defaultProps = {
  title: "The Infinity Store",
  description: "mern stack project . An ecommerce app that brings happiness to your door",
  keywords: "mern,react,node,mongodb, Shop now , electric appliances , electronics , clothing , sports , cosmetics , beauty , skincare ",
  author: "Manya Mishra",
};

export default Layout
