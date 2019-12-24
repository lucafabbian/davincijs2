import App from './App.svelte';

// Check that service workers are supported
if ('serviceWorker' in navigator) {
  // Use the window load event to keep the page load performant
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/davincijs2/public/sw.js');
  });
}

export default new App({
	target: document.body,
})
