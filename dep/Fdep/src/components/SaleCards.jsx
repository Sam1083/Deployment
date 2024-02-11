import React, { useState, useEffect } from 'react'
import './salecards.css'
import CountdownTimer from './CountdownTimer'
import axios from 'axios'
import { Link } from 'react-router-dom'

const SaleCards = () => {
  const [products, setProducts] = useState([])

  const fetchData = async () => {
    const response = await axios.get("http://localhost:9000/api/daraz")
    setProducts(response.data.daraz)
  }

  useEffect(() => {
    fetchData();
  },[])
  return (
    <>
      <h1 className='ftext'>Flash Sale</h1>


      <div className='container boxx1 d-flex flex-column gap-5 flex-wrap'>
        <div className='d-flex align-items-center'>
          <p className='onsale'>On Sale Now</p>
          <span className='fs-timer-text tmo'>Ending in</span>
          <span className='countertimer tmo'><CountdownTimer /></span>
          <Link className="SM btn-light">SHOP MORE</Link>
        </div>
        
        <div className="border-top">
          <div className="mt-3 d-flex justify-content-evenly flex-wrap gap-2 ">
            {
              products.map((item) => {
                return (                
                  <div key={item._id} className="card car" style={{width:"12rem"}}>
                    <Link to={`/SaleCards/${item._id}`} className="text-decoration-none">
                    <img src={item.image} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <p className="card-text text-dark">{item.title.slice(0,50)}</p>
                        <h5 className="price fs-5 mt-5"> Rs.{item.price}</h5>
                      </div>
                      </Link>
                  </div>                  
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default SaleCards
