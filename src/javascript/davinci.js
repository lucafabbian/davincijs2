import { writable } from 'svelte/store';
import davinciApi  from './davinciApiRaw.js'




const fetchable = (key, empty, fetch) => {
  const { subscribe, set, update } = writable(JSON.parse(localStorage.getItem(key)) || empty);
  subscribe( r => localStorage.setItem(key, JSON.stringify(r)))
  fetch().then(r => set(r))
  return {
    subscribe,
    fetch: (...args) => fetch(...args).then( r => (set(r), r)),
  }
}

export const internalNews       = fetchable("dav-internal-news", "[]", davinciApi.fetchInternalNews)
export const comunicatiStudenti = fetchable("dav-comunicati-studenti", "[]", () => davinciApi.fetchComunicati("studenti"))
export const comunicatiGenitori = fetchable("dav-comunicati-genitori", "[]", () => davinciApi.fetchComunicati("genitori"))
export const comunicatiDocenti  = fetchable("dav-comunicati-docenti" , "[]", () => davinciApi.fetchComunicati("docenti"))
export const classi             = fetchable("dav-classi" , "[]", () => davinciApi.fetchClassi())
export const docenti            = fetchable("dav-docenti" , "[]", () => davinciApi.fetchDocenti())
export const slideshowSito      = fetchable("dav-slideshow-sito", "[]", () => davinciApi.fetchSlideshowSito())


export const baseURL = davinciApi.baseURL
export const serializeComunicato = davinciApi.serializeComunicato
