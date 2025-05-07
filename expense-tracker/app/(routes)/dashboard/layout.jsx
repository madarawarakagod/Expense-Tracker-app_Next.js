import React from 'react'
import DashboardHeader from './_components/Dashboardheader';
import SideNav from './_components/SideNav';

function DashboardLayout({children}) {
  return (
    <div>
         <div className='fixed md:w-64 hidden md:block'>
          <SideNav/>
         </div>
         <div className='md:ml-64 bg-green-200'>
          <DashboardHeader/>
          {children}
         </div>
         
    </div>
  )
}

export default DashboardLayout