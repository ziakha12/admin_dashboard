import React from 'react'
import OrderSummary from '../component/dashboard/OrderSummary'
import OrdersTable from '../component/dashboard/OrdersTable'
import UserTable from '../component/dashboard/UserTable'

function Dashboard() {
  return (
    <div className="row">
  <div className="">
  <UserTable/>
  </div>
 </div>
  )
}

export default Dashboard