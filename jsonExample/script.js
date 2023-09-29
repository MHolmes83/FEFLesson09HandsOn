let newRequest = new XMLHttpRequest();
newRequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let myObj = JSON.parse(this.responseText);
        document.getElementById("example").innerHTML = myObj.name;
    }
};

let gitHubRequest = new XMLHttpRequest();
gitHubRequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let gitObject = JSON.parse(this.responseText);
        document.getElementById("gitBio").innerHTML = gitObject.bio;
    }
};

newRequest.open("GET", "new.json", true);
newRequest.send();

gitHubRequest.open("GET", "https://api.github.com/users/MHolmes83", true);
gitHubRequest.send();