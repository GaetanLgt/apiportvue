<template>
  <div class="personneAdresse">
      <span class="adresseLigne">
      {{ personne.adresseLigne }}
      </span>
      <br/>
       <span class="adresseCpVille">
      {{ personne.adresseCP }} {{ personne.adresseVille }}
      </span>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'

export default {
  name: 'PersonneAdresse',
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