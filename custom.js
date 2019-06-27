var video, firstFileName, secondFileName, forEach;

forEach = Array.prototype.forEach;
video = document.getElementById('vid');

firstFileName = video.getAttribute('data-firstfile');
secondFileName = video.getAttribute('data-secondfile');

video.addEventListener('ended', function() {
  sources = this.getElementsByTagName('source');

  // check to see if the last video is not loaded
  if(sources[0].src.indexOf(secondFileName) === -1){
    forEach.call(sources, function(source) {
      source.src = source.src.replace(firstFileName, secondFileName);
    });

    this.load();
    this.play();
  }
});