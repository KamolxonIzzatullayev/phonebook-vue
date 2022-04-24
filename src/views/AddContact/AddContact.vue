<template>
  <div class="add">
    <form @submit.prevent="saveContact">
      <div>
        <label for="first-name">First Name: </label>
        <input type="text" required id="first-name" v-model.trim="contact.firstName">
      </div>
      <div>
        <label for="last-name">Last Name: </label>
        <input type="text" required id="last-name" v-model.trim="contact.lastName">
      </div>
      <div>
        <label for="email">E-mail: </label>
        <input type="email" required id="email" v-model.trim="contact.email">
      </div>
      <div>
        <label for="number">Phone number: </label>
        <input type="number" required id="number" v-model.trim="contact.number">
      </div>
      <button type="submit">Add</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contact: {},
    }
  },
  methods: {
    saveContact() {
      this.$store.dispatch('saveContact', this.contact);
    }
  },
}
</script>

<style lang="scss" scoped>
@import './AddContact.style.scss'
</style>