<template>
	<div>
		<ShowBeerData :beers="$store.state.BeerData.beerData" />
	</div>
</template>
<script>
import ShowBeerData from './ShowBeerData'
export default {
  name: 'ReceiveBeerData',
	components : {
		ShowBeerData
	},
	computed: {
  	beerData () {
    	return this.$store.state.BeerData.beerData
  	}
  },
  created () {
		this.$store.dispatch('BeerData/fetchBeerData')
  }
}
</script>