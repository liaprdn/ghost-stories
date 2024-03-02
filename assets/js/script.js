// function to redirect to youtube using window alert and onclick event

function ytDirect(videoUrl) {
    var ytDirect = confirm("You'll be directed to YouTube. Proceed?");
    if (ytDirect) {
        window.location.href = videoUrl;
    } else {
        // back to website
    }
}

// same but with spotify
function openSpotify(albumUrl) {
    var openSpotify = confirm("You'll be directed to Spotify. Proceed?");
    if (openSpotify) {
        window.location.href = albumUrl;
    } else {
        // back to website
    }
}
