<template>
  <div class="chat container">
    <h2 class="center teal-text">Ninja Chat</h2>
    <div class="card">
      <div class="card-content">
        <ul class="messages">
          <li>
            <span class="teal-text">Name</span>
            <span class="grey-text text-darken-3">message</span>
            <span class="grey-text time">time</span>
          </li>
        </ul>

      </div>
      <div class="card-action">
        <NewMessage :name="name"></NewMessage>
      </div>
    </div>
  </div>
</template>

<script>
import NewMessage from '@/components/NewMessage';
import db from '@/firebase/init';
import moment from 'moment';

export default {
  name: 'Chat',
  props: ['name'],
  components: {
    NewMessage
  },
  data(){
    return{
      messages: []
    };
  },
  created(){
    let ref = db.collection('message').orderBy('timestamp'); // order messages by timeout
    ref.onSnapshot(snapshot => {
      console.log('snap', snapshot.docChanges);
      snapshot.docChanges.forEach(change => {
        if (change.type === 'added') {
          let doc = change.doc;
          this.messages.push({
            id: doc.id,
            name: doc.data().content,
            timestamp: moment(doc.data().timestamp).format('lll')
          });
        }
      });
    });
  }
}
</script>

<style>
  .chat h2{
    font-size: 2.6em;
    margin-bottom: 40px;
  }

  .chat span{
    font-size: 1.4em;
  }

  .chat .time{
    display: block;
    font-size: 1.2em;
  }

  li{
        list-style-type: none;
    }
  .messages{
        max-height: 300px;
        overflow: auto;
    }
  .message::-webkit-scrollbar-track{
        background: #ddd;
    }
</style>
