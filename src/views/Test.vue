<template>
	<div>
		<v-col cols="12" sm="6">
			<div v-for="(comp , index) in competences" v-bind:key="index">
				<v-select chips label="Chips" :item-value="[index-1].name" multiple solo></v-select>
			</div>
		</v-col>
	</div>
</template>
<script>
	import axios from "axios";
	export default {
		name: "Test",
		components: {},
		data() {
			return {
				competences: [],
				nbComps: "",
				projets: [],
				nbProjets: "",
				shows: [
					false,
					false,
					false,
					false,
					false,
					false,
					false,
					false,
					false,
					false,
					false,
					false,
					false,
				],
			};
		},
		mounted() {
			axios
				.get("http://127.0.0.1:8000/api/competences")
				.then(
					(response) => (
						(this.competences = response.data["hydra:member"]),
						(this.nbComps = this.competences.length)
					)
				);
			axios
				.get("http://127.0.0.1:8000/api/projets")
				.then(
					(response) => (
						(this.projets = response.data["hydra:member"]),
						(this.nbProjets = this.projets.length)
					)
				);
		},
		methods: {
			getCompName(name) {
				return name;
			},

			getIdComp(Comp) {
				let id = Comp.replace("/api/competences/", "");
				return id;
			},
		},
	};
</script>