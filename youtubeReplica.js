var likes = 0;
var dislikes = 0;

function submit() {
    var text = document.getElementById("searchBar").value;
    console.log(text);
}

function addLike() {
    likes++;

    document.getElementById("like").innerHTML = likes;
}

function addDislike() {
    dislikes++;

    document.getElementById("dislike").innerHTML = dislikes;
}

function videoSubmit() {
    window.location.href = "videoSubmit.html";
}

function video() {
    var title = sessionStorage.getItem("title");
    var id = sessionStorage.getItem("id");

    if (title != null && id != null) {
        document.getElementById("videoTitle").innerHTML = title;
        document.getElementById("video").src = "https://www.youtube.com/embed/" + id;
    }
}