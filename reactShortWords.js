let words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 

let smallNumbers = words.filter(function(word) {
  return word.length < 250;
});

console.log(smallNumbers);
