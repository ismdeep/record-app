<template>
  <div :key="record.id" v-for="record in records">
    <Record @delete-record="$emit('delete-record', record.ID)" :record="record" />
  </div>
</template>

<script>
import Record from "./Record";

export default {
  name: "Tasks",
  props: {
    records: Array
  },
  components: {
    Record
  },
  emits: ['delete-record'],
}
</script>

<style scoped>

</style>
