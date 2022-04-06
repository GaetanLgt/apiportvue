<template>
  <span class="projetTechno">
    <span v-for="i in nbTechno" :key="i">
      <v-chip outlined large pill :color="color[`${getIdComp(comps[i-1])-1}`]" class="mx-2 my-2">
        <div class="title">
          <CompName :index="getIdComp(comps[i-1])" />
          <span v-if="getIdComp(comps[i-1])==1">
            <v-icon :color="color[`${getIdComp(comps[i-1])-1}`]">fab fa-html5</v-icon>
          </span>
          <span v-else-if="getIdComp(comps[i-1])==2">
            <v-icon :color="color[`${getIdComp(comps[i-1])-1}`]">fab fa-css3</v-icon>
          </span>
          <span v-else-if="getIdComp(comps[i-1])==3">
            <v-icon :color="color[`${getIdComp(comps[i-1])-1}`]">fab fa-bootstrap</v-icon>
          </span>
          <span v-else-if="getIdComp(comps[i-1])==4">
            <v-icon :color="color[`${getIdComp(comps[i-1])-1}`]">fab fa-js-square</v-icon>
          </span>
          <span v-else-if="getIdComp(comps[i-1])==5">
            <v-icon :color="color[`${getIdComp(comps[i-1])-1}`]">fab fa-php</v-icon>
          </span>
          <span v-else-if="getIdComp(comps[i-1])==6">
            <v-icon :color="color[`${getIdComp(comps[i-1])-1}`]">fas fa-database</v-icon>
          </span>
          <span v-else-if="getIdComp(comps[i-1])==7">
            <v-icon :color="color[`${getIdComp(comps[i-1])-1}`]">fab fa-wordpress-simple</v-icon>
          </span>
          <span v-else-if="getIdComp(comps[i-1])==8">
            <v-icon :color="color[`${getIdComp(comps[i-1])-1}`]">fas fa-file-invoice-dollar</v-icon>
          </span>
          <span v-else-if="getIdComp(comps[i-1])==9">
            <v-icon :color="color[`${getIdComp(comps[i-1])-1}`]">fas fa-sync-alt</v-icon>
          </span>
          <span v-else-if="getIdComp(comps[i-1])==10">
            <v-icon :color="color[`${getIdComp(comps[i-1])-1}`]">fab fa-symfony</v-icon>
          </span>
          <span v-else-if="getIdComp(comps[i-1])==11">
            <v-icon :color="color[`${getIdComp(comps[i-1])-1}`]">fab fa-vuejs</v-icon>
          </span>
          <span v-else-if="getIdComp(comps[i-1])==12">
            <v-icon :color="color[`${getIdComp(comps[i-1])-1}`]">fab fa-vuejs</v-icon>
          </span>
          <span v-else>
            <v-icon :color="color[`${getIdComp(comps[i-1])-1}`]">fab fa-500px</v-icon>
          </span>
        </div>
      </v-chip>
    </span>
  </span>
</template>

<script>
import CompName from "./CompName.vue";
// @ is an alias to /src
import axios from "axios";

export default {
  name: "ProjetTechno",
  components: {
    CompName,
  },
  props: {
    index: Number,
  },
  data() {
    return {
      comps: [],
      nbTechno: "",
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
    };
  },
  created() {
    axios
      .get("http://127.0.0.1:8000/api/projets/" + this.index)
      .then(
        (response) => (
          (this.comps = response.data.Technos),
          (this.nbTechno = this.comps.length)
        )
      );
  },
  methods: {
    getIdComp(Comp) {
      let id = Comp.replace("/api/competences/", "");
      return id;
    },
  },
};
</script>