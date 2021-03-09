<template>
  <ion-page>
      <div class="mt-2">
          <h2 class="text-center text-2x1 font-semibold">Nova Tarefa</h2>
      </div>

        <Form class="flex flex-col justify-center h-full">
            <div>
                <ion-item>
                    <Field v-slot="{field}" name="taskField" 
                    :rules="isRequired" v-model="task"> 
                        <ion-input v-bind="field" type="text" name="taskField"
                        placeholder="O que está planejando ?"></ion-input>
                    </Field>
                </ion-item>

                 <ion-item lines="none">
                     <ErrorMessage v-slot="{message}" name="taskField">
                         <ion-text color="danger" v-if="message"></ion-text>
                     </ErrorMessage>
                </ion-item>

            </div>
        </Form>
      <ion-fab vertical="top" horizontal="end" slot="fixed" class="cursor-pointer" @click="$emit('close-modal')">
          <ion-icon :icon="close" class="text-3x1"></ion-icon>
      </ion-fab>
  </ion-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { IonPage, IonFab, IonIcon, IonItem, IonInput, IonText } from '@ionic/vue';
import {close} from "ionicons/icons";
import { Form, Field, ErrorMessage } from 'vee-validate';

export default defineComponent({
    components:{
        IonPage, IonFab, IonIcon, IonItem, IonInput, IonText,
        Form, Field, ErrorMessage
    },
    setup(){
        const task = ref('');
        const isRequired = (value) => {
            if(!value){
                return 'Esse campo é preciso preencher';
            }
            return true;
        }
        return{
            isRequired, task,
            close
        }
    }
})
</script>

<style>

</style>