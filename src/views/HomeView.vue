<template>
  <div>
    <kredi-auth 
    :redirectLink="redirectLink" 
    :apikey="apikey"
    :token="token"
    :bvntoken="bvntoken">
  </kredi-auth>
</div>
</template>

<script setup>
import { ref } from "vue";
const redirectLink = '/';
const token = ref('456|M3hr6N9KWGbeYL8vEJ89dJgQ7YTYUdKI1IG7w6ul');
const apikey = ref('6c0334ae-8865-4a5d-8461-84db11ce7e74');
const bvntoken = ref('AUvI0c0G6mUE8WaFo6yUOFPq016hZHcrenLhNbySzb3UAOziF-LrFD5FlNRBhC5uY3p0Zw~7y_fKcJKEWA5KaXg-b942-19c2aede&reK73I9pnjyXDBiM6R');
</script>

<style>

</style>
