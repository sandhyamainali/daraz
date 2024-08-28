import React, { useContext, useEffect, useState } from 'react'
import CartContext from '../CartContext'
import { Link } from 'react-router-dom';

function Products(props) {
    let {state,dispatch}=useContext(CartContext)
    
    let [products, setProduct] = useState([])
    useEffect(() => {

        fetch(`https://dummyjson.com/products/category/${props.name}`).then(a => a.json()).then(b => setProduct(b.products))

        

    },[props.name])

    console.log(products)
    return (
        <div>
            <div className="container py-3">
                <h2 className='text-uppercase py-3'>{props.name}</h2>
                <div className="row">
                    {products.slice(0,4).map((a) => (
                        <div className="col-lg-3 key={a.name}">
                            <div className="shadow">
                                <div className="box">
                                    <img className="width border-none"src={a.thumbnail} alt="" />
                                    <Link className='link-dark text-decoration-none' to={`/detail/${a.id}`}><p className='fw-bold py-4 pb-0 px-3 uppercase'>{a.title}</p></Link>
                                    <p className='fw-bold  px-3 '>${a.price}</p>

                                    <button className='btn btn-sm btn-warning ac mb' onClick={() => dispatch({ type: 'addtocart', payload: a })}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Products
