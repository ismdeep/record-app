<template>
  <div class="container">
    <Header
        @toggle-show-add-task="toggleShowAddRecord"
        :showAddRecord="showAddRecord"
        title="Records Tracker"/>
    <div v-show="showAddRecord">
      <AddRecord
          @add-record="addRecord"/>
    </div>
    <Records
        @delete-record="deleteRecord"
        :records="records"/>
  </div>
</template>

<script>
import Header from "./components/Header";
import Records from "./components/Records";
import AddRecord from "./components/AddRecord";
import axios from "axios";

export default {
  name: 'App',
  components: {
    AddRecord,
    Header,
    Records,
  },
  methods: {
    deleteRecord(id) {
      if (confirm('Are you sure?')) {
        console.log('record.id', id);
        let token = localStorage.getItem('token')
        axios.delete('/api/v1/records/' + id, {
          headers: {
            'Authorization': 'Bearer ' + token
          },
          withCredentials: true,
          mode: 'cors',
        })
      }
    },
    addRecord(record) {
      let token = localStorage.getItem('token')
      console.log(record);
      axios.post('/api/v1/records', {
        'event_time': record.event_time,
        'comment': record.comment,
        'amount': 5,
        'tags': '{3}'
      }, {
        headers: {
          'Authorization': 'Bearer ' + token
        },
        withCredentials: true,
        mode: 'cors',
      })
    },
    toggleShowAddRecord() {
      this.showAddRecord = !this.showAddRecord
    }
  },
  data() {
    return {
      records: [],
      showAddRecord: false,
    }
  },
  async created() {
    let token = localStorage.getItem('token')
    axios.get('/api/v1/records', {
      headers: {
        'Authorization': 'Bearer ' + token
      },
      withCredentials: true,
      mode: 'cors',
    }).then(response => (this.records = response.data.data))
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Poppins', sans-serif;
}

.container {
  max-width: 500px;
  margin: auto;
  overflow: auto;
  min-height: 550px;
  border: 1px solid steelblue;
  padding: 10px;
  border-radius: 5px;
}

.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}

.btn:focus {
  outline: none;
}

.btn:active {
  transform: scale(0.98);
}

.btn-block {
  display: block;
  width: 100%;
}

</style>
