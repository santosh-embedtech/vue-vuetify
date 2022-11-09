<template>
  <div>home</div>
</template>

<script>
import AuthLayout from '@/layouts/Auth.vue'
  export default {
    name: 'Home', created() {
        this.$emit('update:layout', AuthLayout)
    }
  }
</script>
