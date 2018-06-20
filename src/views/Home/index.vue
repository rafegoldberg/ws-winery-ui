<template>
<UiPanel class="home">

  <UiBoxImg :style="{minHeight:'100vh'}" :img="page.img" alt="Welcome">
    
    <header class="home--header" :style="{margin:'auto',marginLeft:0}">
      <UiHeading :level="1" :style="{maxWidth:'6em'}">
        <b>Schedule a private visit.</b>
      </UiHeading>
      <p>Visits are reserved for List members and are by appointment only.</p>
      <UiButton>Reserve</UiButton>
    </header>

  </UiBoxImg>

</UiPanel>
<!-- <img src="./mock/indelible.png" alt="Indelible">
<img src="./mock/visit.png" alt="Schedule a Private Visit"> -->
</template>

<script>
import UiButton from '@/components/UI/Button'
import UiHeading from '@/components/UI/Heading'
import UiBoxImg from '@/components/UI/Box/Image'
import UiPanel from '@/components/UI/Panel'

import mock_img from './mock/visit.png'

let 
page = {
  img: mock_img
}

export default {
  components: { UiButton, UiHeading, UiBoxImg, UiPanel },
  data: ()=>({ page })
}
</script>

<style lang="scss" scoped>
.home {
  &--header {
    border-left: .5rem solid #FFF;
    padding: 3em 0 3em 3em;
  }
  .UiHeading {
    line-height: .9;
  }
}
</style>

