// Estraggo la funzione createApp dall'oggetto Vue
const { createApp } = Vue;

// Creo l'istanza di Vue da montare in pagina
createApp({
    data() {
        return {
            message: 'Template HTML CSS Vue',
        };
    }
  // Monto l'istanza di Vue in pagina
}).mount('#app');