var app = new Vue({
  el: "#root",

  data: {
    contacts: [
      {
        name: "Michele",
        avatar: "avatar_1.jpg",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            text: "Hai portato a spasso il cane?",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            text: "Ricordati di dargli da mangiare",
            status: "sent",
          },
          {
            date: "10/01/2020 16:15:22",
            text: "Tutto fatto!",
            status: "received",
          },
        ],
      },
      {
        name: "Fabio",
        avatar: "avatar_2.jpg",
        visible: true,
        messages: [
          {
            date: "20/03/2020 16:30:00",
            text: "Ciao come stai?",
            status: "sent",
          },
          {
            date: "20/03/2020 16:30:55",
            text: "Bene grazie! Stasera ci vediamo?",
            status: "received",
          },
          {
            date: "20/03/2020 16:35:00",
            text: "Mi piacerebbe ma devo andare a fare la spesa.",
            status: "sent",
          },
        ],
      },
      {
        name: "Samuele",
        avatar: "avatar_3.jpg",
        visible: true,
        messages: [
          {
            date: "28/03/2020 10:10:40",
            text: "La Marianna va in campagna",
            status: "received",
          },
          {
            date: "28/03/2020 10:20:10",
            text: "Sicuro di non aver sbagliato chat?",
            status: "sent",
          },
          {
            date: "28/03/2020 16:15:22",
            text: "Ah scusa!",
            status: "received",
          },
        ],
      },
      {
        name: "Luisa",
        avatar: "avatar_4.jpg",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            text: "Lo sai che ha aperto una nuova pizzeria?",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            text: "Si, ma preferirei andare al cinema",
            status: "received",
          },
        ],
      },
    ],

    selectedContact: {
      name: "Michele",
      avatar: "avatar_1.jpg",
      visible: true,
      messages: [
        {
          date: "10/01/2020 15:30:55",
          text: "Hai portato a spasso il cane?",
          status: "sent",
        },
        {
          date: "10/01/2020 15:50:00",
          text: "Ricordati di dargli da mangiare",
          status: "sent",
        },
        {
          date: "10/01/2020 16:15:22",
          text: "Tutto fatto!",
          status: "received",
        },
      ],
    },

    selectedContactIndex: 0,

    userMessage: "",
  },

  // mounted: function() {
  //   this.selectContact();
  // },

  methods: {
    selectContact: function(contact, i) {
      this.selectedContact = contact;
      this.selectedContactIndex = i;
    },

    handleSubmit: function(userMessage) {
      // milestone 3, step 1
      // console.log(this.contacts[this.selectedContactIndex].messages);
      this.contacts[this.selectedContactIndex].messages.push({ 
        date: this.timeNow(),
        text: userMessage, 
        status: "sent",
      });

      // this.selectedContact.messages.push({ 
      //   date: this.timeNow(),
      //   text: userMessage, 
      //   status: "sent",
      // });

      this.userMessage = "";
      
      // milestone 3, step 2
      setTimeout(() => {
        this.contacts[this.selectedContactIndex].messages.push({ 
          date: this.timeNow(),
          text: "ok", 
          status: "received",
        });
  
      //   // this.selectedContact.messages.push({ 
      //   //   date: this.timeNow(),
      //   //   text: "ok", 
      //   //   status: "received",
      //   // });

      //   console.log(this.selectedContact.messages)
      }, 1000)
    },
    timeNow: function() {
      let now = new Date();
      // console.log(moment(now).format('h:mm a'));
      // return moment(now).format('h:mm a');
      return now;
    },

    displayTime24: function(time) {
      return moment(time).format('HH:mm');
    }
  }
});

Vue.config.devtools = true;
