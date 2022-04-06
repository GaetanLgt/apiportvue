<template>
  <div class="posteDescrip">
      {{ poste.description }}
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'

export default {
  name: 'PosteDescrip',
  components: {
    
  },
  props:{

      index : Number,

  },
  data() {
    return {
      poste: [],
    }
  },
  created() {
      axios
        .get('http://127.0.0.1:8000/api/postes/'+this.index)
        .then( response => (this.poste = response.data))
  }
}
</script>