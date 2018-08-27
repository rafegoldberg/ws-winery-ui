<template>
  <form class="ContactForm" action="/submit.php">

    <div class="ContactForm--group">
      <input name="name"
        class="ContactForm--control"
        placeholder="First Lastname"
        type="text"
        required
        v-model="form.name"
        />
      <input name="email"
        class="ContactForm--control"
        placeholder="you@email.com"
        type="text"
        required
        v-model="form.email"
        />
      <select name="subject"
        class="ContactForm--control"
        placeholder="Regarding..."
        type="text"
        required
        v-model="form.subject"
        >
        <option :value="false" disabled selected>Regarding...</option>
        <option value="General Question">General Question</option>
        <option value="Joining the List">Joining the List</option>
        <option value="Booking + Visits">Visiting</option>
        <option value="Member Allocation">Allocation</option>
      </select>
    </div>

    <div class="ContactForm--group">
      <textarea name="message"
        class="ContactForm--control"
        placeholder="Your message, briefly."
        required
        v-model="form.text"
        />
      <span>
        <UiButton>Send</UiButton>
      </span>
    </div>

  </form>
</template>

<script>
import UiButton from '@/components/UI/Button'
export default {
  name: "ContactForm",
  components:{
    UiButton
  },
  data:()=>({
    form: {
      subject: false,
    },
  })
}
</script>

<style lang="scss" scoped>
@import "~@/styles/theme/breaks";
@import "~@/styles/theme/colors";

.ContactForm {
  & {
    display: flex;
    flex-flow: nowrap row;
    align-items: stretch;
  }

  input {}
  select {
    background-image: url(https://static.thenounproject.com/png/730205-200.png);
    background-repeat: no-repeat;
    background-position: center right .6rem;
    background-size: .6em;
  }
  textarea {
    width: 100%;
    height: 100%;
    resize: none;
    line-height: 1.5 !important;
  }

  &--control {
    appearance: none;
    all: unset;
    width: 100%;
    box-sizing: border-box;
    padding: .16rem .3rem;
    border: 1px solid Color(silver);
    border-radius: 1px;
    &:focus {
      border-color: Color(theme);
    }
  }
  &--group {
    flex: 1;
    display: flex;
    flex-flow: nowrap column;
    justify-content: space-between;
    align-items: flex-start;
    > * {
      display: inline-block;
    }
    & + &   { margin-left: 1rem }
    > * + * { margin-top:  1rem }
  }

  @include Break( max-width Breaks(3) ){
    &, &--group {
      display: contents;
    }
    &--group {
      & + & >:first-child { margin-top: 1rem }
      & + & >:last-child  { margin-top:.5rem }
    }
  }
}
</style>
