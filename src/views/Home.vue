<template>
	<div class="home">
		<div id="titre">
			<v-parallax light src="../assets/maxresdefault.jpg">
				<v-row align="center mt-4" justify="center">
					<v-col class="text-center" cols="12">
						<h1
							class="heading display-1 font-weight-thin pt-16 mb-4 xyz-in"
							xyz="fade flip-top perspective-4 delay-30 duration-10"
						>
							<strong>
								<PersonneName :index="1" />
							</strong>
						</h1>
						<h4 class="subheading">
							<PersonneTitre :index="1" />
						</h4>
						<div class="countup py-6 xyz-in" xyz="fade small stagger" id="countup1">
							<v-row class="d-flex justify-center pb-5">
								<div>
									<span class="timeel years">00</span>
									<span class="timeel timeRefYears">ans</span>
									<span class="timeel days">00</span>
									<span class="timeel timeRefDays">jours</span>
								</div>
							</v-row>

							<v-row class="d-flex justify-center">
								<div class="text-center">
									<span class="timeel hours">00</span>
									<span class="timeel timeRefHours">heures</span>
									<span class="timeel minutes">00</span>
									<span class="timeel timeRefMinutes">minutes</span>
									<span class="timeel seconds">00</span>
									<span class="timeel timeRefSeconds">seconds</span>
								</div>
							</v-row>
						</div>
					</v-col>
					<div class="text-center">
						<v-btn color="blue" dark @click="sheet = !sheet">Plus d'infos</v-btn>
					</div>
					<v-bottom-sheet v-model="sheet" inset origin="right top">
						<v-sheet class="text-center" height="350px">
							<v-btn class="mt-6" text color="red" @click="sheet = !sheet">close</v-btn>
							<v-row>
								<div class="py-3 col-12 text-center">
									<v-icon>fab fa-mailchimp</v-icon>
									{{ personne.name}} {{ personne.lastname}}
								</div>
								<div class="py-3 col-12 text-center">
									<v-icon>fas fa-home</v-icon>
									{{ personne.adresse }}
								</div>
								<div class="py-3 col-12 text-center">{{ personne.codePostal }} {{ personne.ville}}</div>
								<div class="py-6 col-12 text-center">
									<v-icon>fas fa-mobile-alt</v-icon>
									{{ personne.phone }}
								</div>
								<div class="py-3 col-12 text-center">
									<v-icon>fas fa-at</v-icon>
									{{ personne.email }}
								</div>
							</v-row>
						</v-sheet>
					</v-bottom-sheet>
				</v-row>
			</v-parallax>
		</div>
		<div id="navbar" class="xyz-in" xyz="fade down delay-20 duration-10">
			<v-app-bar
				:collapse="!collapse"
				:collapse-on-scroll="collapse"
				absolute
				color="black"
				dark
				scroll-target="#scrolling-techniques-6"
			>
				<v-checkbox v-model="collapse" color="grey" hide-details></v-checkbox>

				<v-toolbar-title class="d-flex inline-block mx-5">
					<v-breadcrumbs :items="items">
						<template v-slot:item="{ item }">
							<v-breadcrumbs-item
								:href="item.lien"
								:disabled="item.disabled"
								:id="item.id"
							>{{ item.title.toUpperCase() }}</v-breadcrumbs-item>
						</template>
					</v-breadcrumbs>
				</v-toolbar-title>
				<v-spacer></v-spacer>
				<div class="text-center">
					<v-btn color="blue" dark @click="sheet = !sheet">Me contacter</v-btn>
				</div>
			</v-app-bar>
		</div>
		<div id="competences" class="comp pb-16">
			<p class="text-center">{{chuck}}</p>
			<v-item-group multiple>
				<v-container data-aos="silde-up" data-aos-anchor="#compbot">
					<v-row class="my-16 d-flex justify-center align-center">
						<v-col
							v-for="i in nbComps"
							:key="i"
							cols="12"
							md="3"
							class="compcard-group"
							xyz="fade stagger"
						>
							<v-item>
								<v-card
									light
									class="compcard xyz-in"
									:xyz=" i%4 == 1 ? 'fade big left delay-15': i%4 == 2 ?'fade small-100 origin-right delay-10' : i%4 == 3 ? 'fade big-100 origin-left delay-10'  :i%4 == 0 ? 'fade big right delay-15' :'' "
								>
									<v-card-title class="headline justify-center">
										<CompName class="h5 text-center" :index="competences[i-1].id" />
									</v-card-title>

									<v-list-item-subtitle class="text-center pb-2">
										<span v-if="i==1">
											<v-icon large :color="color[i-1]">fab fa-html5</v-icon>
										</span>
										<span v-else-if="i==2">
											<v-icon large :color="color[i-1]">fab fa-css3</v-icon>
										</span>
										<span v-else-if="i==3">
											<v-icon large :color="color[i-1]">fab fa-bootstrap</v-icon>
										</span>
										<span v-else-if="i==4">
											<v-icon large :color="color[i-1]">fab fa-js-square</v-icon>
										</span>
										<span v-else-if="i==5">
											<v-icon large :color="color[i-1]">fab fa-php</v-icon>
										</span>
										<span v-else-if="i==6">
											<v-icon large :color="color[i-1]">fas fa-database</v-icon>
										</span>
										<span v-else-if="i==7">
											<v-icon large :color="color[i-1]">fab fa-wordpress-simple</v-icon>
										</span>
										<span v-else-if="i==8">
											<v-icon large :color="color[i-1]">fas fa-file-invoice-dollar</v-icon>
										</span>
										<span v-else-if="i==9">
											<v-icon large :color="color[i-1]">fas fa-sync-alt</v-icon>
										</span>
										<span v-else-if="i==10">
											<v-icon large :color="color[i-1]">fab fa-symfony</v-icon>
										</span>
										<span v-else-if="i==11">
											<v-icon large :color="color[i-1]">fab fa-vuejs</v-icon>
										</span>
										<span v-else-if="i==12">
											<v-icon large :color="color[i-1]">fab fa-vuejs</v-icon>
										</span>
										<span v-else>
											<v-icon large :color="color[i-1]">fab fa-500px</v-icon>
										</span>
									</v-list-item-subtitle>
									<v-card-actions>
										<v-spacer></v-spacer>

										<v-btn icon @click="show = !shows[i-1],shows[i-1] = !shows[i-1], show= ''">
											<v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
										</v-btn>
									</v-card-actions>
									<v-expand-transition style="z-index: auto;">
										<div v-show="shows[i-1]">
											<v-divider></v-divider>

											<v-card-text>
												<CompProjets :index="competences[i-1].id" />
											</v-card-text>
										</div>
									</v-expand-transition>
								</v-card>
							</v-item>
						</v-col>
					</v-row>
				</v-container>
			</v-item-group>
		</div>
		<div id="cv" class="cv pb-16 pt-16">
			<div id="compbot"></div>
			<v-card
				data-aos="flip-up"
				data-aos-duration="2000"
				data-aos-delay="50"
				data-aos-anchor="#cvbot"
				elevation="22"
				max-width="700"
				class="mx-auto"
			>
				<v-system-bar class="text-center">
					<h2 class="text-center">Ils m'ont fait confiance :</h2>
				</v-system-bar>
				<v-carousel cycle hide-delimiter-background show-arrows-on-hover height="560">
					<v-carousel-item v-for="i in nbEnts" :key="i">
						<v-sheet :color="colors[i]" height="100%" tile>
							<v-row class="fill-height" justify="center" align="center">
								<div class="col-12 text-center">
									<img class="entImg rounded" :src="getImage(entreprises[(i-1)].imageName)" />
								</div>
								<div class="display-2 col-12 text-center">
									<EntName :index="entreprises[(i-1)].id" />
								</div>
								<div class="text-center">
									<EntPostes :index="entreprises[(i-1)].id" />
								</div>
							</v-row>
						</v-sheet>
					</v-carousel-item>
				</v-carousel>
			</v-card>
			<div id="cvbot"></div>
		</div>

		<div theme="dark" id="projets" class="pt-12">
			<v-container>
				<v-row class="projets d-flex justify-center align-center">
					<div class="col-6" v-for="i in nbProjets" :key="i">
						<v-card class="projetCard">
							<v-card-title class="text-center justify-center">
								<b>
									Projet :
									<ProjetTitre class="h3" :index="projets[i-1].id" />
								</b>
							</v-card-title>
							<v-card>
								<v-card-subtitle class="text-center justify-center">
									<ProjetTechno :index="projets[i-1].id" />
								</v-card-subtitle>
							</v-card>
							<v-card-text class="PrDesText">
								<div>
									<ProjetDescrip :index="projets[i-1].id" />
								</div>
							</v-card-text>
						</v-card>
					</div>
				</v-row>
			</v-container>
		</div>
	</div>
