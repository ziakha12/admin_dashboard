import React from "react";
import { Table } from "react-bootstrap";

function OrdersTable() {
  return (
      <Table>
        <thead>
          <tr>
            <th>Product name</th>
            <th>Delivery Date</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Fires</td>
            <td>10-20-2024</td>
            <td>$67</td>
            <td>
              <span className="border-[#bbc400eb] w-fit p-2 rounded-full border-2 bg-[#eff92573] text-center">
                Pending
              </span>
            </td>
          </tr>
          <tr>
            <td>Fires</td>
            <td>10-20-2024</td>
            <td>$67</td>
            <td>
              <span className="border-red-600 w-fit p-2 rounded-full border-2 bg-[#ee0f0f66] text-center">
                Hold
              </span>
            </td>
          </tr>
          <tr>
            <td>Fires</td>
            <td>10-20-2024</td>
            <td>$67</td>
            <td>
              <span className="border-green-700 w-fit p-2 rounded-full border-2 bg-[#14c80f73] text-center">
                Deliverd
              </span>
            </td>
          </tr>
          <tr>
          <td>Fires</td>
          <td>10-20-2024</td>
          <td>$67</td>
          <td>
            <span className="border-red-600 w-fit p-2 rounded-full border-2 bg-[#ee0f0f66] text-center">
              Hold
            </span>
          </td>
        </tr>
        <tr>
        <td>Fires</td>
        <td>10-20-2024</td>
        <td>$67</td>
        <td>
          <span className="border-green-700 w-fit p-2 rounded-full border-2 bg-[#14c80f73] text-center">
            Deliverd
          </span>
        </td>
      </tr>
        </tbody>
      </Table>
  );
}

export default OrdersTable;
