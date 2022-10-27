import React from 'react'


const PizzaUpdate = ({pizza, handleChange, handleUpdatePizza}) => {
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
            <button onClick={handleUpdatePizza}>Update Pizza</button>
        </>
    )
}
export default PizzaUpdate