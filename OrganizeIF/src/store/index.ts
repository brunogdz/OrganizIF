import { createStore } from 'vuex';

import firebase from '@/firebase'
const db = firebase.firestore();

const store = createStore({

    state:{
        notes: Array<any>(),

        tasks: Array<any>(),
        options:{
            year: "numeric", month: "short", day: "numeric",
            hour: "2-digit", minute: '2-digit',hourCycle: 'h24'
        },

        HOJE: (DataF: any) => {
            const dat = new Date();

            return DataF.getDate() == dat.getDate() 
            && DataF.getMonth() == dat.getMonth()
            && DataF.getFullYear() == dat.getFullYear()
        },

        

    },
    getters:{

        today: (state) => {
            return (todayTasks: Array<any>) => todayTasks.filter((item: any) => {
                return state.HOJE(new Date(item.dueDate)) && item.done == false;
            })
        },

        late: (state) => {
            return (lateTasks: Array<any>) => lateTasks.filter((item: any) => {
                return new Date(item.dueDate).getTime() < new Date().getTime()
                    && item.done == false;
            })
        },

        later: (state) => {
            return (laterTasks: Array<any>) => laterTasks.filter((item: any) => {
                return new Date(item.dueDate).getTime() > new Date().getTime()
                && state.HOJE(new Date(item.dueDate)) == false
                && item.done == false;
            })
        },

        done: (state) => {
            return (doneTasks: Array<any>) => doneTasks.filter((item: any) => {
                return item.done == true;
            })
        },
        
        tasksByCategory: (state) => {
            return (category: any) => state.tasks.filter((item: any) => {
                return item.category == category;
            })  
        },
        lengthTasksByCategory: (state) => {
            return (category: any) => state.tasks.filter((item: any) => {
                return item.category == category;
            }).length;
        }
    },
    mutations:{

        getTasks: (state) => {

            state.tasks = [];
            db.collection('tasks')
              .onSnapshot((querySnapshot: any ) => {
                  state.tasks = [];
                  
                  querySnapshot.forEach((doc: any) => {
                    state.tasks.push({
                        id: doc.id,
                        task: doc.data().task,
                        dueDate: new Date(doc.data().dueDate).toLocaleDateString('en-US',state.options),
                        category: doc.data().category,
                        priority: doc.data().priority,
                        note: doc.data().note,
                        done: doc.data().done
                    });
                    
                    console.log(doc.id, " => ", doc.data());

                  })
                  
              })  

        },
        
        doneTask: (state, payload: any) => {
            if (payload.done == false) {
                
                db.collection('tasks')
                  .doc(payload.id)
                  .update({
                      done: true
                  })
                  .then(() => {
                      console.log('Task done');
                  })
                  .catch((error) => {
                    console.log(error);
                  })  
            }
        },

        notDoneTask: (state, payload: any) => {
            if (payload.done == true) {
                
                db.collection('tasks')
                  .doc(payload.id)
                  .update({
                      done: false
                  })
                  .then(() => {
                      console.log('Task not done');
                  })
                  .catch((error) => {
                    console.log(error);
                  })  
            }
        },

        deleteTask: (state, payload: any) => {

            db.collection('tasks')
               .doc(payload.id)
               .delete()
               .then(() => {
                   console.log('Task deleted');
               }) 
        },

        getNotes: (state) => {
            state.notes = [];
            db.collection('notes')
            .onSnapshot((querySnapshot: any) => {
                state.notes = [];

                querySnapshot.forEach((doc: any) =>{
                    state.notes.push({ 
                        id: doc.id,
                        note: doc.data().note,
                        detail: doc.data().detail,
                        subtitle: doc.data().subtitle,
                        noteColor: doc.data().noteColor,
                        createdAt: new Date(doc.data().createdAt).toLocaleDateString('pt-BR', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric'
                          }),
                        done: doc.data().done

                    });

                    console.log(doc.id, "=>", doc.data());
                })
            })
        },

        deleteNote: (state, payload: any) => {

            db.collection('notes')
               .doc(payload.id)
               .delete()
               .then(() => {
                   console.log('Note deleted');
               }) 
        },

        doneNote: (state, payload: any) => {
            if (payload.done == false) {
                
                db.collection('notes')
                  .doc(payload.id)
                  .update({
                      done: true
                  })
                  .then(() => {
                      console.log('notes done');
                  })
                  .catch((error) => {
                    console.log(error);
                  })  
            }
        },

        notDoneNote: (state, payload: any) => {
            if (payload.done == true) {
                
                db.collection('notes')
                  .doc(payload.id)
                  .update({
                      done: false
                  })
                  .then(() => {
                      console.log('notes not done');
                  })
                  .catch((error) => {
                    console.log(error);
                  })  
            }
        }
    }
});


export default store;