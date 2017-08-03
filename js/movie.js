function Movie(title, year, duration) {
    Media.call(this, title, duration);
    this.year = year;
}
Movie.prototype = Object.create(Media.prototype);

Movie.prototype.toHTML = function() {
    const htmlString = `<li class="${this.isPlaying ? "current": ""}">${this.title} (${this.year}) <span class="duration">${this.duration}</span></li>`;
    return htmlString;
};