var count2;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}


count2 = 0;
count2 = 0;


document.getElementById('button').addEventListener('click', (event) => {
  if (getNumberOrString(document.getElementById('text').value) == 'sheep') {
    count2 = (typeof count2 === 'number' ? count2 : 0) + 1;
    let element_sheep_count = document.getElementById('sheep_count');
    element_sheep_count.innerText = count2;
  }
  if (getNumberOrString(document.getElementById('text').value) != 'sheep') {
    count2 = (typeof count2 === 'number' ? count2 : 0) + 1;
    let element_0ther_count = document.getElementById('0ther_count');
    element_0ther_count.innerText = count2;
  }

});