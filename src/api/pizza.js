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
export const pizzaIndex = (user) => {
    return axios({
        method: 'GET',
        url: apiUrl + '/pizzas',
     
    })
}
export const pizzaShow = (user, id) => {
    return axios({
        method: 'GET',
        url: apiUrl + '/pizzas/' + id,
       
    })
}

export const pizzaUpdate = (data, user, id) => {
    return axios({
        method: 'PATCH',
        url: apiUrl + '/pizzas/' + id,
        data: {
            pizza: data,
        },
        headers: {
            Authorization: `Token token=${user.token}`,
        },
    })
}

export const pizzaDelete = (user, id) => {
    return axios({
        method: 'DELETE',
        url: apiUrl + '/pizzas/' + id,
        headers: {
            Authorization: `Token token=${user.token}`,
        },
    })
}