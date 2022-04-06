<template>
  <div class="compProjets">
    <div v-for="i in nbProjets" :key="i">
      <ProjetTitre :index="getIdProjet(projets[i-1])" />
    </div>
  </div>
</template>

<script>
import ProjetTitre from "./ProjetTitre.vue";
// @ is an alias to /src
import axios from "axios";

export default {
  name: "CompProjets",
  components: {
    ProjetTitre,
  },
  props: {
    index: Number,
  },
  data() {
    return {
      projets: [],
      nbProjets: "",
    };
  },
  created() {
    axios
      .get("http://127.0.0.1:8000/api/competences/" + this.index)
      .then(
        (response) => (
          (this.projets = response.data.projets),
          (this.nbProjets = this.projets.length)
        )
      );
  },
  methods: {
    getIdProjet(projet) {
      let id = projet.replace("/api/projets/", "");
      return id;
    },
  },
};
</script>