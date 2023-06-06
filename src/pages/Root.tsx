import React from 'react'
import { Outlet } from 'react-router-dom'

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const Root: React.FC = () => {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Root
