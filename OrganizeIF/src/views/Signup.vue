<template>
  <ion-content>
    <div class="background-container">
      <ion-page class="page-login">
        <form action="" class="form-login">
          <ion-card>
            <ion-item>
              <h3>Registrar</h3>
            </ion-item>
            <ion-item>
              <ion-label position="floating">Email</ion-label>
              <ion-input required v-bind="field" type="text" name="taskField"
                        placeholder="Insira o seu email" v-model="email"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="floating">Senha</ion-label>
              <ion-input required v-bind="field" type="password" name="taskField"
                        placeholder="Insira sua senha" v-model="password"></ion-input>
            </ion-item>

            <ion-item>
              <ion-button v-on:click="register" type="submit" shape="round">
                Registrar
                <ion-icon slot="end" :icon="logIn"></ion-icon>
              </ion-button>
            </ion-item>
          </ion-card>
        </form>
      </ion-page>
    </div>
  </ion-content>
</template>

<script>
import firebase from 'firebase';
export default {
  name: 'register',
  data: function(){
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    register: function(e){
      firebase.auth().createUserWithEmailAndPassword(this.email.trim(), this.password.trim())
      .then(user => {
        alert(`Criado com sucesso! ${user.email}`);
        this.$router.push('/');
      },
      err => {
        alert(err.message);
        }
      );
      e.preventDefault();
    }
  }
};
</script>