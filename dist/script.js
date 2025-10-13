const novoBtn = document.getElementById('novoBtn');
const usadoBtn = document.getElementById('usadoBtn');

novoBtn.addEventListener('click', () => {
  novoBtn.classList.add('bg-black', 'text-white');
  usadoBtn.classList.remove('bg-black', 'text-white');
  usadoBtn.classList.add('bg-gray-200', 'text-gray-800');
});

usadoBtn.addEventListener('click', () => {
  usadoBtn.classList.add('bg-black', 'text-white');
  novoBtn.classList.remove('bg-black', 'text-white');
  novoBtn.classList.add('bg-gray-200', 'text-gray-800');
});
