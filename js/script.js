'use strict';

/*--------------------------- MINIMUM ---------------------------*/

let currentElement = document.querySelector('#edit-text');

document.addEventListener('keydown', (event) => {
  if(event.ctrlKey && event.key === 'e'){
    event.preventDefault();

    if(currentElement.tagName === 'DIV'){
      const newTextArea = document.createElement('textarea');
      newTextArea.value = currentElement.textContent;
      currentElement.parentNode.replaceChild(newTextArea, currentElement);
      currentElement = newTextArea;
      newTextArea.focus();
    }
  }

  if(event.ctrlKey && event.key === 's'){
    event.preventDefault();

    if(currentElement.tagName === 'TEXTAREA'){
      const newDiv = document.createElement('div');
      newDiv.textContent = currentElement.value;
      currentElement.parentNode.replaceChild(newDiv, currentElement);
      currentElement = newDiv;
    }
  }
})

/*--------------------------- MEDIUM ---------------------------*/

// Функція сортування таблиці
document.querySelectorAll('#sortable-table th').forEach((header, columnIndex) => {
  header.addEventListener('click', () => {
      const table = document.querySelector('#sortable-table');
      const rows = Array.from(table.rows).slice(1);
      const isNumberColumn = !isNaN(rows[0].cells[columnIndex].innerText);

      rows.sort((a, b) => {
          const aValue = isNumberColumn
              ? +a.cells[columnIndex].innerText
              : a.cells[columnIndex].innerText;

          const bValue = isNumberColumn
              ? +b.cells[columnIndex].innerText
              : b.cells[columnIndex].innerText;

          if (columnIndex === 3) {
              return bValue - aValue;
          } else {
              return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
          }
      });

      rows.forEach(row => table.tBodies[0].appendChild(row));
  });
});




/*--------------------------- MAXIMUM ---------------------------*/

const resizableBlock = document.querySelector('#resizable');
const resizerBlock = document.querySelector('#resizer');

resizerBlock.addEventListener('mousedown', (event) => {
  event.preventDefault();

  const startX = event.clientX;
  const startY = event.clientY;
  const startWidth = resizableBlock.offsetWidth;
  const startHeight = resizableBlock.offsetHeight;

  function resizeBlock(event) {
    const newWidth = startWidth + (event.clientX - startX);
    const newHeight = startHeight + (event.clientY - startY);

    if(newWidth > 50) resizableBlock.style.width = newWidth + 'px';
    if(newHeight > 50) resizableBlock.style.height = newHeight + 'px';
  }

  function stopResize(){
    window.removeEventListener('mousemove', resizeBlock);
    window.removeEventListener('mouseup', stopResize);
  }

  window.addEventListener('mousemove', resizeBlock);
  window.addEventListener('mouseup', stopResize);
})