</template>

<script>
	import ProjetTechno from "../components/ProjetTechno.vue";
	import ProjetDescrip from "../components/ProjetDescrip.vue";
	import ProjetTitre from "../components/ProjetTitre.vue";
	import EntPostes from "../components/EntPostes.vue";
	import EntName from "../components/EntName.vue";
	import CompProjets from "../components/CompProjets.vue";
	import PersonneName from "../components/PersonneName.vue";
	import PersonneTitre from "../components/PersonneTitre.vue";
	import CompName from "../components/CompName.vue";

	// @ is an alias to /src
	import axios from "axios";

	window.onload = function () {
		countUpFromTime("Jan 29, 1986 18:55:00", "countup1");
	};
	function countUpFromTime(countFrom, id) {
		//countFrom = new Date(countFrom).getTime();
		var now = new Date();
		countFrom = new Date(countFrom);
		let timeDifference = now - countFrom;

		var secondsInADay = 60 * 60 * 1000 * 24,
			secondsInAHour = 60 * 60 * 1000;

		let days = Math.floor((timeDifference / secondsInADay) * 1);
		let years = Math.floor(days / 365);
		if (years > 1) {
			days = days - years * 365;
		}
		let hours = Math.floor(
			((timeDifference % secondsInADay) / secondsInAHour) * 1
		);
		let mins = Math.floor(
			(((timeDifference % secondsInADay) % secondsInAHour) / (60 * 1000)) * 1
		);
		let secs = Math.floor(
			((((timeDifference % secondsInADay) % secondsInAHour) % (60 * 1000)) /
				1000) *
				1
		);

		var idEl = document.getElementById(id);
		idEl.getElementsByClassName("years")[0].innerHTML = years;
		idEl.getElementsByClassName("days")[0].innerHTML = days;
		idEl.getElementsByClassName("hours")[0].innerHTML = hours;
		idEl.getElementsByClassName("minutes")[0].innerHTML = mins;
		idEl.getElementsByClassName("seconds")[0].innerHTML = secs;

		clearTimeout(countUpFromTime.interval);
		countUpFromTime.interval = setTimeout(function () {
			countUpFromTime(countFrom, id);
		}, 1000);
	}

	export default {
		name: "Home",
		components: {
			PersonneName,
			PersonneTitre,
			CompName,
			CompProjets,
			EntName,
			EntPostes,
			ProjetTitre,
			ProjetDescrip,
			ProjetTechno,
		},
		data() {
			return {
				sheet: false,
				collapse: true,
				show: false,
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
				competences: [],
				nbComps: "",
				personne: [],
				color: [
					"#F06026",
					"#0274B8",
					"#5C3D83",
					"#D1B631",
					"#5F79BB",
					"#F8BD02",
					"#15AABF",
					"#608D23",
					"#000000",
					"#000000",
					"#006220",
					"#1268C2",
				],
				colors: [
					"green",
					"secondary",
					"yellow darken-4",
					"red lighten-2",
					"orange darken-1",
					"teal darken-3",
					"pink",
				],
				entreprises: [],
				nbEnts: "",
				nbProjets: "",
				projets: [],
				items: [
					{ title: "Go Top", lien: "#titre", id: "idTitre", disabled: false },
					{
						title: "Competences",
						lien: "#competences",
						id: "idComp",
						disabled: false,
					},
					{ title: "Cv", lien: "#cv", id: "idCV", disabled: false },
					{ title: "Projets", lien: "#projets", id: "idProjet", disabled: false },
				],
				card1: 0,
				card2: 0,
				card3: 0,
				card4: 0,
				card5: 0,
				card6: 0,
				card7: 0,
				chuck: "",
			};
		},
		mounted() {
			axios
				.get("http://127.0.0.1:8000/api/personnes/1")
				.then((response) => (this.personne = response.data));
			axios
				.get("http://127.0.0.1:8000/api/competences")
				.then(
					(response) => (
						(this.competences = response.data["hydra:member"]),
						(this.nbComps = this.competences.length)
					)
				);
			axios
				.get("http://127.0.0.1:8000/api/entreprises")
				.then(
					(response) => (
						(this.entreprises = response.data["hydra:member"]),
						(this.nbEnts = this.entreprises.length)
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
			axios
				.get("https://api.chucknorris.io/jokes/random")
				.then((response) => (this.chuck = response.data.value));
		},
		methods: {
			getImage(image) {
				let chemin = "./images/entreprises/" + image;
				return chemin;
			},
			onMutate(card) {
				this[card]++;
			},
		},
	};
</script>
<style scoped>
	@font-face {
		font-family: "Firacode";
		src: url("../assets/police/woff/FiraCode-Regular.woff"),
			/* pour Firefox, Chrome*/
				url("../assets/police/variable_ttf/FiraCode-VF.ttf"); /* pour Safari et Opéra*/
		font-weight: normal;
	}
	* {
		font-family: "Firacode";
	}

	.v-parallax__image-container {
		background-position: center bottom;
		background-size: cover;
	}
	.countup {
		text-align: center;
		margin-bottom: 20px;
	}
	.countup .timeel {
		display: inline-block;
		padding: 10px;
		background: #151515;
		margin: 0;
		color: white;
		min-width: 2.6rem;
		margin-left: 13px;
		border-radius: 10px 0 0 10px;
	}
	.countup span[class*="timeRef"] {
		border-radius: 0 10px 10px 0;
		margin-left: 0;
		background: #e8c152;
		color: black;
	}
	.comp {
		background: #ddd1e7 !important;
		box-shadow: inset -5px -5px 10px #ffffff70, inset 5px 5px 25px #00000080 !important;
	}
	#idComp a,
	#idCV a,
	#idProjet a,
	#idTitre a {
		text-decoration: none;
		color: black;
	}
	.compcard {
		background: #ddd1e7 !important;
		border-radius: 25px !important;
		box-shadow: -3px -3px 5px #ffffff70, 3px 3px 15px #00000080 !important;
	}

	.compcard:hover {
		box-shadow: inset -3px -3px 5px #ffffff70, inset 3px 3px 15px #00000080 !important;
	}
	#projets {
		background-image: url("../assets/bg1.jpg");
		background-attachment: fixed;
		background-repeat: no-repeat;
		background-size: cover;
		background-position: top;
	}
	.projetCard {
		background: rgba(10, 170, 85, 0.6) !important;
	}
	.PrDesText {
		color: #000000 !important;
		background: rgba(50, 148, 254, 0.6) !important;
	}
	#navbar {
		position: sticky;
		top: 0;
		z-index: 100;
	}
	.entImg {
		max-height: 150px;
	}
	#cv {
		background: linear-gradient(#0fe172, #002410);
	}
	.subheading,
	.heading {
		text-shadow: 4px 4px 16px #000000;
	}
</style>