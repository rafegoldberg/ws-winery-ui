export default {
  methods:{
    wsRewriteSRC: src=> src.replace(/.*\/wp-content\//gim,'https://www.williamsselyem.com/wp-content/')
  }
}