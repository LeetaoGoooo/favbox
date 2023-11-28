function closeFavBoxPopup() {
    var ele = document.getElementById("favbox-popup");
    ele.style.display = "none";
}

function createFavBoxTag(tag) {
    console.log(`createFavBoxTag:${tag}`);
    var tag = `<span style="background-color: #4CAF50;
    color: white;
    padding: 4px 8px;
    text-align: center;
    border-radius: 5px;
    margin:4px 8px">
    ${tag}
    <svg t="1701074473430" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns=http://www.w3.org/2000/svg"
        p-id="4232" width="16" height="16">
        <path
            d="M512 482.135L708.27 285.87c8.53-8.535 21.33-8.535 29.86 0 8.54 8.535 8.54 21.335 0 29.865L541.87 512l196.26 196.27c8.54 8.53 8.54 21.33 0 29.86-8.53 8.54-21.33 8.54-29.86 0L512 541.87 315.735 738.13c-8.535 8.54-21.335 8.54-29.865 0-8.535-8.53-8.535-21.33 0-29.86L482.135 512 281.6 315.735c-8.535-8.535-8.535-21.335 0-29.87s21.335-8.535 29.865 0L512 482.135z"
            fill="#ffffff" p-id="4233"></path>
    </svg>
    </span>`
    var favboxTags = document.getElementById("favbox-popup-tags");
    favboxTags.insertAdjacentHTML('beforeend', tag);
}

var favboxInputTag = document.getElementById("favbox-popup-tag")
favboxInputTag.addEventListener("keydown", (e) => {
    if (e.key === 'Enter') {
        console.log("key Enter was pressed");
        createFavBoxTag(e.target.value.trim());
    }
})