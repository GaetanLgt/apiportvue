<template>
  <span class="compName">
      {{ comp.name }}
  </span>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'

export default {
  name: 'CompName',
  components: {
    
  },
  props:{

      index : Number,

  },
  data() {
    return {
      comp: [],
    }
  },
  created() {
      axios
        .get('http://127.0.0.1:8000/api/competences/'+this.index)
        .then( response => (this.comp = response.data))
  }
}
</script>