<template>
  <div id="page">
    <div id="wrapper">
      <b-jumbotron id="add-service">
        <h1 class="display-4" id="title">Your services!</h1>
        <b-card no-body bg-variant="light" class="services">
          Add or Edit Services (click edit on services below)
          <b-form-group @submit.prevent="onSubmit">
            <b-form-group
              id="price-fieldset-horizontal"
              class="priceLabel"
              for="servicePrice"
              label-cols-lg="3"
              content-cols-lg="7"
              label-size="md"
              label-class="font-weight-bold pt-0"
              label="Price:"
              v-model="services"
              :options="serviceType"
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
              :options="serviceType"
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

            <b-form-group
              class="beautyLabel"
              label-cols-lg="3"
              content-cols-lg="1"
              label="Beauty"
              label-align-sm="right"
              label-size="md"
              label-class="font-weight-bold pt-0"
              for="beautyService"
              v-model="services"
              :options="serviceType"
              label-for="beauty-input-horizontal"
              v-slot="{ serviceType }"
            >
              <b-form-checkbox
                v-model="service.beauty.brush"
                value="beauty.brush"
                id="beauty-input-horizontal"
                >Brush</b-form-checkbox
              >
              <b-form-checkbox
                v-model="service.beauty.nailclips"
                value="beauty.nailclips"
                id="beauty-input-horizontal"
                >Nailclips</b-form-checkbox
              >
              <b-form-checkbox
                v-model="service.beauty.washing"
                value="beauty.washing"
                id="beauty-input-horizontal"
                >Washing</b-form-checkbox
              >
            </b-form-group>

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
              :options="serviceType"
              label-for="veterinary-input-horizontal"
              autofocus
              required
            >
              <b-form-input
                id="walking-input-horizontal"
                v-model="service.veterinary.examinationSubject"
                value="veterinary.examinationSubject"
                placeholder="Enter the examination subject"
                autofocus
                required
                >Examination Subject:</b-form-input
              >
              <b-form-checkbox
                id="veterinary-input-horizontal"
                v-model="service.veterinary.examination"
                value="veterinary.examination"
                >Examination:</b-form-checkbox
              >
              <b-form-checkbox
                id="walking-input-horizontal"
                v-model="service.veterinary.xRay"
                value="veterinary.xRay"
                >X-ray:</b-form-checkbox
              >
            </b-form-group>

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
              :options="serviceType"
              label-for="hostel-input-horizontal"
              autofocus
              required
            >
              <b-form-checkbox
                id="hostel-input-horizontal"
                v-model="service.hostel"
                value="hostel"
              ></b-form-checkbox>
            </b-form-group>
          </b-form-group>

          <b-form-group
            class="walkingLabel"
            label-cols-lg="3"
            content-cols-lg="7"
            label="Walking location and hours"
            label-align-sm="right"
            label-size="md"
            label-class="font-weight-bold pt-0"
            for="walkingService"
            v-model="services"
            :options="serviceType"
            autofocus
            required
            label-for="walking-input-horizontal"
          >
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
          </b-form-group>

          <b-button
            id="registeration"
            variant="success"
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

          <!--
                <div v-if="form2.serviceType === 'Walking'">
                <label>Walking:</label>
                <p>Location:</p>
                <input type="text" class="form-control" />
                <p>hours:</p>
                <input type="text" class="form-control" />
              </div>-->
        </b-card>
      </b-jumbotron>

      <!-- Services -->
      <div id="services-cards">
        <b-container>
          <b-card-group deck>
            <b-card
              bg-variant="light"
              text-variant="dark"
              header="Services"
              class="text-center"
              v-for="service in services"
              :key="service.id"
            >
              <b-card-text>
                <p>Price: {{ service.price }}</p>
                <p>Description: {{ service.description }}</p>
                <p>Type of Service: {{ service.service }}</p>
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
      services: [],
      error: '',
      service: {
        price: null,
        description: '',
        beauty: {
          brush: true,
          nailclips: true,
          washing: true
        },
        veterinary: {
          examination: true,
          examinationSubject: '',
          xRay: true
        },
        hostel: true,
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
    addService() {
      // CREATE
      Api.post(
        '/petlovers/' + this.$route.params.id + '/services',
        this.service
      )
        .then(res => {
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
    patchService(id) {
      // UPDATE
      console.log(id) // debugging
      Api.post('/petlovers/' + this.$route.params.id + '/services/' + id, {
        price: this.service.price,
        _method: 'patch'
      })
        .then(res => {
          console.log(res) // debugging
          return res.data.json // { hello: 'world' }['Content-Type'] // application/json;charset=utf-8
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
  padding-top: 1em;
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
