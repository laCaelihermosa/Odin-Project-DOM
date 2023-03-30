alert('lotso coffee is here');

const container = document.querySelector('#container');

    const p = document.createElement('p');
    p.textContent = "Hey I'm red!";   
    p.style.color = 'red';
    container.appendChild(p);

    const h3 = document.createElement('h3');
    h3.textContent = "I’m a blue h3!!";   
    h3.style.color = 'blue';
    container.appendChild(h3);

    const div = document.createElement('div');
    div.classList.add('content');
    div.style.border = 'solid 5px black'; 
    div.style.backgroundColor = 'pink';
    container.appendChild(div);   

    const divH1 = document.createElement('h1');
    divH1.textContent = "I’m in a div!!";   
    div.appendChild(divH1);

    const divP = document.createElement('p');
    divP.textContent = "ME TOO!";       
    div.appendChild(divP);

   

    