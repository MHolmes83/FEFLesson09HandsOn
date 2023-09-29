function meet() {
    let einsteinRequest = new XMLHttpRequest();
    einsteinRequest.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let einsteinObject = JSON.parse(this.responseText);
            document.getElementById("einsteinBio").innerHTML = einsteinObject.name;
            document.getElementById("einsteinBio").innerHTML = einsteinObject.birthday;
            document.getElementById("einsteinBio").innerHTML = einsteinObject.bio;
        }
    };

    einsteinRequest.open("GET", "einstein.json", true);
    einsteinRequest.send();
}