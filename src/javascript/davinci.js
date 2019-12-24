import { writable } from 'svelte/store';
import davinciApi  from './davinciApiRaw.js'




const fetchable = (key, empty, fetch) => {
  const { subscribe, set, update } = writable(localStorage.getItem(key) || empty);
  subscribe( r => localStorage.setItem(key, JSON.stringify(r)))
  fetch().then(r => set(r))
  return {
    subscribe,
    fetch: (...args) => fetch(...args).then( r => (set(r), r)),
  }
}

export const internalNews       = fetchable("dav-internal-news", [], davinciApi.fetchInternalNews)
export const comunicatiGenitori = fetchable("dav-comunicati-genitori", [], () => davinciApi.fetchComunicati("genitori"))

export const baseURL = davinciApi.baseURL
