import React from "react";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";

function UserTable() {
  return (
    <div className="main" id="main">

      <div className="container-fluid">
      <div className="row gap my-3 justify-center">
        <div className="col-lg-4 col-md-6 col-sm-12 ">
          <div className="p-2 text-center w-[95%] bg-white rounded-lg mr-1 my-2" >
             <h3 className="text-[#2f007e] text-[36px]">2500</h3>
             <p className="text-2xl">Total Users</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 ">
          <div className="p-2 text-center w-[95%] bg-white rounded-lg mx-1 my-2" >
             <h3 className="text-[#14c80f73] text-[36px]">1000</h3>
             <p className="text-2xl">Active User</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 ">
          <div className="p-2 text-center w-[95%] bg-white rounded-lg mx-1 my-2" >
             <h3 className="text-[#bbc400eb] text-[36px]">1000</h3>
             <p className="text-2xl">Deactive Users</p>
          </div>
        </div>
      </div>
        <div className="row justify-between">
        <div className="col-lg-4 col-md-6 col-sm-6">
        <h3 className="text-4xl text-[#2f007e]">USERS</h3></div>
          <div className="col-lg-2 col-md-6 col-sm-6">
            <Link className="bg-[#2f007e] rounded-lg py-3 px-6 text-white">
              Add User
            </Link>
          </div>
        </div>
      </div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>name</th>
            <th>Joined</th>
            <th colSpan={2}>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>David</td>
            <td>10-20-2024</td>
            <td className="flex ">
              <span className="border-green-700  w-fit p-2 rounded-full border-2 bg-[#14c80f73] text-center">
                Active
              </span>
            </td>
            <td className="">
              <button className="bg-red-600 rounded-lg px-3 py-2 text-white">
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Michle</td>
            <td>10-20-2024</td>
            <td className="flex">
              <span className="border-red-600 w-fit p-2 rounded-full border-2 bg-[#ee0f0f66] text-center">
                Deactive
              </span>
            </td>
            <td>
              <button className="bg-red-600 rounded-lg px-3 py-2 text-white">
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>David</td>
            <td>10-20-2024</td>
            <td className="flex ">
              <span className="border-green-700  w-fit p-2 rounded-full border-2 bg-[#14c80f73] text-center">
                Active
              </span>
            </td>
            <td className="">
              <button className="bg-red-600 rounded-lg px-3 py-2 text-white">
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>David</td>
            <td>10-20-2024</td>
            <td className="flex ">
              <span className="border-green-700  w-fit p-2 rounded-full border-2 bg-[#14c80f73] text-center">
                Active
              </span>
            </td>
            <td className="">
              <button className="bg-red-600 rounded-lg px-3 py-2 text-white">
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>Michle</td>
            <td>10-20-2024</td>
            <td className="flex">
              <span className="border-red-600 w-fit p-2 rounded-full border-2 bg-[#ee0f0f66] text-center">
                Deactive
              </span>
            </td>
            <td>
              <button className="bg-red-600 rounded-lg px-3 py-2 text-white">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default UserTable;
