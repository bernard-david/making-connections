console.log("page loaded...");
var profileName = document.querySelector('#profileName');
var Todd = document.querySelector('#Todd');
var Phil = document.querySelector('#Phil');
var requests = document.querySelector('#requests');
var connections = document.querySelector('#connections');

function changeName() {
    profileName.innerHTML = 'David Bernard';
};

function remove(e, element) {
    if (e == 'Todd') {
        Todd.remove();
        requests.innerHTML--;
    }
    if (e == 'Phil') {
        Phil.remove();
        requests.innerHTML--;
    }
    if (element.alt == 'accept') {
        connections.innerHTML++;
    }
}