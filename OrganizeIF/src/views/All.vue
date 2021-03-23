<template>
    <ion-page>
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-back-button default-href="/Lists"></ion-back-button>
            </ion-buttons>

            <ion-icon :icon="ellipsisVertical" slot="end" class="text-2x1"></ion-icon>
        </ion-toolbar>

        <ion-content>

        </ion-content>
    </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import { IonPage, IonToolbar, IonButtons, IonBackButton, IonIcon, IonContent} from '@ionic/vue';
import {ellipsisVertical} from 'ionicons/icons';

export default defineComponent({

    components:{
        IonPage, IonToolbar, IonButtons, IonBackButton, IonIcon, IonContent
    },

    setup(){
        return {
            ellipsisVertical
        }
    }

})
</script>

<style>

</style>