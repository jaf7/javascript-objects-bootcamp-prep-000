var playlist = {
  Myth: "Beach House",
  Odesza: "A Moment Apart"
};

function updatePlaylist( obj, artist, song ) {
  var updatedPlaylist = Object.assign( {}, obj, {artist: song})
}