import React, { useEffect, useState } from 'react' 
import { pizzaIndex } from '../api/pizza'
import {Link} from 'react-router-dom'
const PizzaIndex = ({ user, msgAlert }) => {

    const [allPizzas, setAllPizzas] = useState([])

    useEffect(() => {
        pizzaIndex(user)
        .then(res => {
            setAllPizzas(res.data.pizzas)
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Index Pizzas Failure' + error,
                variant: 'danger'
            })
        })
    }, [])

    const allPizzasJSX = allPizzas.map(pizza => {
        return (
            <Link to= {pizza._id} key={pizza._id}>
            <li>Name: {pizza.name} type: {pizza.type}</li>
            </Link>
        )
    })

    return (
        <>
            <ul>{allPizzasJSX}</ul>
        </>
    )
}

export default PizzaIndex