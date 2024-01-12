import React from 'react'
import NavBar from '../components/NavBar'

const Layout:React.FC = () => {
  return (
    <div className='w-[100vw] h-auto justify-center flex'>
      <NavBar />
      {/* {children} */}
    </div>
  )
}

export default Layout