<template>
  <form @submit="onSubmit" class="add-form">
    <div class="form-control">
      <label>Task</label>
      <input type="text" v-model="comment" name="comment" placeholder="Add Record"/>
    </div>
    <div class="form-control">
      <label>Event Time</label>
      <input type="text" v-model="event_time" name="event_time" placeholder="Add Day & Time"/>
    </div>
    <div class="form-control">
      <label>Amount</label>
      <input type="text" v-model="amount" name="amount" placeholder="Add Amount"/>
    </div>
    <input type="submit" value="Save Task" class="btn btn-block"/>
  </form>
</template>

<script>
export default {
  name: "AddRecord",
  data() {
    return {
      comment: '',
      event_time: '',
      amount: ''
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault()

      if (!this.comment) {
        alert('Please add a task')
        return
      }

      const newRecord = {
        comment: this.comment,
        event_time: this.event_time,
        amount: this.amount
      }

      this.$emit('add-record', newRecord)

      this.comment = ''
      this.event_time = ''
      this.amount = ''
    }
  }
}
</script>

<style scoped>
.add-form {
  margin-bottom: 40px;
}

.form-control {
  margin: 20px 0;
}

.form-control label {
  display: block;
}

.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}

.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.form-control-check label {
  flex: 1;
}

.form-control-check input {
  flex: 2;
  height: 20px;
}

</style>
