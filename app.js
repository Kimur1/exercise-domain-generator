let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];

  let web = ['.us', '.com', '.co.cr','.cr']


       var getRandomName = `${pronoun[Math.floor(Math.random() * pronoun.length)]} 
        ${adj[Math.floor(Math.random() * adj.length)]} 
  ${noun[Math.floor(Math.random() * noun.length)]} 
  ${web[Math.floor(Math.random()* web.length)]}`;

return document.getElementById('random-name').innerHTML = getRandomName();
