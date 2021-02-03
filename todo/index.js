const button = document.getElementById('btn');
button.addEventListener('click' ,() => {
   const input = document.getElementById('new-to');

   const li = document.createElement('li');
   li.innerText = input.value;

   const delButton = document.createElement('button');
   delButton.innerText = 'del';
   li.appendChild(delButton);
   delButton.addEventListener('click', () => {
     const li = delButton.closest('li');
     li.classList.add('no');
   });

   const ul = document.querySelector('ul');
   ul.appendChild(li);
});