var links;


links = ['google', 'sky news', 'https://barclays.co.uk/', 'CYF', 'bbc'];
while (!!links.length) {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_list = document.getElementById('list');
  let new_li = document.createElement('li');
  let new_a = document.createElement('a');
  new_a.innerText = links.shift();
  new_a.setAttribute("href", links.shift());

  new_li.appendChild(new_a);

  element_list.appendChild(new_li);
}