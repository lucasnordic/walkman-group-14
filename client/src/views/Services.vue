<template>
  <div id="page">
    <div id="wrapper">
      <b-jumbotron id="add-service">
        <h1 class="display-4" id="title">My services</h1>
        <b-card no-body bg-variant="light" class="services">
          <h5><em>Add Services</em></h5>

          <b-form-group @submit="postService">
            <b-card bg-variant="light">
              <b-form-group
                id="price-fieldset-horizontal"
                class="priceLabel"
                for="servicePrice"
                label-cols-lg="3"
                content-cols-lg="7"
                label-size="md"
                label-class="font-weight-bold pt-1"
                label="Price:"
                v-model="services"
                label-align-sm="right"
                label-for="price-input-horizontal"
              >
                <b-form-input
                  id="price-input-horizontal"
                  v-model="service.price"
                  type="text"
                  class="priceInput"
                  placeholder="Enter the price (t.ex. 250)"
                  autofocus
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="description-fieldset-horizontal"
                class="descriptionLabel"
                for="serviceDescription"
                label-cols-lg="3"
                content-cols-lg="7"
                label-size="md"
                label-class="font-weight-bold pt-0"
                label="Description:"
                v-model="services"
                label-align-sm="right"
                label-for="description-input-horizontal"
              >
                <b-form-textarea
                  id="input-horizontal"
                  v-model="service.description"
                  type="text"
                  class="descriptionInput"
                  placeholder="Enter description of the service"
                  rows="3"
                  max-rows="6"
                  autofocus
                  required
                ></b-form-textarea>
              </b-form-group>
            </b-card>

            <b-card bg-variant="light">
              <b-form-group
                class="beautyLabel"
                label-cols-lg="3"
                content-cols-lg="1"
                label="Beauty:"
                label-align-sm="right"
                label-size="md"
                label-class="font-weight-bold pt-0"
                for="beautyService"
                v-model="services"
                label-for="beauty-input-horizontal"
              >
                <b-form-checkbox v-model="service.beauty.brush"
                  >Brush</b-form-checkbox
                >
                <b-form-checkbox v-model="service.beauty.nailclips"
                  >Nailclips</b-form-checkbox
                >
                <b-form-checkbox v-model="service.beauty.washing"
                  >Washing</b-form-checkbox
                >
              </b-form-group>
            </b-card>

            <b-card bg-variant="light">
              <b-form-group
                class="veterinaryLabel"
                label-cols-lg="3"
                content-cols-lg="7"
                label-align-sm="right"
                label="Veterinary:"
                label-size="md"
                label-class="font-weight-bold pt-0"
                for="veterinaryService"
                v-model="services"
                label-for="veterinary-input-horizontal"
              >
                <b-card>
                  <b-form-checkbox
                    v-model="service.veterinary.examination"
                    stacked
                    >Examination</b-form-checkbox
                  >
                  <b-form-checkbox v-model="service.veterinary.xRay" inline
                    >X-ray</b-form-checkbox
                  >
                  <b-form-input
                    id="walking-input-horizontal"
                    v-model="service.veterinary.examinationSubject"
                    value="veterinary.examinationSubject"
                    placeholder="Enter the examination subject"
                    >Examination Subject:</b-form-input
                  >
                </b-card>
              </b-form-group>
            </b-card>

            <b-card bg-variant="light">
              <b-form-group
                class="hostelLabel"
                label-cols-lg="3"
                content-cols-lg="1"
                label-align-sm="right"
                label="Hostel:"
                label-size="md"
                label-class="font-weight-bold pt-0"
                for="veterinaryService"
                v-model="services"
                label-for="hostel-input-horizontal"
              >
                <b-form-checkbox
                  id="hostel-input-horizontal"
                  v-model="service.hostel"
                ></b-form-checkbox>
              </b-form-group>
            </b-card>

            <b-card bg-variant="light">
              <b-form-group
                class="walkingLabel"
                label-cols-lg="3"
                content-cols-lg="7"
                label="Walking location and hours:"
                label-align-sm="right"
                label-size="md"
                label-class="font-weight-bold pt-0"
                for="walkingService"
                v-model="services"
                autofocus
                required
                label-for="walking-input-horizontal"
              >
                <b-card>
                  <b-form-input
                    id="walking-input-horizontal"
                    v-model="service.walking.location"
                    value="walking.location"
                    placeholder="Enter the walking location"
                    autofocus
                    required
                    >Location:</b-form-input
                  ><br />
                  <b-form-input
                    id="walking-input-horizontal"
                    v-model="service.walking.hours"
                    value="walking.hours"
                    description="Let us know your name."
                    label="Hours:"
                    placeholder="Enter total hours (t.ex. 3)"
                    autofocus
                    required
                    >Hours:</b-form-input
                  >
                </b-card>
              </b-form-group>

              <div>
                <b-container>
                  <b-button
                    id="service-submit-btn"
                    variant="success"
                    type="submit"
                    size="md"
                    v-if="editing === false"
                    @click="postService()"
                    >Submit</b-button
                  >
                </b-container>
                <b-button
                  id="service-patch-btn"
                  variant="success"
                  v-if="editing === true"
                  @click="() => patchService(service)"
                  >Save</b-button
                >
                <b-button
                  id="service-delete-btn"
                  variant="danger"
                  v-if="editing === true"
                  @click="resetService()"
                  >Cancel</b-button
                >
              </div>
            </b-card>
          </b-form-group>

          <!-- <div v-if="form2.serviceType === 'Walking'">
            <label>Walking:</label>
            <p>Location:</p>
            <input type="text" class="form-control" />
            <p>hours:</p>
            <input type="text" class="form-control" />
          </div> -->
        </b-card>
      </b-jumbotron>

      <!-- Services -->
      <div v-bind="service" id="services-cards">
        <b-container>
          <b-col md="12">
            <b-card
              bg-variant="light"
              text-variant="dark"
              header="Edit or delete services (click edit on services below)"
              class="header"
              v-for="service in services"
              :key="service.id"
            >
              <b-card-text>
                <!-- <p>Pet Lover Name: {{ petLover.userinfo.fullName }}</p> -->
                <p><b>Price:</b> {{ service.price }}</p>
                <hr />
                <p><b>Description:</b> {{ service.description }}</p>
                <hr />
                <p><b>Services</b></p>
                <ul v-if="service.beauty">
                  <b>Beauty</b>
                  <ul> <b>Brush:</b> {{ service.beauty.brush }} </ul>
                  <ul> <b>Nailclips:</b> {{ service.beauty.nailclips }} </ul>
                  <ul> <b>Washing:</b> {{ service.beauty.washing }} </ul>
                </ul>

                <ul>
                  <b v-if="service.veterinary">Veterinary</b>
                  <ul> <b>Examination:</b> {{ service.veterinary.examination }} </ul>
                  <ul> <b>Examination Subject:</b> {{ service.veterinary.examinationSubject }} </ul>
                  <ul> <b>X-ray:</b> {{ service.veterinary.xRay }} </ul>
                </ul>
                <hr />
                <ul> <b>Hostel:</b> {{ service.hostel }} </ul>
                <hr />
                <ul>
                  <b v-if="service.walking">Walking</b>
                  <ul> <b>Walking Location:</b> {{ service.walking.location }} </ul>
                  <ul> <b>Total walking hours:</b> {{ service.walking.hours }} </ul>
                </ul>
                <hr />
              </b-card-text>

              <div>
                <b-container>
                  <b-button
                    @click="editService(service._id)"
                    id="service-edit-btn"
                    variant="info"
                    class="edit-btn"
                    >Edit</b-button
                  >
                  <b-button
                    @click="deleteService(service._id)"
                    id="service-delete-btn"
                    variant="danger"
                    class="delete-btn"
                    >Delete</b-button
                  >
                </b-container>
              </div>
            </b-card>
          </b-col>
        </b-container>
      </div>
    </div>
  </div>
