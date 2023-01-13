import './Orders.css'

import React, { useEffect, useState } from 'react'

import { db } from './firebase'
import Order from './Order'
import { useStateValue } from './StateProvider'

function Orders() {
    const [{ basket, user }, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        // Get collection of user orders
        // users -> user -> orders -> created -> snapshot of db -> set orders 


        if (user) {
            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .orderBy('created', 'desc') // order based on descended order -> most recent at the top
                .onSnapshot(snapshot => (
                    setOrders(snapshot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data(),
                    })))
                ))
        } else {
            setOrders([]);
        }

    }, [user])

    return (
        <div className='orders'>
            <h1>Your Orders</h1>
            <div className="orders__orderContainer">
                {orders?.map(order => (
                    <Order order={order} />
                ))}
            </div>
        </div>
    )
}

export default Orders
