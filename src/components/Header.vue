<template>
  <header>
    <h1>{{title}}</h1>
    <Button
        v-on:click="$emit('toggle-show-add-task')"
        :text="showAddRecord ? 'Close' : 'Add'"
        :color="showAddRecord ? 'red' : 'green'" />
  </header>
</template>

<script>
import Button from "./Button";

export default {
  name: "Header",
  props: {
    title: {
      type: String
    },
    showAddRecord: Boolean
  },
  components: {
    Button
  }
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>
