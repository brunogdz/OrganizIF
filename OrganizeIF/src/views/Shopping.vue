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
                    <ion-icon :icon="cart" size="large" style="color:#115E59"></ion-icon>
                </div>

                <div class="text-center">
                    <ion-card-title class="text 2x1">Compras</ion-card-title>
                    <ion-card-subtitle>Tarefas e Afazeres</ion-card-subtitle>
                </div>
            </div>

            <div>
                <ion-list>
                    <ion-list-header>
                        <ion-label>Atrasados: <span class="text-gray-600 text-base">{{state.late.length}}</span>
                        </ion-label>
                    </ion-list-header>

                    <ion-item-sliding v-for="item in state.late" :key="item.id">
                        <ion-item-options side="start">
                            <ion-item-option @click="deleteTask(item)" color="danger" expandable>
                                <ion-icon :icon="trash" size="large"></ion-icon>
                            </ion-item-option>
                        </ion-item-options>

                        <ion-item detail="true">
                            <ion-label class="item-inner" v-bind:style="{'background-color':mudarcor(item)}">
                                <h2>{{item.task}}</h2>
                                <p>{{item.dueDate}}</p>
                                <ion-badge color="new">{{item.priority}}</ion-badge>
                            </ion-label>
                        </ion-item>

                        <ion-item-options side="end">
                                <ion-item-option @click="doneTask(item)" color="primary" expandable>
                                    <ion-checkbox :checked="item.done"></ion-checkbox>
                                </ion-item-option>
                        </ion-item-options>
                        
                    </ion-item-sliding>
                </ion-list>

                <ion-list>
                    <ion-list-header>
                        <ion-label>Hoje: <span class="text-gray-600 text-base">{{state.today.length}}</span>
                        </ion-label>
                    </ion-list-header>

                    <ion-item-sliding v-for="item in state.today" :key="item.id">
                        <ion-item-options side="start">
                            <ion-item-option @click="deleteTask(item)" color="danger" expandable>
                                <ion-icon :icon="trash" size="large"></ion-icon>
                            </ion-item-option>
                        </ion-item-options>

                        <ion-item detail="true">
                            <ion-label class="item-inner" v-bind:style="{'background-color':mudarcor(item)}">
                                <h2>{{item.task}}</h2>
                                <p>{{item.dueDate}}</p>
                                <ion-badge color="new">{{item.priority}}</ion-badge>
                            </ion-label>
                        </ion-item>

                        <ion-item-options side="end">
                            <ion-item-option @click="doneTask(item)" color="primary" expandable>
                                <ion-checkbox :checked="item.done"></ion-checkbox>
                            </ion-item-option>
                        </ion-item-options>
                        
                    </ion-item-sliding>
                </ion-list>

                <ion-list>
                    <ion-list-header>
                        <ion-label>Futuros: <span class="text-gray-600 text-base">{{state.later.length}}</span>
                        </ion-label>
                    </ion-list-header>

                    <ion-item-sliding v-for="item in state.later" :key="item.id">
                        <ion-item-options side="start">
                            <ion-item-option @click="deleteTask(item)" color="danger" expandable>
                                <ion-icon :icon="trash" size="large"></ion-icon>
                            </ion-item-option>
                        </ion-item-options>

                        <ion-item detail="true">
                            <ion-label class="item-inner" v-bind:style="{'background-color':mudarcor(item)}">
                                <h2>{{item.task}}</h2>
                                <p>{{item.dueDate}}</p>
                                <ion-badge color="new">{{item.priority}}</ion-badge>
                            </ion-label>
                        </ion-item>

                        <ion-item-options side="end">
                            <ion-item-option @click="doneTask(item)" color="primary" expandable>
                                <ion-checkbox :checked="item.done"></ion-checkbox>
                            </ion-item-option>
                        </ion-item-options>
                        
                    </ion-item-sliding>
                </ion-list>

                <ion-list>
                    <ion-list-header>
                        <ion-label>Feito: <span class="text-gray-600 text-base">{{state.done.length}}</span>
                        </ion-label>
                    </ion-list-header>

                    <ion-item-sliding v-for="item in state.done" :key="item.id">
                        <ion-item-options side="start">
                            <ion-item-option @click="deleteTask(item)" color="danger" expandable>
                                <ion-icon :icon="trash" size="large"></ion-icon>
                            </ion-item-option>
                        </ion-item-options>

                        <ion-item detail="true">
                            <ion-label>
                                <h2 style="color:#3490dc"><s>{{item.task}}</s></h2>
                                <p><s>{{item.dueDate}}</s></p>
                                <ion-badge color="new">{{item.priority}}</ion-badge>
                            </ion-label>
                        </ion-item>

                        <ion-item-options side="end">
                            <ion-item-option @click="notDoneTask(item)" color="white" expandable>
                                <ion-checkbox :checked="item.done"></ion-checkbox>
                            </ion-item-option>
                        </ion-item-options>
                        
                    </ion-item-sliding>
                </ion-list>
            </div>
        </ion-content>
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
    </ion-page>
