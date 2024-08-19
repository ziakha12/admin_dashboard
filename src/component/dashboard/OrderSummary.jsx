import React from 'react'
import { Card } from 'react-bootstrap'
function OrderSummary() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Total Orders</Card.Title>
        <Card.Text>Completed: 445</Card.Text>
        <Card.Text>Pending: 12</Card.Text>
        <Card.Text>Cancelled: 30</Card.Text>
      </Card.Body>
    </Card>

  )
}

export default OrderSummary