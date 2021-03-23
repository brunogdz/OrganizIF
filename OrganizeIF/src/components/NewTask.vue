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

            <div>
                <ion-item>
                    <ion-icon :icon="notifications" color="primary" slot="start"></ion-icon>
                    <Field v-slot="{field}" name="duedateField" :rules="isRequired">
                        <ion-datetime v-bind="field" v-model="dueDate"
                        display-format="DD-MM-YYYY HH:mm"
                        display-timezone="utc"
                        value="2021-11-11T00:56:44.646-03:00" max="2025-12-31"></ion-datetime>
                    </Field>
                </ion-item>
                <ion-item lines="none"> 
                    <ErrorMessage v-slot="{message}" name="duedateField">
                         <ion-text color="danger" v-if="message"></ion-text>
                     </ErrorMessage>
                </ion-item>

                <ion-item>
                    <ion-icon :icon="document" color="primary" slot="start"></ion-icon>
                    <ion-textarea v-model="note" placeholder="Coloque aqui os detalhes"></ion-textarea>
                </ion-item>

                <ion-item>
                    <ion-icon :icon="grid" color="primary" slot="start"></ion-icon>
                    <ion-label>Categorias</ion-label>
                    <Field v-model="category" v-slot="{field}" name="categoryField">
                        <ion-select v-bind="field" placeholder="Selecione a categoria">
                            <ion-select-option value="Work">Trabalho</ion-select-option>
                            <ion-select-option value="Scheduler">Horário</ion-select-option>
                            <ion-select-option value="Study">Estudar</ion-select-option>
                            <ion-select-option value="Home">Casa</ion-select-option>
                            <ion-select-option value="Travel">Viagens</ion-select-option>
                            <ion-select-option value="Ideas">Ideias</ion-select-option>
                            <ion-select-option value="Music">Música</ion-select-option>
                            <ion-select-option value="Read">Leitura</ion-select-option>
                            <ion-select-option value="Shopping">Compra</ion-select-option>
                        </ion-select>
                    </Field>
                </ion-item>

                <ion-item lines="none">
                    <ErrorMessage v-slot="{message}" name="categoryField">
                         <ion-text color="danger" v-if="message"></ion-text>
                     </ErrorMessage>
                </ion-item>

                <ion-item>
                    <ion-icon :icon="thermometerOutline" color="primary" slot="start"></ion-icon>
                    <ion-label>Prioridade</ion-label>
                    <Field v-model="priority" v-slot="{field}" name="priorityField">
                        <ion-select v-bind="field" placeholder="Escolha a prioridade">
                            <ion-select-option value="red" class="danger-priority">Alta</ion-select-option>
                            <ion-select-option value="yellow" class="warning-priority">Média</ion-select-option>
                            <ion-select-option value="green" class="sucess-priority">Baixa</ion-select-option>
                            <!-- <ion-button color="success">Success</ion-button>
                            <ion-button color="warning">Warning</ion-button>
                            <ion-button color="danger">Danger</ion-button> -->
                            <!-- Botao nao funfou mas ver se consigo fazer funfar  -->
                        </ion-select>
                    </Field>
                </ion-item>

                <ion-item lines="none">
                    <ErrorMessage v-slot="{message}" name="categoryField">
                         <ion-text color="danger" v-if="message"></ion-text>
                     </ErrorMessage>
                </ion-item>
                    
                <div>
                    <ion-button expand="block" type="submit">Criar</ion-button>
                </div>   
            </div>
        </Form>
      <ion-fab vertical="top" horizontal="end" slot="fixed" class="cursor-pointer" @click="$emit('close-modal')">
          <ion-icon :icon="close" class="text-3x1"></ion-icon>
      </ion-fab>
  </ion-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { IonPage, IonFab, IonIcon, IonItem, IonInput, IonText, IonDatetime, IonTextarea, IonLabel, IonButton } from '@ionic/vue';
import {close, notifications, document, grid, thermometerOutline} from "ionicons/icons";
import { Form, Field, ErrorMessage } from 'vee-validate';

export default defineComponent({
    components:{
        IonPage, IonFab, IonIcon, IonItem, IonInput, IonText, IonDatetime, IonTextarea, IonLabel, IonButton,
        Form, Field, ErrorMessage
    },
    setup(){
        const dueDate = ref('');
        const task = ref('');
        const note = ref('');
        const category = ref('');
        const priority = ref('');
        const isRequired = (value) => {
            if(!value){
                return 'Esse campo é preciso preencher';
            }
            return true;
        }

        function addTask(){

        }
        return{
            isRequired, task, dueDate, note, grid, thermometerOutline,
            close, notifications, document, category, priority
        }
    }
})
</script>

<style>

</style>