<template>
    <ion-page>
        <div class="flex w-full flex-col overflow-auto">
            <div class="mt-2">
                <h1 class="text-4x1 pl-5 font-semibold">Listagem</h1>
            </div>

            <div class="flex w-full flex-col overflow-auto mt-2">
                <ion-card class="w-2/5">

                    <router-link :to="{name: 'All'}">
                        <ion-card-header>

                            <ion-icon :icon="clipboard" color="primary" size="large"></ion-icon>
                        </ion-card-header>

                        <ion-card-content>
                            <ion-card-title class="text-2x1">Todos</ion-card-title>
                            <ion-card-subtitle>Tarefas</ion-card-subtitle>
                        </ion-card-content>

                    </router-link>
                </ion-card>
                                <ion-card class="w-2/5">

                    <router-link :to="{name: 'Trabalho'}">
                        <ion-card-header>

                            <ion-icon :icon="briefcase" size="large" class="text-yellow-800"></ion-icon>
                        </ion-card-header>

                        <ion-card-content>
                            <ion-card-title class="text-2x1">Trabalho</ion-card-title>
                            <ion-card-subtitle>Tarefas</ion-card-subtitle>
                        </ion-card-content>

                    </router-link>
                </ion-card>

            </div>
        </div>
    </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import { IonPage, IonCard, IonCardHeader, IonIcon } from '@ionic/vue';
import { clipboard } from 'ionicons/icons';
export default defineComponent({

    components:{
        IonPage, IonCard, IonCardHeader, IonIcon
    },

    setup(){
        return {
            clipboard
        }
    }

})
</script>

<style>

</style>