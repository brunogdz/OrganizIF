<template>
    <ion-page>
        <div class="text-center section">
            <h2 class="h2">Custom Calendars</h2>
            <!-- <calendar/> -->
        </div>
    </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import { IonPage } from '@ionic/vue';
// import Calendar from "@/components/Calendar.vue";


export default defineComponent({

    components:{
        IonPage,
        // Calendar
    },

    setup(){
        return {

        }
    }

})
</script>

<style>

</style>