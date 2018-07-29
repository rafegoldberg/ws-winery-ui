<template>
  <form class="ContactForm" action="/submit.php">

    <div class="ContactForm--group">
      <input name="name"
        class="ContactForm--control"
        placeholder="First Lastname"
        type="text"
        />
      <input name="email"
        class="ContactForm--control"
        placeholder="you@email.com"
        type="text"
        />
      <input name="subject"
        class="ContactForm--control"
        placeholder="Regarding..."
        type="text"
        />
    </div>

    <div class="ContactForm--group">
      <textarea name="message"
        class="ContactForm--control"
        placeholder="Your message, briefly."
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
    padding: .16em .3em;
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
