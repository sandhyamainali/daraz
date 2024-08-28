import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import CartContext from '../CartContext'

function Category() {
  
  let {state,dispatch}=useContext(CartContext)
  let { cid } = useParams()

  let [product, setProduct] = useState([])
  useEffect(() => {

    fetch(`https://dummyjson.com/products/category/${cid}`).then(a => a.json()).then(b => setProduct(b.products))
  }, [cid])
  return (
    <div>
      <div className="container py-3">
        <h2 className='text-uppercase'>{cid}</h2>
        <div className="row">
          {product.map((a) => (
            <>
              <div className="col-lg-3 py-3">
                <div className="shadow">
                  <div className='con'>
                  <img className="width "src={a.thumbnail} alt="" />
                 <Link className="link-dark text-decoration-none" to={`/detail/${a.id}`}> <p className='fw-bold py-4 pb-0 px-3 '> {a.title}</p></Link>
                  <button className='btn btn-sm btn-warning py-2 ac mb-2 ms-3'onClick={()=>dispatch({type:'addtocart', payload:a})}>Add to Cart</button>
                  </div>
                </div>
              </div>
            </>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Category
