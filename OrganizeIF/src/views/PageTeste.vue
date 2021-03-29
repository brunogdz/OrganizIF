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
                    <ion-icon :icon="headset" size="large" class="text-indigo-400"></ion-icon>
                </div>

                <div class="text-center">
                    <ion-card-title class="text 2x1">Notas</ion-card-title>
                    <ion-card-subtitle>Aqui você vê todas as notas que você criou</ion-card-subtitle>
                </div>
            </div>

            <div class="flex w-full flex-col flex-wrap justify-around overflow-auto mt-2">
                <ion-list>
                    <ion-list-header>
                        <ion-label>Notas criadas:  <span class="text-gray-600 text-base">{{state.notes.length}}</span>
                        </ion-label>
                    </ion-list-header>
                    
                    <ion-item-sliding v-for="item in state.notes" :key="item.id" color="danger">
                        <ion-item-options side="start">
                            <ion-item-option @click="deleteNote(item)" color="danger" expandable>
                                <ion-icon :icon="trash" size="large"></ion-icon>
                            </ion-item-option>
                        </ion-item-options>

                        <ion-item  >
                            <!-- v-for="itens in colors" v-on="selected = {{item.detail}}" v-bind="{selected: selected == item}" -->
                            <!-- v-for="obj of state.notes" :key="obj.detail" :color="{obj}" -->
                            <ion-card class="item-inner" v-bind:style="{'background-color':mudarcor(item)}">
                                
                                <ion-card-header>
                                    <ion-card-title>{{item.note}}</ion-card-title>
                                    <ion-card-subtitle>{{item.subtitle}}</ion-card-subtitle>
                                </ion-card-header>
                                <ion-card-content>
                                    <p>{{item.detail}}</p>
                                </ion-card-content>
                                
                            </ion-card>
                            
                            <!-- <ion-label>
                                <h2>{{item.note}}</h2>
                                <p>{{item.detail}}</p>
                                <p style="color:red"></p>
                            </ion-label> -->
                        </ion-item>

                        <ion-item-options side="end">
                                <ion-item-option color="primary" expandable>
                                    <ion-checkbox></ion-checkbox>
                                </ion-item-option>
                        </ion-item-options>
                        
                    </ion-item-sliding>
                </ion-list>

                
            </div>
        </ion-content>
            <div>
                <ion-fab @click="isOpenNewNote = true" vertical="bottom" horizontal="end" slot="fixed">
                    <ion-fab-button>
                        <ion-icon :icon="add"></ion-icon>
                        </ion-fab-button>
                    </ion-fab>

                    <ion-modal 
                        :is-open="isOpenNewNote"
                        :backdrop-dismiss="false">
                        
                        <new-note @closeModal="isOpenNewNote = false"></new-note>    
                </ion-modal>
            </div>
    </ion-page>
</template>

<script>
import { computed, defineComponent, onMounted, reactive, ref } from "vue";
import { IonPage, IonToolbar, IonButtons, IonBackButton, IonIcon, IonContent, IonCardTitle, IonCardSubtitle, IonListHeader, IonItemSliding, IonItemOption, IonItemOptions,
IonCheckbox, IonLabel, IonList, IonItem, IonFab, IonFabButton, IonModal} from '@ionic/vue';
import {ellipsisVertical, headset, trash, add} from 'ionicons/icons';
import NewNote from "@/components/NewNote.vue";
import {useStore} from 'vuex';

// data: {
//     color: 'warning', 'danger'
// }

export default defineComponent({

    components:{
        IonPage, IonToolbar, IonButtons, IonBackButton, IonIcon, IonContent, IonCardTitle, IonCardSubtitle, IonListHeader, IonItemSliding,
        IonItemOption, IonItemOptions, IonCheckbox, IonLabel, IonList, IonItem, IonFab, IonFabButton, IonModal, NewNote
    
    },
    data(){
        return {
            selected: 'primary',
            colors: ['warning','danger']
        }
    },
    setup(){
       function mudarcor(item){
               const result = [];
               console.log(item.noteColor)
               if(item.noteColor == 'azul'){
                   console.log("É primary")
                   result.push('#1565C0');
               }else if( item.noteColor == 'amarelo'){
                   result.push('#FBC02D')
               }else if(item.noteColor == 'verde'){
                   result.push('#558B2F')
               }else if(item.noteColor == 'roxo'){
                   result.push('#4527A0')
               }else if(item.noteColor == 'laranja'){
                   result.push('#E64A19')
               }else{
                   result.push('#455A64')
               }
               return result;
        }
       
       

        const isOpenNewNote = ref(false);
        const store = useStore();
        const state = reactive({
            notes: computed(() => {
                return store.state.notes;
            })
        })
        function getNotes(){
            store.commit('getNotes');
        }
        function doneNote(item) {
            store.commit('doneNote',item);
        }
        function notDoneNote(item) {
            store.commit('notDoneNote',item);
        }
        function deleteNote(item) {
            store.commit('deleteNote',item);
        }
        onMounted(()=>{
            if(store.state.tasks.length == 0){
                getNotes();
            }
        })
        return {
            isOpenNewNote, mudarcor,
            ellipsisVertical, headset, trash, add, store, state, getNotes, doneNote, notDoneNote, deleteNote
        }
    }

})
</script>

<style>
</style>