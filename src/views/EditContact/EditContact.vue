<template>
  <div class="edit">
    <form @submit.prevent="updateContact">
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
      <button type="submit" >Update</button>
    </form>
  </div>
</template>

<script>


export default {
  computed: {
      contact() {
          return this.$store.getters.editContact;
      }
  },
  methods: {
      getContact() {
          this.$store.dispatch('getContact', this.$route.params.id)
      },
      updateContact() {
          this.$store.dispatch('updateContact')
      }
  },
  mounted() {
      this.getContact();
  },
}
</script>

<style lang="scss" scoped>
@import './EditContact.style.scss'
</style>