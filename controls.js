document.addEventListener('keydown', function(event) {
  let key = event.key;
  let url = null;

  const base = 'https://klak404.github.io/livetv';
  const currentPath = window.location.pathname;

  switch (key) {
    case '0':
      url = `${base}/program`;
      break;
    case '1':
      url = `${base}/ert1`;
      break;
    case '4':
      url = `${base}/mega`;
      break;
    case '5':
      url = `${base}/ant1`;
      break;
    case '6':
      url = `${base}/alpha`;
      break;
    case '7':
      url = `${base}/starr`;
      break;
    case '8':
      url = `${base}/skai`;
      break;
    case '9':
      url = `${base}/open`;
      break;
  }

  if (url) {
    event.preventDefault();

    // Αν είμαστε ήδη στο κανάλι που δείχνει το url, τότε πάμε στην αρχική
    if (window.location.href.startsWith(url)) {
      window.location.replace(base);  // Πήγαινε στην αρχική
    } else {
      window.location.replace(url);   // Πήγαινε στο νέο κανάλι
    }
  }
});
