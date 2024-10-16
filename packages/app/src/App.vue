<template>
  <div>
    <h1>{{ message }}</h1>
    <button @click="sendRequest">Send Request</button>
    <p v-if="response">Response: {{ response }}</p>
    <p>URL: {{ url }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello World!',
      response: '',
      url: import.meta.env.VITE_APP_URL || 'No URL provided'
    }
  },
  methods: {
    async sendRequest() {
      try {
        const res = await fetch('http://localhost:3010/hello');
        const data = await res.text();
        this.response = data;
      } catch (error) {
        console.error('Error:', error);
        this.response = 'Error occurred while fetching data';
      }
    }
  }
}
</script>
