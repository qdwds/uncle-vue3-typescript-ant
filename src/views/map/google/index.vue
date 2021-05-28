<template>
	<GoogleMap
        api-key="AIzaSyCTG9g6POpKRX5T7YoyrVrLlrGfb4ppWho"
        style="width: 100%; height: 100%"
        :center="center"
        :zoom="15"
	>
		<Marker :options="{ position: center }" />
	</GoogleMap>
</template>

<script>
import { GoogleMap, Marker } from 'vue3-google-map'

export default {
	components: { GoogleMap, Marker },
	setup() {
		const center = { lat: 116.397428, lng: 39.90923 }
		return { center }
	},
}
</script>