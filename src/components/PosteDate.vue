<template>
  <div class="posteDate">
    <p>Du : {{moment(yourDateString1 ).format('DD-MM-YYYY')}} au {{moment(yourDateString2 ).format('DD-MM-YYYY')}}.</p>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'

export default {
  name: 'PosteName',
  components: {
    
  },
  props:{

      index : Number,

  },
  data() {
    return {
      poste: [],
      yourDateString1: "",
      yourDateString2: ""  
    }
  },
  created() {
      axios
        .get('http://127.0.0.1:8000/api/postes/'+this.index)
        .then( response => ((this.poste = response.data), (this.yourDateString1 = this.poste.datedebut),(this.yourDateString2 = this.poste.datefin) ))
      
  }
}
</script>