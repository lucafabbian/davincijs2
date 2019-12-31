/** DaVinciApi 2.0
Nuova versione del codice "puro", slegato dal framework
esporta di default

In questo file sono contenuti tutti i metodi necessari per comunicare con il
server del liceo. */

// Fetch configuration
import axios from 'axios'

// Url configuration
const davURL = 'http://liceodavinci.edu.it' // non cifrato e lento, non aggiunge gli header CORS perciò è inutilizzabile per ora
const cacheURL = 'https://davapi.antonionapolitano.eu' // utilizza https/2.0 e una cache per rendere sicura la connessione e ridurre il tempo di risposta
const baseURL = cacheURL // per ora quindi viene utilizzato di default il proxy

//
const api = axios.create({ baseURL })



/** Api */
export default {
  baseURL,

  // Controlla se l'api e' online
  isOnline: () => api.get('api/teapot').catch( (err) => err.response.status === 418 ),


  // Slideshow dal sito
  fetchSlideshowSito: () => api.get("sitoLiceo/").then(
    r => [...new DOMParser().parseFromString(r.data, 'text/html')
      .querySelectorAll ('ul.sprocket-features-img-list li')].map( (el) => ({
        url:  davURL + el.children[0].children[0].getAttribute('href'),
        img:   baseURL + el.children[0].children[0].children[0].getAttribute('src'),
        title: el.children[1].children[0].textContent
      }))
  ),

  // News interne
  fetchInternalNews: () => axios.get("/davincijs/dist/news/news.json").then(r => r.data.news),


  /**
  il filtro è una stringa JSON del tipo {"prima":xxxxxxxxxx,"dopo":yyyyyyyyyy} '
  con x e y le rappresentazioni in tempo unix dell'intervallo di tempo da considerare */
  fetchAgenda: (filter)  => api.post('api/agenda', filter).then(r => r.data),

  /** Restituisce la lista delle classi */
  fetchClassi: () =>  api.get ('api/classi').then(r => r.data.sort()),

  /** Restituisce una lista ordinata dei nomi dei docenti */
  fetchDocenti: () =>  api.get('api/docenti').then(
    r => r.data.sort((a,b) => (a.cognome.localeCompare(b.cognome)))
  ),


  fetchOrarioClasse : (classe)  => api.get ('api/orario/classe/' + classe),
  fetchOrarioDocente: (docente) => api.post('api/orario/docente/', docente),




  // Comunicati
  urlComunicato: (url) => url.replace('http://www.liceodavinci.tv/', 'https://davapi.antonionapolitano.eu/'),
  serializeComunicato: comunicato => JSON.stringify({url: comunicato.url}),
  fetchComunicati: (url, last = '') => api.get(`api/comunicati/${url}${last ? '/' + last : ''}`).then(
    r => r.data.map( comunicato => ({
        ...comunicato,
        number: (comunicato.nome.match(/^[0-9]*/) || ["0"])[0] || "000" ,
        title: comunicato.nome.substring(((comunicato.nome.match(/^[0-9]*/) || ["0"])[0] || "0").length + 1).replace(".pdf", "").replace(/\_/g," "),
        urlName: comunicato.url.substring(comunicato.url.lastIndexOf('/')),
    }))
  )

}
