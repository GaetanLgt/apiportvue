<template>
	<p class="projetDescrip" v-html="projet.description"></p>
</template>

<script>
	// @ is an alias to /src
	import axios from "axios";

	export default {
		name: "ProjetDescrip",
		components: {},
		props: {
			index: Number,
		},
		data() {
			return {
				projet: [],
			};
		},
		created() {
			axios
				.get("http://127.0.0.1:8000/api/projets/" + this.index)
				.then((response) => (this.projet = response.data));
		},
	};
</script>