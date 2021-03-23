<template>
    <ion-page>
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-back-button default-href="/Lists"></ion-back-button>
            </ion-buttons>

            <ion-icon :icon="ellipsisVertical" slot="end" class="text-2x1"></ion-icon>
        </ion-toolbar>

        <ion-content class="overflow-auto">
            <div class="flex flex-col justify-center items-center mt-2">
                <div class="text-center">
                    <ion-icon :icon="clipboard" size="large" color="primary"></ion-icon>
                </div>

                <div class="text-center">
                    <ion-card-title class="text 2x1">Todos</ion-card-title>
                    <ion-card-subtitle>Tarefas e Afazeres</ion-card-subtitle>
                </div>
            </div>

            <div>
                <ion-list>
                    <ion-list-header>
                        <ion-label>Atrasados: <span class="text-gray-600 text-base">0</span>
                        </ion-label>
                    </ion-list-header>

                    <ion-item-sliding>
                        <ion-item-options>
                            <ion-item-option></ion-item-option>
                        </ion-item-options>
                    </ion-item-sliding>
                </ion-list>
            </div>
        </ion-content>
    </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import { IonPage, IonToolbar, IonButtons, IonBackButton, IonIcon, IonContent, IonCardTitle, IonCardSubtitle, IonListHeader, IonItemSliding, IonItemOption, IonItemOptions} from '@ionic/vue';
import {ellipsisVertical, clipboard} from 'ionicons/icons';

export default defineComponent({

    components:{
        IonPage, IonToolbar, IonButtons, IonBackButton, IonIcon, IonContent, IonCardTitle, IonCardSubtitle, IonListHeader, IonItemSliding,
        IonItemOption, IonItemOptions
    },

    setup(){
        return {
            ellipsisVertical, clipboard
        }
    }

})
</script>

<style>

</style>