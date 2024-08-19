import React from 'react'
import OrdersTable from '../component/dashboard/OrdersTable'

function Orders() {
  return (
    <div className="main " id="main">
    <h1>Orders</h1>
    <div className="container my-2">
      <div className="row gap">
        <div className="col-lg-3 col-md-4 col-sm-12 ">
          <div className="p-2 text-center w-[95%] bg-white rounded-lg mr-1 my-2" >
             <h3 className="text-[#2f007e] text-[36px]">2500</h3>
             <p className="text-2xl">Total Orders</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-12 ">
          <div className="p-2 text-center w-[95%] bg-white rounded-lg mx-1 my-2" >
             <h3 className="text-[#14c80f73] text-[36px]">1000</h3>
             <p className="text-2xl">Total Deliverd</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-12 ">
          <div className="p-2 text-center w-[95%] bg-white rounded-lg mx-1 my-2" >
             <h3 className="text-[#bbc400eb] text-[36px]">1000</h3>
             <p className="text-2xl">Total Pending</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-12 ">
          <div className="p-2 text-center w-[95%] bg-white rounded-lg mx-1 my-2" >
             <h3 className="text-red-600 text-[36px]">500</h3>
             <p className="text-2xl">Total Hold</p>
          </div>
        </div>
      </div>
    </div>
    <OrdersTable/>

    </div>
  )
}

export default Orders
