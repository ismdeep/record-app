<template>
  <div :class="[record.reminder ? 'reminder' : '', 'record']">
    <h3>
      {{ record.Amount }}
      <i v-on:click="$emit('delete-record', record.ID)" class="fas fa-times"></i>
    </h3>

    <p>{{ record.Comment }}</p>
    <p>{{ record.EventTime }}</p>
  </div>
</template>

<script>
export default {
  name: "Record",
  props: {
    record: Object
  },
  methods: {}
}
</script>

<style scoped>
.fas {
  color: red;
}

.record {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.record.reminder {
  border-left: 5px solid green;
}

.record h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
