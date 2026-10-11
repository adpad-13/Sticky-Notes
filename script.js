const noteInput = document.getElementById("note-input");
const addBtn = document.getElementById("add-btn");
const notesContainer = document.getElementById("notes-container");

let noteCount = 0;
//the basic function to create a note and insert it to the notes container
function createStickyNote() {
  const text = noteInput.value.trim();
  
  if (text === "") {
    return;
  }
  //creating indicidual note cards
  const noteCard = document.createElement("div");
  noteCard.className = "note-card";
  // for the alternate coloring of the note card, restores after every 3 cards
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
  // adding the text and delete button to created card
  noteCard.appendChild(deleteBtn);
  noteCard.appendChild(noteText);

  const inputCard = noteInput.parentElement;
  //inserting the card after the previous card and before the add new note input card
  notesContainer.insertBefore(noteCard, inputCard);
  //reseting the input card
  noteInput.value = "";
}

addBtn.addEventListener("click", createStickyNote);