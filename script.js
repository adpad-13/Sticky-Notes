const noteInput = document.getElementById("note-input");
const addBtn = document.getElementById("add-btn");
const notesContainer = document.getElementById("notes-container");

let noteCount = 0;

function createStickyNote() {
  const text = noteInput.value.trim();
  
  if (text === "") {
    return;
  }

  const noteCard = document.createElement("div");
  noteCard.className = "note-card";

  if (noteCount % 3 === 0) {
    noteCard.classList.add("note-blue");
  } else {
    noteCard.classList.add("note-white");
  }
  noteCount++;

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.innerText = "✕";

  deleteBtn.addEventListener("click", function () {
    noteCard.remove();
  });

  const noteText = document.createElement("p");
  noteText.className = "note-text";
  noteText.innerText = text;

  noteCard.appendChild(deleteBtn);
  noteCard.appendChild(noteText);

  const inputCard = noteInput.parentElement;
  notesContainer.insertBefore(noteCard, inputCard);

  noteInput.value = "";
}

addBtn.addEventListener("click", createStickyNote);