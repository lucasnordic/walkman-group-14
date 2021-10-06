<template>
  <div id="page">
    <div id="wrapper">
      <b-jumbotron id="add-service">
        <h1 class="display-4" id="title">Your services!</h1>
        <div class="accordion" role="tablist">
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.accordion-1 variant="white"
                >Add or Edit Service (click edit on services below)</b-button
              >
            </b-card-header>
            <b-collapse
              id="accordion-1"
              accordion="my-accordion"
              role="tabpanel"
              visible
            >
              <b-form id="form_inputs" @submit.prevent="onSubmit">
                <label>Price:</label>
                <input
                  v-model="service.price"
                  type="text"
                  class="form-control"
                  autofocus
                  required
                />
                <label>Description:</label>
                <input
                  v-model="service.description"
                  type="text"
                  class="form-control"
                  required
                />

                <!-- Select Service Type -->
                <b-form-group
                  id="service-type"
                  label="Select service type*"
                  label-for="i-9"
                >
                  <b-form-select
                    id="i-9"
                    v-model="form2.service"
                    :options="serviceType"
                    required
                  ></b-form-select>

                  <div v-if="form2.serviceType === 'Beauty'">
                    <p>Beauty:</p>
                    <b-container class="bv-example-row">
                      <b-row>
                        <b-col>
                          <b-form-radio name="radio-size" size="sm"
                            >brush</b-form-radio
                          >
                        </b-col>
                        <b-col>
                          <b-form-radio name="radio-size" size="sm"
                            >nailclips</b-form-radio
                          >
                        </b-col>
                        <b-col>
                          <b-form-radio name="radio-size" size="sm"
                            >washing</b-form-radio
                          >
                        </b-col>
                      </b-row>
                    </b-container>
                  </div>

                  <div v-if="form2.serviceType === 'Veterinary'">
                    <p>Veterinary:</p>
                    <p>Examination Subject:</p>
                    <input type="text" class="form-control" />
                    <b-form-radio name="radio-size" size="sm"
                      >Examination</b-form-radio
                    >
                    <b-form-radio name="radio-size" size="sm"
                      >x-ray</b-form-radio
                    >
                  </div>

                  <div v-if="form2.serviceType === 'Hostel'">
                    <label>Hostel:</label>
                    <b-form-radio name="radio-size" size="sm"
                      >Hostel</b-form-radio
                    >
                  </div>

                  <div v-if="form2.serviceType === 'Walking'">
                    <label>Walking:</label>
                    <p>Location:</p>
                    <input type="text" class="form-control" />
                    <p>hours:</p>
                    <input type="text" class="form-control" />
                  </div>
                </b-form-group>

                <b-button
                  id="registeration"
                  variant="success"
                  block
                  type="submit"
                  v-if="editing === false"
                  @click="addService()"
                  >Submit</b-button
                >
                <b-button
                  id="registeration"
                  variant="success"
                  v-if="editing === true"
                  @click="patchService(serviceIdToEdit)"
                  >Edit</b-button
                >
                <b-button
                  @click="resetService()"
                  v-if="editing === true"
                  id="service-delete-btn"
                  variant="danger"
                  >Cancel</b-button
                >
              </b-form>
            </b-collapse>
          </b-card>
        </div>

        <!-- Services -->
        <div id="services-cards">
          <b-container>
            <b-card-group deck>
              <b-card
                bg-variant="light"
                text-variant="dark"
                header="Service X"
                class="text-center"
                v-for="service in services"
                :key="service.id"
              >
                <b-card-text>
                  <p>Price: {{ service.price }}</p>
                  <p>Description: {{ service.description }}</p>
                </b-card-text>
                <div>
                  <b-button
                    @click="deleteService(service._id)"
                    id="service-delete-btn"
                    variant="danger"
                    >Del</b-button
                  >
                </div>
                <div>
                  <b-button
                    @click="editService(service._id)"
                    id="service-edit-btn"
                    variant="info"
                    >Edit</b-button
                  >
                </div>
              </b-card>
            </b-card-group>
          </b-container>
        </div>
      </b-jumbotron>
    </div>
  </div>
</template>

<script>
import { Api } from '@/Api'

export default {
  name: 'services',
  mounted() {
    this.getUser() // Load services on mount
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
      serviceType: [
        { text: 'Select One', value: null },
        'Beauty',
        'Veterinary',
        'Hostel',
        'Walking'
      ],
      form2: {
        serviceType: null
      },
      editing: false,
      serviceIdToEdit: ''
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
    addService() {
      // CREATE
      Api.post(
        '/petlovers/' + this.$route.params.id + '/services',
        this.service
      )
        .then((res) => this.service)
        .catch((err) => {
          // TODO: Display errors to user
          console.log(err)
        })
    },
    getUser() {
      // READ
      Api.get('/petlovers/' + this.$route.params.id + '/services')
        .then((res) => {
          console.log(res)
          this.services = res.data
        })
        .catch((err) => {
          // TODO: Display errors to user
          console.log(err)
        })
    },
    patchService(id) {
      // UPDATE
      console.log(id) // debugging
      Api.post('/petlovers/' + this.$route.params.id + '/services/' + id, {
        price: this.service.price,
        _method: 'patch'
      })
        .then((res) => {
          console.log(res) // debugging
          return res.data.json // { hello: 'world' }['Content-Type'] // application/json;charset=utf-8
        })
        .catch((err) => {
          // TODO: Display errors to user
          console.log(err)
        })
    },
    deleteService(id) {
      // DESTROY
      Api.delete('/petlovers/' + this.$route.params.id + '/services/' + id)
        .then((res) => {
          console.log(res) // debugging
        })
        .catch((err) => {
          // TODO: Display errors to user
          console.log(err)
        })
    }
  }
}
</script>

<style>
@import '../assets/styles/login-register_light.css';

/* Overrides imported .css */
#form_inputs {
  max-width: 100%;
  margin-top: 0;
}
/* Overrides imported .css */

#page {
  background-color: aliceblue;
  height: 100%;
  width: 100%;
  margin: auto;
  position: absolute;
}

#title {
  margin-bottom: 75px;
}

#add-service {
  background-color: white;
  max-width: 950px;
  margin: auto;
}

#services-cards {
  margin-top: 25px;
}
</style>
