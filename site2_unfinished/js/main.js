const press1 = document.querySelector('.press1');
const press2 = document.querySelector('.press2');
const press3 = document.querySelector('.press3');
const press4 = document.querySelector('.press4');

const rulang = document.querySelector('.ru-language');
const enlang = document.querySelector('.en-language');
const rulangtext = document.querySelector('.ru-text');
const enlangtext = document.querySelector('.en-text');

const block1 = document.querySelector('.block1');
const block2 = document.querySelector('.block2');
const block3 = document.querySelector('.block3');
const block4 = document.querySelector('.block4');

function growblock(el) {
  el.style.width = el.style.width != '100%' ? "100%" : '';
}


rulang.addEventListener('click', () => {
	rulangtext.style.display = '';
  enlangtext.style.display = 'none';
})

enlang.addEventListener('click', () => {
  rulangtext.style.display = 'none';
  enlangtext.style.display = 'inline';
})

press1.addEventListener("click", () => {
	growblock(block1)
  block2.style = "";
  block3.style = "";
  block4.style = "";
})

press2.addEventListener("click", () => {
  growblock(block2);
  block1.style = "";
  block3.style = "";
  block4.style = "";
})

press3.addEventListener("click", () => {
  growblock(block3);
  block1.style = "";
  block2.style = "";
  block4.style = "";
})

press4.addEventListener("click", () => {
  growblock(block4);
  block1.style = "";
  block2.style = "";
  block3.style = "";
})