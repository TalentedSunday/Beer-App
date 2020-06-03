import axios from 'axios'
export default {
	namespaced: true,
	state:{
		beerData : [],
	},
	actions:{	
		fetchBeerData(store) {	
			axios.get('https://api.punkapi.com/v2/beers')
			.then(response =>{
				console.log(response)
				store.commit('getDataFromApi', response.data)
			})
		}
	},
	mutations:{
		getDataFromApi(state, beerData) {
			state.beerData = beerData
		}
	}
}

// curl https://api.punkapi.com/v2/beers