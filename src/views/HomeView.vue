<script setup>
// import DataService from "../services/dataservice";
// import { ref, onMounted } from "vue";

// const gyartok = ref([]);
// const telefonok = ref([]);
// const valasztas = ref();
// const valasztottId = ref();
// const joTelefonok = ref([]);
// const szinek = ref([])

// onMounted(() => {
// for (let index = 0; index < telefonok.value.length; index++) {
//   if (!szinek.value.includes(telefonok.value[index].szin)) {
//     szinek.value.push(telefonok.value[index].szin)
//   }
// }
// console.log(szinek.value);
// }),




// DataService.getAllGyartok()
//   .then((resp) => {
//     gyartok.value = resp;
//     console.log(gyartok.value);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// DataService.getAllTelefonok()
//   .then((resp) => {
//     telefonok.value = resp;
//     console.log(telefonok.value);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const valaszto = () => {
//   valasztottId.value = gyartok.value.find((t) => t.nev === valasztas.value)._id;
//   console.log(valasztottId.value);
//   joTelefonok.value = telefonok.value.filter(
//     (t) => t.gyarto === valasztottId.value
//   );
//   console.log(joTelefonok.value);
// };
</script>

<template>
  <select v-model="valasztas" @change="valaszto">
    <option v-for="telefon in telefonok">{{ telefon.szin }}</option>
  </select>
  <ul>
    <li v-for="telo in joTelefonok">{{ telo.nev }}</li>
  </ul>
  
</template>
