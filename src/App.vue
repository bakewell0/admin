<template>
  <div id="app">
  	<div class="header"></div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
	.header{
			height: 60px;
			background:#3a8ee6;
	}
</style>
