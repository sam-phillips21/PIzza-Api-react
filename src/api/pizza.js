import apiUrl from '../apiConfig'
import axios from 'axios'

export const pizzaCreate = (data, user) => {
	return axios({
		method: 'POST',
		url: apiUrl + '/pizzas',
		data: {
			pizza: data,
		},
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}