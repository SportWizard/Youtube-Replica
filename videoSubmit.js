function submit() {
    var title = document.getElementById("title").value;
    var url = document.getElementById("url").value;

    const id = url.substring(url.lastIndexOf("/") + 1);

    sessionStorage.setItem("title", title);
    sessionStorage.setItem("id", id);
}

function home() {
    window.location.href = "youtubeReplica.html";
}