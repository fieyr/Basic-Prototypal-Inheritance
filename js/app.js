const playlist = new Playlist();

const hereComesTheSun = new Song("Here Comes the Sun", "The Beatles", "2:45");
const walkingOnSunshine = new Song("Walking on Sunshine", "Katrina and the Waves", "3:43");
const manOfSteel = new Movie("Man of Steel", 2013, "2:23:00");

playlist.add(hereComesTheSun);
playlist.add(walkingOnSunshine);
playlist.add(manOfSteel);

const playlistElement = document.getElementById("playlist");
playlist.renderInElement(playlistElement);

const playButton = document.getElementById("play");
playButton.onclick = function() {
	playlist.play();
	playlist.renderInElement(playlistElement);
}
const nextButton = document.getElementById("next");
nextButton.onclick = function() {
	playlist.next();
	playlist.renderInElement(playlistElement);
}
const stopButton = document.getElementById("stop");
stopButton.onclick = function() {
	playlist.stop();
	playlist.renderInElement(playlistElement);
}