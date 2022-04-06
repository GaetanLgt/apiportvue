<template>
  <div class="personneTitre">
      {{ personne.titre }}
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'

export default {
  name: 'PersonneTitre',
  components: {
  
  },
  props:{

      index : Number,

  },
  data() {
    return {
      personne : [],
    }
  },
  created() {
      axios
        .get('http://127.0.0.1:8000/api/personnes/'+this.index)
        .then( response => (this.personne = response.data))
  }
}
</script>