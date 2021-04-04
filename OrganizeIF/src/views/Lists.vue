<template>
    <ion-page>
        <div class="flex w-full flex-col overflow-auto">
            <div class="mt-2">
                <h1 class="text-4x1 pl-5 font-semibold"></h1>
            </div>

            <div class="flex w-full flex-row flex-wrap justify-around mt-2">
                <ion-card class="w-2/5">

                    <router-link :to="{name: 'All'}">
                        <ion-card-header>

                            <ion-icon :icon="clipboard" color="primary" size="large"></ion-icon>
                        </ion-card-header>

                        <ion-card-content>
                            <ion-card-title class="text-2x1">Todos</ion-card-title>
                            <ion-card-subtitle>{{state.lengthAllTasks}} Tarefas</ion-card-subtitle>
                        </ion-card-content>

                    </router-link>
                </ion-card>

                <ion-card class="w-2/5">

                    <router-link :to="{name: 'Work'}">
                        <ion-card-header>

                            <ion-icon :icon="briefcase" size="large" class="text-yellow-600"></ion-icon>
                        </ion-card-header>

                        <ion-card-content>
                            <ion-card-title class="text-2x1">Trabalho</ion-card-title>
                            <ion-card-subtitle>Tarefas</ion-card-subtitle>
                        </ion-card-content>

                    </router-link>
                </ion-card>

                <ion-card class="w-2/5">

                    <router-link :to="{name: 'Scheduler'}">
                        <ion-card-header>

                            <ion-icon :icon="calendar" size="large" class="text-red-600"></ion-icon>
                        </ion-card-header>

                        <ion-card-content>
                            <ion-card-title class="text-2x1">Rotina</ion-card-title>
                            <ion-card-subtitle>Montar o seu horário</ion-card-subtitle>
                        </ion-card-content>

                    </router-link>
                </ion-card>

                <ion-card class="w-2/5">

                    <router-link :to="{name: 'Study'}">
                        <ion-card-header>

                            <ion-icon :icon="school" size="large" class="text-green-600"></ion-icon>
                        </ion-card-header>

                        <ion-card-content>
                            <ion-card-title class="text-2x1">Estudar</ion-card-title>
                            <ion-card-subtitle>Tarefas e Atividades</ion-card-subtitle>
                        </ion-card-content>

                    </router-link>
                </ion-card>

                <ion-card class="w-2/5">

                    <router-link :to="{name: 'Music'}">
                        <ion-card-header>

                            <ion-icon :icon="headset" size="large" class="text-indigo-400"></ion-icon>
                        </ion-card-header>

                        <ion-card-content>
                            <ion-card-title class="text-2x1">Musicas</ion-card-title>
                            <ion-card-subtitle>Anotar musicas para não esquecer</ion-card-subtitle>
                        </ion-card-content>

                    </router-link>
                </ion-card>

                <ion-card class="w-2/5">

                    <router-link :to="{name: 'Read'}">
                        <ion-card-header>

                            <ion-icon :icon="book" size="large" style="color:#fcba03"></ion-icon>
                        </ion-card-header>

                        <ion-card-content>
                            <ion-card-title class="text-2x1">Leitura</ion-card-title>
                            <ion-card-subtitle>Livros interessantes</ion-card-subtitle>
                        </ion-card-content>

                    </router-link>
                </ion-card>

                <ion-card class="w-2/5">

                    <router-link :to="{name: 'Home'}">
                        <ion-card-header>

                            <ion-icon :icon="home" size="large" style="color:#2DD4BF"></ion-icon>
                        </ion-card-header>

                        <ion-card-content>
                            <ion-card-title class="text-2x1">Casa</ion-card-title>
                            <ion-card-subtitle>Tarefas</ion-card-subtitle>
                        </ion-card-content>

                    </router-link>
                </ion-card>

            <ion-card class="w-2/5">

                    <router-link :to="{name: 'Shopping'}">
                        <ion-card-header>

                            <ion-icon :icon="cart" size="large" style="color:#115E59"></ion-icon>
                        </ion-card-header>

                        <ion-card-content>
                            <ion-card-title class="text-2x1">Compras</ion-card-title>
                            <ion-card-subtitle>Anotações</ion-card-subtitle>
                        </ion-card-content>

                    </router-link>
            </ion-card>

                <ion-card class="w-2/5">

                    <router-link :to="{name: 'Travel'}">
                        <ion-card-header>

                            <ion-icon :icon="airplane" size="large" class="text-blue-400"></ion-icon>
                        </ion-card-header>

                        <ion-card-content>
                            <ion-card-title class="text-2x1">Viagens</ion-card-title>
                            <ion-card-subtitle>Lugares para visitar</ion-card-subtitle>
                        </ion-card-content>

                    </router-link>
            </ion-card>
                <ion-card class="w-2/5">

                    <router-link :to="{name: 'Ideas'}">
                        <ion-card-header>
                            <!-- style="#201EE9" -->
                            <ion-icon :icon="bulb" size="large" style="color:#0DFF00"></ion-icon>
                        </ion-card-header>

                        <ion-card-content>
                            <ion-card-title class="text-2x1">Ideias</ion-card-title>
                            <ion-card-subtitle>Ideias e anotações</ion-card-subtitle>
                        </ion-card-content>

                    </router-link>
            </ion-card>

            <ion-card class="w-2/5">

                    <router-link :to="{name: 'PageTeste'}">
                        <ion-card-header>

                            <ion-icon :icon="cart" size="large" style="color:#123456"></ion-icon>
                        </ion-card-header>

                        <ion-card-content>
                            <ion-card-title class="text-2x1">Pagina teste</ion-card-title>
                            <ion-card-subtitle>Anotações</ion-card-subtitle>
                        </ion-card-content>

                    </router-link>
            </ion-card>
                
            </div>

                <div>
                    <ion-fab @click="isOpenNewTask = true" vertical="bottom" horizontal="end" slot="fixed">
                        <ion-fab-button>
                            <ion-icon :icon="add"></ion-icon>
                        </ion-fab-button>
                    </ion-fab>

                    <ion-modal 
                        :is-open="isOpenNewTask"
                        :backdrop-dismiss="false">
                        
                        <new-task @closeModal="isOpenNewTask = false"></new-task>    
                    </ion-modal>

                </div>

        </div>
    </ion-page>
