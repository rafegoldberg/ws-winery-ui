<template>
<section class="iconList">
  
  <div class="iconList--item">
    <UiIcon name="bottles" width="3rem" height="3rem"/>
    <p>
      <span class="iconList--item--label">All Our Wines</span>
      <br>
      <small>Visit our wine library to find a specific bottle or peruse our full collection.</small>
    </p>
    <UiButton>Library</UiButton>
  </div>
  <div class="iconList--item">
    <UiIcon name="barrels" width="3rem" height="3rem"/>
    <p>
      <span class="iconList--item--label">How To Purchase</span>
      <br>
      <small>Our wines are available twice a year for purchase.</small>
    </p>
    <UiButton>Purchasing</UiButton>
  </div>
  <div class="iconList--item">
    <UiIcon name="glasses" width="3rem" height="3rem"/>
    <p>
      <span class="iconList--item--label">Visit The Winery</span>
      <br>
      <small>Arrange a private tour and tasting tailored specifically for you.</small>
    </p>
    <UiButton>Visiting</UiButton>
  </div>

</section>
</template>

<script>
import UiIcon from "@/components/UI/Icon"
import UiButton from "@/components/UI/Button"

export default {
  name: "StaticIconList",
  components:{ UiIcon, UiButton }
}
</script>
