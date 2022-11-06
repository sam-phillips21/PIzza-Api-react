import React, { useEffect, useState } from 'react' 
import { useParams, useNavigate } from 'react-router-dom'
import { pizzaDelete, pizzaShow, pizzaUpdate } from '../api/pizza'
import PizzaUpdate from './PizzaUpdate'

const PizzaShow = ({ user, msgAlert }) => {

    const [pizza, setPizza] = useState({})
    const [isUpdateShown, setIsUpdateShown] = useState(false)
    const [deleted, setDeleted] = useState(false)
    const { id } = useParams()
    const navigate = useNavigate()
    
    useEffect(() => {
        pizzaShow(user, id)
        .then((res) => {
            setPizza(res.data.pizza)
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Show Pizza Failure' + error,
                variant: 'danger'
            })
        })
    }, [])

    const toggleShowUpdate = () => {
        setIsUpdateShown(prevUpdateShown => !prevUpdateShown)
    }

    const handleChange = (event) => {
        // to keep the values as users input info 
        // first spread the current pizza
        // then comma and modify the key to the value you need
        setPizza({...pizza, [event.target.name]: event.target.value})
    }

    const handleUpdatePizza = () => {
        pizzaUpdate(pizza, user, id)
        .then(() => {
            msgAlert({
                heading: 'Success',
                message: 'Updating Pizza',
                variant: 'success'
            })
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Update Pizza Failure' + error,
                variant: 'danger'
            })
        })
    }
const handleDeletePizza = () => {
        pizzaDelete(user, id)
        .then(() => {
            setDeleted(true)
            msgAlert({
                heading: 'Success',
                message: 'Updating Pizza',
                variant: 'success'
            })
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'deleted Pizza Failure' + error,
                variant: 'danger'
            })
        })
}
    // logical &&
    // both sides of this check NEED to be truthy values = true
    // logical ||
    // only one side of this check needs to be truthy = true
if (deleted) navigate('/pizzas')
    return (
			<>
				<h3>Name: {pizza.name}</h3>
				<p>Type: {pizza.type}</p>
				<button onClick={toggleShowUpdate}> Update</button>
				{isUpdateShown && (
					<PizzaUpdate
						pizza={pizza}
						handleChange={handleChange}
						handleUpdatePizza={handleUpdatePizza}
					/>
                    
				)}
                <button onClick={handleDeletePizza}>Delete</button>
               
			</>
		)
}

export default PizzaShow