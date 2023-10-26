const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the default behavior
  event.preventDefault();
  // Store the event for later use
  window.deferredPrompt = event;

  // TODO: Update UI to indicate that the app can be installed
});

// Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  const deferredPrompt = window.deferredPrompt;

  if (deferredPrompt) {
    // Show the installation prompt to the user
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    const choiceResult = await deferredPrompt.userChoice;

    if (choiceResult.outcome === 'accepted') {
      console.log('User accepted the install prompt');
    } else {
      console.log('User dismissed the install prompt');
    }

    // Reset the deferredPrompt variable
    window.deferredPrompt = null;
  }
});

// Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  console.log('App installed by user');
  // TODO: Update UI to indicate that the app has been installed
});
