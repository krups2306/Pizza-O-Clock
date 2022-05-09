import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'

export default function Pizza({ pizza }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [quantity, setquantity] = useState(1)
  const [sizes, setsizes] = useState('small')

  return (
    <div style={{ margin: '70px' }} className='shadow-lg p-3 mb-5 bg-white rounded'>
      <div onClick={handleShow}>
        <h1>{pizza.name}</h1>
        <img src={pizza.image} className="img-fluid" style={{ height: '150px', width: '150px' }} />
      </div>

      <div className='flex-container'>

        <div className='w-100 m-1'>
          <p>Size</p>
          <select className='form-control' value={sizes} onChange=
            {(e) => { setsizes(e.target.value) }}>
            {pizza.sizes.map(sizes => {
              return <option value={sizes}>{sizes}</option>
            })}

          </select>

        </div>
        <div className='w-100 m-1'>
          <p>Quantity</p>
          <select className='form-control' value={quantity} onChange={(e) => { setquantity(e.target.value) }}>
            {[...Array(10).keys()].map((x, i) => {
              return <option value={i + 1}>{i + 1}</option>
            })}
          </select>
        </div>
      </div>

      <div className='flex-container'>

        <div className='m-1 w-100'>
          <h1 className='mt-1'>Prices: {pizza.prices[0][sizes] * quantity} Rs</h1>
        </div>

        <div className='m-1 w-100'>
          <button className='btn'>Add to cart</button>
        </div>

      </div>

      <Modal show={show}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img src={pizza.image} style={{height:'300px', width:'300px'}}/>
          <p>{pizza.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <button className='btn' onClick={handleClose}>Close</button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
