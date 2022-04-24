import router from '../router'
import contactsColRef from '@/firebase'
import { addDoc, deleteDoc, setDoc, doc, getDocs, getDoc } from 'firebase/firestore'

export default {
    async fetchContacts(context) {
      let contactsSnapshot = await getDocs(contactsColRef);
      let contacts = [];
      contactsSnapshot.forEach((contact) => {
        let contactData = contact.data();
        contactData.id = contact.id;
        contacts.push(contactData);
      })
      context.state.allContacts = contacts;
    },

    async deleteContact(context, id) {
      console.log(id);
      let contactRef = doc(contactsColRef, id);
      await deleteDoc(contactRef);
      alert('Contact deleted successfully!')
      router.go('/')
    },

    async getContact(context, id) {
      let contactRef = doc(contactsColRef, id)
      context.state.docRef = contactRef;
      let contact = await getDoc(context.getters.docRef);
      let contactData = contact.data();
      context.state.editContact = contactData
    },

    async updateContact(context) {
      await setDoc(context.getters.docRef, context.getters.editContact);
      alert('The contact has been updated successfully!');
      router.push('/');
    },

    async saveContact(context, contact) {
      await addDoc(contactsColRef, contact);
      alert('Succesfully added!')
      router.push('/')
    }
}