</template>

<script>
import { computed, defineComponent, onMounted, reactive, ref } from "vue";
import { IonPage, IonToolbar, IonButtons, IonBackButton, IonIcon, IonContent, IonCardTitle, IonCardSubtitle, IonListHeader, IonItemSliding, IonItemOption, IonItemOptions,
IonCheckbox, IonLabel, IonList, IonItem, IonFab, IonFabButton, IonModal} from '@ionic/vue';
import {ellipsisVertical, cart, trash, add} from 'ionicons/icons';
import NewTask from "@/components/NewTask.vue";
import {useStore} from 'vuex';

export default defineComponent({

    components:{
        IonPage, IonToolbar, IonButtons, IonBackButton, IonIcon, IonContent, IonCardTitle, IonCardSubtitle, IonListHeader, IonItemSliding,
        IonItemOption, IonItemOptions, IonCheckbox, IonLabel, IonList, IonItem, IonFab, IonFabButton, IonModal, NewTask
    
    },

    setup(){
        function mudarcor(item){
               const result = [];
               console.log(item.detail)
               if(item.priority == 'Baixa Prioridade'){
                   console.log("É primary")
                   result.push('#2E7D32');
               }else if(item.priority == 'Média Prioridade'){
                   result.push('#F57F17')
               }else{
                   result.push('#C62828')
               }
               return result;
        }
        const isOpenNewTask = ref(false);
        const store = useStore();
        const state = reactive({
            tasksMusic: computed(() =>{
                return store.getters.tasksByCategory('Shopping');
            }),
            today: computed(() => {
                return store.getters.today(state.tasksMusic);
            }),
            late: computed(() => {
                return store.getters.late(state.tasksMusic);
            }),
            later: computed(() => {
                return store.getters.later(state.tasksMusic);
            }),
            done: computed(() => {
                return store.getters.done(state.tasksMusic);
            })
        })
        function getTasksMusic() {
            store.commit('getTasks');
        }
        function doneTask(item) {
            store.commit('doneTask',item);
        }
        function notDoneTask(item) {
            store.commit('notDoneTask',item);
        }
        function deleteTask(item) {
            store.commit('deleteTask',item);
        }
        onMounted(() => {
            getTasksMusic();
        })
        return {
            isOpenNewTask, state, store,
            ellipsisVertical, cart, trash, add, doneTask, notDoneTask, deleteTask, mudarcor
        }
    }

})
</script>

<style>
:root {
  --ion-color-new: #00ACC1;
  --ion-color-new-rgb: 0,172,193;
  --ion-color-new-contrast: #ffffff;
  --ion-color-new-contrast-rgb: 255,255,255;
  --ion-color-new-shade: #0097aa;
  --ion-color-new-tint: #1ab4c7;
}

.ion-color-new {
  --ion-color-base: var(--ion-color-new);
  --ion-color-base-rgb: var(--ion-color-new-rgb);
  --ion-color-contrast: var(--ion-color-new-contrast);
  --ion-color-contrast-rgb: var(--ion-color-new-contrast-rgb);
  --ion-color-shade: var(--ion-color-new-shade);
  --ion-color-tint: var(--ion-color-new-tint);
}
</style>