</template>

<script>
import { computed, defineComponent, onMounted, ref , reactive} from "vue";
import { IonPage, IonCard, IonCardHeader, IonIcon, IonCardContent, IonFabButton, IonCardTitle, IonCardSubtitle, IonFab, IonModal } from '@ionic/vue';
import { clipboard, briefcase, bulb, calendar, airplane, book, cart, add, headset, home, pencil, school} from 'ionicons/icons';
import NewTask from "@/components/NewTask.vue";
import {useStore} from 'vuex';
export default defineComponent({

    components:{
        IonPage, IonCard, IonCardHeader, IonIcon, IonCardContent, IonFabButton, IonCardTitle, IonCardSubtitle, IonFab, IonModal, NewTask
    },

 
        setup(){

        const isOpenNewTask = ref(false);
        const store = useStore();
        const state = reactive({
            lengthAllTasks: computed(() => {
                return store.state.tasks.length;
            }),
            lengthOfWorkTasks: computed(() => {
                return store.getters.lengthTasksByCategory('Work');
            }),
            lengthOfTravelTasks: computed(() => {
                return store.getters.lengthTasksByCategory('Travel');
            }),
            lengthOfStudyTasks: computed(() => {
                return store.getters.lengthTasksByCategory('Study');
            }),
            lengthOfMusicTasks: computed(() => {
                return store.getters.lengthTasksByCategory('Music');
            }),
            lengthOfReadTasks: computed(() => {
                return store.getters.lengthTasksByCategory('Read');
            }),
            lengthOfShoppingTasks: computed(() => {
                return store.getters.lengthTasksByCategory('Shopping');
            }),
            lengthOfHomeTasks: computed(() => {
                return store.getters.lengthTasksByCategory('Home');
            }),
        })

        function getTasks(){
            store.commit('getTasks');
        }

        onMounted(() => {
            if (store.state.tasks.length == 0) {
                getTasks();
            }
        })
        return {
            store, state, getTasks, 
            clipboard, briefcase, bulb, calendar, airplane, book, cart, add, headset, home, pencil, school, isOpenNewTask
        }
    }

})
</script>

<style>

</style>