import React, { useState } from 'react' 
import { pizzaCreate } from '../api/pizza'

const PizzaCreate = ({ user, msgAlert }) => {

    const defaultPizza = {
        name: '',
        type: ''
    }

    const [pizza, setPizza] = useState(defaultPizza)

    const handleChange = (event) => {
        // to keep the values as users input info 
        // first spread the current pet
        // then comma and modify the key to the value you need
        setPizza({...pizza, [event.target.name]: event.target.value})
    }

    const handleCreatePizza = () => {
        pizzaCreate(pizza, user)
        .then(() => {
            msgAlert({
                heading: 'Success',
                message: 'Create Pizza',
                variant: 'success'
            })
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Create Pizza Failure' + error,
                variant: 'danger'
            })
        })
    }

    return (
			<>
				<input
					type='text'
					value={pizza.name}
					name='name'
					onChange={handleChange}
				/>
				<input
					type='text'
					value={pizza.type}
					name='type'
					onChange={handleChange}
				/>
				<button onClick={handleCreatePizza}>Create Pizza</button>
			</>
		)
}

export default PizzaCreate