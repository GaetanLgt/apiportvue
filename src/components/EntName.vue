<template>
  <span class="entName">
    {{ entreprise.name }}
  </span>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'

export default {
  name: 'EntName',
  components: {
    
  },
  props:{

      index : Number,

  },
  data() {
    return {
      entreprise: [],
    }
  },
  created() {
      axios
        .get('http://127.0.0.1:8000/api/entreprises/'+this.index)
        .then( response => (this.entreprise = response.data))
  }
}
</script>