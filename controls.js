document.addEventListener('keydown', function(event) {
  let url = null;
  switch(event.key) {
    case '1':
      url = 'https://klak404.github.io/livetv/ert1';
      break;
    case '4':
      url = 'https://klak404.github.io/livetv/mega';
      break;
    case '5':
      url = 'https://klak404.github.io/livetv/ant1';
      break;
    case '6':
      url = 'https://klak404.github.io/livetv/alpha';
      break;
    case '7':
      url = 'https://klak404.github.io/livetv/starr';
      break;
    case '8':
      url = 'https://klak404.github.io/livetv/skai';
      break;
    case '9':
      url = 'https://klak404.github.io/livetv/open';
      break;
  }

  if (url) {
    event.preventDefault();
    window.location.replace(url);
  }
});
