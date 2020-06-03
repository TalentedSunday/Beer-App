<template>
	<div>
		<div v-for="(item, index) in beers" :key="index">
			<p> {{ item.id }} </p>
			<p> {{ item.name }} </p>
			<p> {{ item.tagline }} </p>
			<img :src="item.image_url" />
		</div>	
	</div>
</template>
<script>
export default {
  name: 'ShowBeerData',
  props : {
		beers: {
			type: Array
		}
  }
}
</script>