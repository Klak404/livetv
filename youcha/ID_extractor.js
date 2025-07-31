/*Id extractor*/
var els = document.getElementsByClassName('yt-simple-endpoint style-scope ytd-playlist-video-renderer');
var ids = [];
for (var i = 0; i < els.length; i++) {
  var href = els[i].href;
  var vid = href.split('?v=')[1].split('&list')[0];
  ids.push(vid);
}
console.log(ids);
