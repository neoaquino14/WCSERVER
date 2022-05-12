<template>
<div class="background">
  <div class="justify-content-center">
    <div class="col md-6">
      <div id="form">
        <br/>
      <h2 class="text-center">Update Booking Trip</h2>
      <hr/>
            <form @submit.prevent = "handleUpdateForm">
                <div class="form-group">
                <label>Name</label>
                <input type="text" class="form-control" v-model= "trip.name" required>
                </div>
                <div class="form-group">
                <label>Date</label>
                <input type="date" class="form-control" v-model= "trip.date" required>
                </div>
                <div class="form-group">
                <label>Destination</label>
                <select class="form-control" v-model= "trip.destination" required>
                <option value="Banaue Rice Terraces">Banaue Rice Terraces</option>
              <option value="Boracay Beach">Boracay Beach</option>
              <option value="Chocolate Hills">Chocolate Hills</option>
              <option value="El Nido Islands">El Nido</option>
              <option value="Fort Santiago">Fort Santiago</option>
              <option value="The Siargo Islands">Siargao</option>
              <option value="Vigan City">Vigan City</option>
                </select>
                </div>
                <div class="form-group">
                <button class="btn btn-danger btn-block">Update</button>
                </div>
            </form>
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
        trip: { }
      }
    },
    created() {
        let apiURL = `http://localhost:4000/api/edit-trip/${this.$route.params.id}`;

        axios.get(apiURL).then((res) => {
          this.trip = res.data;
        })
      },
      
    methods: {
        handleUpdateForm() {
            let apiURL = `http://localhost:4000/api/update-trip/${this.$route.params.id}`;

        axios.put(apiURL, this.trip).then((res) => {
            console.log(res)
            this.$router.push('/view')
        }).catch(error => {
            console.log(error)
        });
        }
    }
  }
</script>