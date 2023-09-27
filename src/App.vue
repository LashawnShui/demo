<template>
	<div id="app">
		<!-- <img alt="Vue logo" src="./assets/logo.png"> -->
		<!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
		<LayerContainer />
	</div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import LayerContainer from './components/LayerContainer.vue';

export default {
	name: 'App',
	components: {
		// HelloWorld
		LayerContainer
	}
}
</script>

<style>
html,
body {
	width: 100%;
	height: 100%;
  margin: 0;
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	width: 100%;
	height: 100%;
}
</style>
