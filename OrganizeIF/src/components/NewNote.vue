<template>
    <ion-page>
        <div class="mt-2">
          <h2 class="text-center text-2x1 font-semibold">Nova Anotação</h2>
      </div>

      <Form @submit="addNote()" class="flex flex-col justify-center h-full">
            <div>
                <ion-item>
                    <Field v-slot="{field}" name="noteField" 
                    :rules="isRequired" v-model="note"> 
                        <ion-input v-bind="field" type="text" name="noteField"
                        placeholder="O que está pensando ? Anote aqui"></ion-input>
                    </Field>
                </ion-item>

                 <ion-item lines="none">
                     <ErrorMessage v-slot="{message}" name="noteField">
                         <ion-text color="danger" v-if="message">{{message}}</ion-text>
                     </ErrorMessage>
                </ion-item>

            </div>

            <div>
                <ion-item>
                    <ion-icon :icon="document" color="primary" slot="start"></ion-icon>
                    <ion-textarea v-model="detail" placeholder="Coloque aqui os detalhes"></ion-textarea>
                </ion-item>
            </div>

            <div>
                    <ion-button expand="block" type="submit">Criar</ion-button>
            </div> 
        </Form>
            <ion-fab vertical="top" horizontal="end" slot="fixed" class="cursor-pointer" @click="$emit('close-modal')">
                <ion-icon :icon="close" class="text-3x1"></ion-icon>
            </ion-fab>
    </ion-page>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { IonPage, IonFab, IonIcon, IonItem, IonInput, IonText, IonTextarea, IonButton } from '@ionic/vue';
import {close, document, grid, thermometerOutline} from "ionicons/icons";
import { Form, Field, ErrorMessage } from 'vee-validate';
import firebase from '@/firebase.ts';
const db = firebase.firestore();

export default defineComponent({
    components:{
        IonPage, IonFab, IonIcon, IonItem, IonInput, IonText, IonTextarea, IonButton,
        Form, Field, ErrorMessage
    },
    setup() {
        const note = ref('');
        const detail = ref('');
        const isRequired = (value) => {
            if(!value){
                return 'Esse campo é preciso preencher';
            }
            return true;
        }

        function addNote(){
            db.collection('notes')
                .add({
                    note: note.value,
                    detail: detail.value,
                    done: false
                })
                .then(() =>{
                    note.value = "";
                    detail.value = "";

                    this.$emit('close-modal');

                    console.log('Document sucessfully added!');
                })
                .catch((error) =>{
                    console.log("Error na escritura do documento no banco: ", error);
                })
        }

        return{
            close, document, grid, thermometerOutline, addNote, isRequired, note, detail
        }
        
    },
})
</script>

<style>

</style>