// Sezione commenti
const commentForm = document.getElementById("commentForm");
const nameInput = document.getElementById("nameInput");
const commentInput = document.getElementById("commentInput");
const commentsContainer = document.getElementById("comments-container");

// Carica commenti salvati localmente
document.addEventListener("DOMContentLoaded", () => {
    const savedComments = JSON.parse(localStorage.getItem("comments")) || [];
    savedComments.forEach(comment => addComment(comment));
});

// Aggiungi un nuovo commento
commentForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = nameInput.value.trim();
    const commentText = commentInput.value.trim();

    if (name && commentText) {
        const date = new Date();
        const formattedDate = date.toLocaleString('it-IT', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });

        const newComment = {
            name: name,
            text: commentText,
            date: formattedDate
        };

        addComment(newComment);
        saveComment(newComment);
        nameInput.value = ""; // Svuota il campo nome
        commentInput.value = ""; // Svuota il campo commento
    }
});

// Funzione per aggiungere un commento al DOM
function addComment(comment) {
    const commentDiv = document.createElement("div");
    commentDiv.classList.add("comment");

    const nameDiv = document.createElement("strong");
    nameDiv.textContent = `${comment.name}:`;

    const textDiv = document.createElement("p");
    textDiv.textContent = comment.text;

    const dateDiv = document.createElement("span");
    dateDiv.classList.add("date");
    dateDiv.textContent = `(${comment.date})`;

    commentDiv.appendChild(nameDiv);
    commentDiv.appendChild(textDiv);
    commentDiv.appendChild(dateDiv);

    commentsContainer.appendChild(commentDiv);
}

// Salva un commento localmente
function saveComment(comment) {
    const savedComments = JSON.parse(localStorage.getItem("comments")) || [];
    savedComments.push(comment);
    localStorage.setItem("comments", JSON.stringify(savedComments));
}
