
let data = [
  {
    name: 'Petra',
    age: '30'
  },
  {
    name: 'Miloš',
    age: '32'
  },
  {
    name: 'Tatjana',
    age: '20'
  },
  {
    name: 'Tomo',
    age: '27'
  },
  {
    name: 'Mirjam',
    age: '22'
  },
  
  {
    name: 'Tea',
    age: '34'
  }
];

const info = document.querySelector('#info');

let details = data.map(function(item) {
  return '<div>' + item.name + ' ' + 'is ' + item.age + ' years old' + '</div>';
});

info.innerHTML = details.join('\n');
