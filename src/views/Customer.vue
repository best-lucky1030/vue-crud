<template>
  <div class="columns">
    <!-- <div class="column is-three-fifth"> -->
    <div class="column tile is-8">
      <b-table v-if="data.length!=0" class="table">
        <thead>
          <tr>
            <th v-for="(column, index) in columns" :key="index">{{column}}</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index_row) in data" :key="index_row" v-bind:class="{editing: editId === row.id}">
            <td v-for="(column, index) in columns" :key="index">
              {{row[column]}}
            </td>
            <td>
              <div class="buttons">
                <b-button size="is-small" type="is-primary" expanded @click="editCustomer(row)">Edit</b-button>
                <b-button size="is-small" type="is-danger" expanded @click="deleteCustomer(row.id)">Delete</b-button>
              </div>
            </td>
          </tr>
        </tbody>
      </b-table>

      <div v-else class="notification is-danger">
        Warning !<strong>No data to show</strong>
      </div>
    </div>

    <div class="column">
      <a 
        href="#" v-show="showAdd == false" @click="addCustomer()" 
        class="button is-small is-danger" style="float: right; margin-top: -20px;"
      >X</a>
      <CustomerInputForm :editId="editId"></CustomerInputForm>
    </div>
  </div>
</template>

<script>

import CustomerInputForm from '../components/CustomerInputForm.vue';

export default {
  name: 'Customer',
  components: {
    CustomerInputForm
  },
  data() {
    return {
      showAdd: true,
      editId: '',
    }
  },
  computed: {
    data() {
      return this.$store.state.customers;
    },
    columns() {
      return this.$store.state.customers.length > 0 ?
            Object.keys(this.$store.state.customers[0]) : []
    }
  },
  methods: {
    editCustomer(customer) {
      this.editId = customer.id;
      this.showAdd = false;
    },
    addCustomer() {
      this.editId = '';
      this.showAdd = true;
    },
    deleteCustomer(customer){
      this.$swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.value) {
            this.$store.dispatch('removeCustomer',customer).then((res)=>{
              if(res) this.$swal(
                'Deleted!',
                'Record has been deleted.',
                'Success'
              )
              else this.$swal(
                'Fail!',
                'Fail to delete record.',
                'error'
              )
            });
          }
        })
    }
  }
}
</script>

<style>
.editing {
  background-color: #fff8db;
}
</style>