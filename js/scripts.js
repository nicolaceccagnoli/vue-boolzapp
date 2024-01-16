// Estraggo la funzione createApp dall'oggetto Vue
const { createApp } = Vue;

// Creo l'istanza di Vue da montare in pagina
createApp({
    data() {
        return {

            // Creo un contatore per ciclare sul singolo Contatto
            activeContact: 0,

            // Creo una variabile con una stringa vuota per il nuovo messaggio dell'utente
            newMessage: '',

            // Creo una Variabile con una stringa vuota per la ricerca delle chat con i contatti
            searchContact: '',

            // Imposto una Flag che controlli la visibiltà del menu settings dei messaggi
            visibleSettings: null,

            // Creo una Variabile con una stringa vuota per la risposta dell'utente
            newAnswerString: '',


            // Creo l'oggetto utente
            user: {
                name: 'Nicola',
                avatar: './img/nicola.jpeg'
            },

            contacts: [

                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10 Gennaio 2020 15:30',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10 Gennaio 2020 15:50',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10 Gennaio 2020 16:15',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20 Marzo 2020 16:30',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20 Marzo 2020 16:30',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20 Marzo 2020 16:35',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28 Marzo 2020 10:10',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28 Marzo 2020 10:20',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28 Marzo 2020 16:15',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10 Gennaio 2020 15:30',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10 Gennaio 2020 15:50',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10 Gennaio 2020 15:30',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10 Gennaio 2020 15:50',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10 Gennaio 2020 15:30',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10 Gennaio 2020 15:50',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10 Gennaio 2020 15:51',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10 Gennaio 2020 15:30',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10 Gennaio 2020 15:50',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10 Gennaio 2020 15:30',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10 Gennaio 2020 15:50',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10 Gennaio 2020 15:51',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ]

        };
    }, methods: {

        // Creo la funzione per aprire la conversazione 
        contactShow(index) {
            this.activeContact = index;

            this.visibleSettings = null;
        },

        // Creo la funzione per crere i nuovi messaggi dell'utente e la risposta
        newObjMessage() {
            
            this.newRandomString();
            console.log(this.newAnswerString, 'questo è newAnswerString');

            const newDate = new Date();
            
            console.log(newDate);

            const newObj = {
                date: moment().format('LLL'),
                message : this.newMessage,
                status: 'sent'
            }

            if(this.newMessage.trim().length > 0) {
                this.contacts[this.activeContact].messages.push(newObj)

                this.newMessage = '';
            }

        },
        
        // Creo la funzione per cercare le chat degli utenti
        searchChat() {

            // Creo un ciclo che scorra la lista dei contatti
            for (let i = 0; i < this.contacts.length; i++) {

                // Il contatto ciclato ha la chiave a Visible QUANDO lo stesso contatto ciclato INCLUDE le lettere date in input (allora questa assegnazione è TRUTHY)
                // Forma abbreviata 
                this.contacts[i].visible = this.contacts[i].name.toLowerCase().includes(this.searchContact)
            }
        },

        // Creo la funzione per mostrare le impostazioni dei singoli messaggi
        showSettings(i){

            if(this.visibleSettings == null) {

                this.visibleSettings = i;                

            } else {

                this.visibleSettings = null;

            }

        },

        // Creo la funzione per eliminare il messaggio selezionato
        removeMessage() {

            this.contacts[this.activeContact].messages.splice(this.visibleSettings, 1);

            console.log(this.contacts[this.activeContact])

        },
        // Creo la funzione per generare la risposta dell'utente
        newRandomString() {
            // Richiamo la libreria di Axios
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/sentence')     // Tramite la proprietà .get richiamo l'API
                .then((res) => {    
                   
                this.newAnswerString = res.data.response;                           // Uso la risposta dell'Api per creare la risposta casuale dell'utente

                console.log(this.newAnswerString)

                let timeout;

                timeout = setTimeout(() => {
    
                    const newResponse = {
                    date: moment().format('LLL'),
                    message: this.newAnswerString,
                    status: 'received'
    
                }
    
                this.contacts[this.activeContact].messages.push(newResponse)}, 1000)
    
            })
        }
    },
    mounted() {

        console.log(moment);

    }
  // Monto l'istanza di Vue in pagina
}).mount('#app');