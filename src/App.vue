<template>
  <div>
    <component :is="layout">
      <router-view :layout.sync="layout" />
    </component>
  </div>
</template>


<script>
export default {
  name: "App",

  data: () => ({
    layout: "div",
  }),
};
</script>
