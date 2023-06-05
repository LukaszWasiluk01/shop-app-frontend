import React from 'react'
import { Outlet } from 'react-router-dom'

import Navigation from '../components/Navigation'

const Root: React.FC = () => {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Root
