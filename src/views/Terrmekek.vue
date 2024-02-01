<script setup>
import {ref, onMounted} from 'vue'
import dataservice from '../services/dataservice';


const books = ref([])

books.value = await dataservice.getAllGyartok()
console.log(books.value);

</script>



<template>
    <div class="container text-center">
        <div class="row">
            <div class="col col-md-6 col-lg-3   ">
                <div class="card" style="width: 18rem;">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>