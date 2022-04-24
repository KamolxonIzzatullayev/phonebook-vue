<template>
  <div class="home">
    <h1>Contacts</h1>

    <table border="1" cellspacing='0'>
      <tr>
        <th>#</th>
        <th>First name</th>
        <th>Last name</th>
        <th>E-mail</th>
        <th>Phone number</th>
        <th>Actions</th>
      </tr>
      <tr v-for="(contact, idx) in fetchAllContacts" :key="contact.id">
        <td>{{ idx + 1 }}</td>
        <td>{{ contact.firstName }}</td>
        <td>{{ contact.lastName }}</td>
        <td>{{ contact.email }}</td>
        <td>{{ contact.number }}</td>
        <td>
          <router-link class="btn edit" :to='{path: `/edit-contact/${contact.id}`}'>Edit</router-link>
          <button class="btn delete" @click="deleteContact(contact.id)">Delete</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  computed: {
    fetchAllContacts() {
      return this.$store.state.allContacts;
    }
  },

  methods: {
    deleteContact(id) {
      this.$store.dispatch('deleteContact', id)
    },
    fetchContacts() {
      this.$store.dispatch('fetchContacts');
    }
    
  },
  mounted() {
    this.fetchContacts();
  }

}
</script>

<style lang="scss" scoped>
@import './HomeView.style.scss'
</style>