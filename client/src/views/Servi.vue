<template>
    <div>
      <!-- Element to collapse -->
      <b-collapse id="collapse-2">
        <!-- Via multiple directive modifiers -->
        <b-button
          class="walking"
          v-on:click="getMessage()"
          v-b-toggle.collapse-a.collapse-b
          variant="success"
          >Walking</b-button
        >
        <b-button
          class="beauty"
          v-b-toggle.collapse-a.collapse-b
          variant="success"
          >Beauty</b-button
        >
        <b-button
          class="veterinary"
          v-b-toggle.collapse-a.collapse-b
          variant="success"
          >Veterinary</b-button
        >
        <b-button
          class="hostel"
          v-b-toggle.collapse-a.collapse-b
          variant="success"
          >Hostel</b-button
        >
      </b-collapse>
    </div>
</template>

<style>
.walking {
  margin-right: 0.5em;
}
.beauty {
  margin-right: 0.5em;
}
.veterinary {
  margin-right: 0.5em;
}
.hostel {
  margin-right: 0.5em;
}
</style>
