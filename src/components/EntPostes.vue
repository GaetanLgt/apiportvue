<template>
  <div class="entPostes">
      <div v-for=" i in nbposte" :key="i">
        <PosteName class="display-1" :index="getIdPoste(postes[i-1])" />
        
          <PosteDate :index="getIdPoste(postes[i-1])" />
        
        <!--<PosteDescrip :index="getIdPoste(postes[i-1])" />-->
      </div>
  </div>
</template>

<script>
//import PosteDescrip from './PosteDescrip.vue'
import PosteDate from './PosteDate.vue'
import PosteName from './PosteName.vue'
// @ is an alias to /src
import axios from 'axios'



export default {
  name: 'EntPostes',
  components: {
     //PosteDescrip,
     PosteName,
     PosteDate,
  },
  props:{

      index : Number,

  }
  ,
  data() {
    return {
      postes: [],
      nbposte : ""
    }
  },
  created() {
      axios
        .get('http://127.0.0.1:8000/api/entreprises/'+this.index)
        .then( response => ((this.postes= response.data.Postes), (this.nbposte = this.postes.length )))
  },
  methods: {
      getIdPoste(Poste) {
      let id = Poste.replace("/api/postes/", "")
      return (id)
    },
  }
}
</script>