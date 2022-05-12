<template>
<div class="background">
  <div class="row">
    <div class="col">
        <div id="table">
        <table class="table table-striped">
            <thead class="thead-dark">
                <tr>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Destination</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for= "trip in Trips" :key= "trip._id">
                    <td>{{ trip.name }}</td>
                    <td>{{ trip.date }}</td>
                    <td>{{ trip.destination }}</td>
                    <td>
                        <router-link :to= "{name: 'edit', params: { id: trip._id }}" class = "btn btn-success">Edit</router-link>
                        <button @click.prevent = "deleteTrip(trip._id)" class = "btn btn-danger"> Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  export default {
    data() {
      return {
        Trips: []      
        
        }
    },
    created() {
        let apiURL = "http://localhost:4000/api";
        axios.get(apiURL).then(res => {
            this.Trips = res.data;
        }).catch(error => {
            console.log(error)
        });
    },
    methods: {
        deleteTrip(id){
            let apiURL = `http://localhost:4000/api/delete-trip/${id}`;
            let indexOfArrayItem = this.Trips.findIndex(i => i._id === id);

            if (window.confirm("Do you really want to delete?")) {
                axios.delete(apiURL).then(() => {
                    this.Trips.splice(indexOfArrayItem, 1);
                }).catch(error => {
                    console.log(error)
                });
            }
        }
    }
  }
</script>