</template>

<script>
import { Api } from '@/Api'

export default {
  name: 'services',
  components: {},
  mounted() {
    this.getUser() // Load services on mount
    Api.get('/petlovers/' + this.$route.params.id + '/services').then(res => {
      console.log(res)
      this.services = res.data
    })
  },
  data() {
    return {
      services: {},
      service: {
        price: null,
        description: '',
        beauty: {
          brush: false,
          nailclips: false,
          washing: false
        },
        veterinary: {
          examination: false,
          examinationSubject: '',
          xRay: false
        },
        hostel: false,
        walking: {
          location: '',
          hours: null
        }
      },
      error: '',
      editing: true,
      serviceIdToEdit: 'service'
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      console.log(this.form) // debugging
      if (this.service.price === 'Pet Owner') {
        console.log('test')
      } else if (this.service.service === 'Pet Lover') {
        console.log('test')
      }
    },
    editService(id) {
      this.editing = true

      for (let i = 0; i < this.services.length; i++) {
        const service = this.services[i]
        if (service._id === id) {
          this.serviceIdToEdit = id
          this.service.price = service.price
          this.service.description = service.description
          this.service.brush = service.brush
          this.service.nailclips = service.nailclips
          this.service.washing = service.washing
          this.service.examination = service.examination
          this.service.examinationSubject = service.examinationSubject
          this.service.xRay = service.xRay
          this.service.hostel = service.hostel
          this.service.location = service.location
          this.service.hours = service.hours
        }
      }
    },
    resetService() {
      this.editing = false
      this.service.price = null
      this.service.description = ''
      this.service.brush = false
      this.service.nailclips = false
      this.service.washing = false
      this.service.examination = false
      this.service.examinationSubject = ''
      this.service.xRay = false
      this.service.hostel = false
      this.service.location = ''
      this.service.hours = null
    },
    postService() {
      Api.post(
        '/petlovers/' + this.$route.params.id + '/services',
        this.service
      )
        .then(res => {
          console.log(res)
          this.service = res.data
        })
        .catch(err => {
          // TODO: Display errors to user
          console.log(err)
        })
    },
    getUser() {
      // READ
      Api.get('/petlovers/' + this.$route.params.id + '/services')
        .then(res => {
          console.log(res)
          this.services = res.data
        })
        .catch(err => {
          // TODO: Display errors to user
          console.log(err)
        })
    },
    editHandler(service) {
      this.services = service
    },
    patchService(id) {
      console.log(id) // debugging
      Api.patch('/petlovers/' + this.$route.params.id + '/services/' + id, {

        price: this.service.price,
        // description: this.service.description,
        // beauty: {
        //   brush: this.service.beauty.brush,
        //   nailclips: this.service.beauty.nailclips,
        //   washing: this.service.beauty.washing
        // },
        // veterinary: {
        //   examination: this.service.veterinary.examination,
        //   examinationSubject: this.service.veterinary.examinationSubject,
        //   xRay: this.service.xRay
        // },
        // hostel: this.service.hostel,
        // walking: {
        //   location: this.service.walking.location,
        //   hours: this.service.walking.hours
        // },
        _method: 'patch'
      }
      )
        .then(res => {
          this.services = res.data.services
          // console.log(res) // debugging
          // this.service.price = ''
          // this.service.description = ''
          // this.service.beauty.brush = false
          // this.service.beauty.nailclips = false
          // this.service.beauty.washing = false
          // this.service.veterinary.examination = false
          // this.service.veterinary.examinationSubject = ''
          // this.service.veterinary.xRay = false
          // this.service.hostel = false
          // this.service.walking.location = ''
          // this.service.walking.hours = ''
          return res.data.json
        })
        .catch(err => {
          // TODO: Display errors to user
          console.log(err)
        })
    },
    deleteService(id) {
      // DESTROY
      Api.delete('/petlovers/' + this.$route.params.id + '/services/' + id)
        .then(res => {
          console.log(res) // debugging
        })
        .catch(err => {
          // TODO: Display errors to user
          console.log(err)
        })
    }
  }
}
</script>

<style>
@import '../assets/styles/login-register_light.css';

.services {
  padding: 1em 1em;
}

.priceLabel {
  margin-top: 1em;
}

/* Overrides imported .css */
#form_inputs {
  max-width: 100%;
  margin-top: 1em;
}
/* Overrides imported .css */

#page {
  background-color: aliceblue;
  height: auto;
  width: 100%;
  margin: auto;
  position: absolute;
}

#title {
  margin-bottom: 25px;
}

#add-service {
  background-color: rgb(220, 246, 255);
  max-width: 1000px;
  margin: auto;
  border-style: groove;
}

#services-cards {
  margin-top: 50px;
  margin-bottom: 50px;
  text-align: left;
}
.card-body {
  margin: 0.5em 0.5em 0.5em 0.5em;
}
.edit-btn {
  margin-right: 1em;
  margin-left: 40%;
}
#service-submit-btn {
  width: 20%;
  margin: 0;
  position: relative;
  top: 50%;
  left: 40%;
}
</style>
