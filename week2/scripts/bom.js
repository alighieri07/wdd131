const input = document.querySelector('#bookInput');
const button = document.querySelector('#addBtn');
const list = document.querySelector('#chapterList');

function addChapter() {
  if (input.value.trim() === '') {
    alert('Please enter a Book and Chapter');
    return;
  }

  const li = document.createElement('li');
  li.className = 'chapter-item';

  const span = document.createElement('span');
  span.textContent = input.value;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = '❌';
  deleteButton.setAttribute('aria-label', 'Remove ' + input.value);

  deleteButton.addEventListener('click', function() {
    list.removeChild(li);
  });

  li.appendChild(span);
  li.appendChild(deleteButton);

  list.appendChild(li);

  input.value = '';
  input.focus();
}

button.addEventListener('click', addChapter);

input.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    addChapter();
  }
});

