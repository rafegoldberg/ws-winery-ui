<template>
  <form class="ContactForm" @submit.prevent="submit" @keydown.enter.meta="submit">

    <div v-if="submission" :class="{
        SubmitStatus: true,
        SubmitStatus_error: submission.error,
        SubmitStatus_success: !submission.error
        }">
      <UiHeading :level="3" :scale="2" :class="{
          UiHeading_sans: submission.error,
          UiHeading_tighten: submission.error,
          UiHeading_center: !submission.error,
          }">
        {{submission.error ? 'Uhoh.' : `Thanks ${form.name.split(' ')[0]}!` }}
      </UiHeading>
      <p v-if="submission.message" v-html="submission.message" class="serif" :style="{
        marginTop: 0,
        marginBottom: submission.error ? '2.5rem' : 0,
        lineHeight: 1.6,
        fontStyle: 'italic',
        textAlign: !submission.error ? 'center' : ''
        }"/>
    </div>

    <template v-if="!submission || submission.error">
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
          @keydown.delete="(form.subject = false)"
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
          style="min-height: 100%"
          class="ContactForm--control"
          placeholder="Your message, briefly."
          required
          v-model="form.text"
          spellcheck="false"
          />
        <span style="margin-left: auto">
          <UiButton>Send</UiButton>
        </span>
      </div>
    </template>

  </form>
</template>

<script>
import WP from '@/VuePress/mix/API'
import UiHeading from '@/components/UI/Heading'
import UiButton from '@/components/UI/Button'
export default {
  name: "ContactForm",
  mixins:[ WP ],
  components:{
    UiButton,
    UiHeading,
  },
  data:()=>({
    form: {
      subject: false,
    },
    submission: false,
  }),
  methods:{
    async submit(){
      if( !this.API ) return
      else this.$el.classList.add('ContactForm_loading')

      let
      rsp,
      err = false,
      xhr = await this.API
        .namespace('ws/v1')
        .contact()
        .param( this.form )
        .get()
        .catch(e=>(err = e))
        // .then()
        
      if( err ){
        rsp = err
        rsp.error = true
      }
      else rsp = xhr

      this.submission = rsp;
      this.$el.classList.remove('ContactForm_loading')
      return rsp
    }
  },
}
</script>

<style lang="scss" scoped>
@import "~@/styles/theme/breaks";
@import "~@/styles/theme/colors";

.ContactForm {
  & {
    display: flex;
    flex-flow: wrap row;
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

    @include Break( min-width Breaks(3) ){
      flex: 1 0 auto;
      &:last-child {
        flex: 1 0 50%;
      }
    }
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
  & {
    // load case
    background-repeat: no-repeat;
    background-position: center;
    background-size: 2.3em 2.3em;
    &, > * { transition: all .2s ease }
    &_loading {
      position: relative;
      margin-top: -3rem;
      background-image: url("~@/assets/preloader.gif");
      background-color: Color(light);
      opacity: .5;
      & > * { opacity: 0 !important }
    }
  }
}

.SubmitStatus {
  .ActionBox:first-child + .ContactForm:last-child > & {
    flex: 0 0 100%;
    min-width: 100%;
    position: relative;
    z-index: 1;
    margin-top: -3rem;
    background: Color(light);
  }
  /deep/ &_error .UiHeading {
    color: Color(brand);
    font-weight: 900;
  }
  &_success .UiHeading {
    color: Color(theme);
    font-weight: 100;
  }
  /deep/ a {
    font-weight: bold;
  }
}
</style>
