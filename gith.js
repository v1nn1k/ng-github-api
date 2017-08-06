var req = new XMLHttpRequest();

req.open('GET', 'https://api.github.com/users/v1nn1k');
req.send();

req.onload = function() {
    console.log(JSON.parse(this.responseText).public_repos);

}