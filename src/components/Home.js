import React, { useState, useEffect } from 'react'
import PizzaIndex from "./PizzaIndex"

const Home = (props) => {
	const { msgAlert } = props
	// console.log('props in home', props)

	return (
		<div className='container-md'>
		<h2>PIZZA: Let's Get this dough</h2>
		<PizzaIndex msgAlert={msgAlert}/>
	</div>
	)
}

export default Home
