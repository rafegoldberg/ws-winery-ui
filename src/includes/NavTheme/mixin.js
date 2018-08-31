export default {
  computed:{
    $app(){
      return this.$root.$children[0]
    }
  },
  methods:{
    navTheme_update(theme = {}){
      let
      under = this.navTheme_filter(this.$app.site.AppNav || {}),
      over  = this.navTheme_filter(theme),
      merge = Object.assign({brand:'logoTheme_dualtone',menu:'menuTheme_gold'}, under, over),
      cList = Object.values(merge).filter(v=>v)
      
      // this.$log({under, over, merge, cList})
      this.$root.navTheme = cList;

      return cList
    },
    navTheme_filter: (obj)=> Object.keys(obj).reduce((all,key)=>{
      let
      val = obj[key]
      if( key && val )
        all[key] = val
      return all;
    }, {})
  }
}