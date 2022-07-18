let componenteDom = document.getElementById('componente');
let descrizioneDom = document.getElementsByClassName('card-body');
let immagine = document.getElementsByClassName('card-img-top');


let team = [
            {
                nome: 'Wayne Barnett',
                posizione:'Founder & CEO',
                immagine: '../img/wayne-barnett-founder-ceo.jpg'
            },

            {
                nome: 'Angela Caroll',
                posizione:'Chief Editor',
                immagine: '../img/angela-caroll-chief-editor.jpg'
            },

            {
                nome: 'Walter Gordon',
                posizione:'Office Manage',
                immagine: '../img/walter-gordon-office-manager.jpg'
            },

            {
                nome: 'Angela Lopez',
                posizione:'Social Media Manager',
                immagine: '../img/angela-lopez-social-media-manager.jpg'
            },

            {
                nome: 'Scott Estrada',
                posizione:'Developer',
                immagine: '../img/scott-estrada-developer.jpg'
            },

            {
                nome: 'Barbara Ramos',
                posizione:'Graphic Designer',
                immagine: '../img/barbara-ramos-graphic-designer.jpg',
            }



]

for (let key in team) {
    console.log(key);
    console.log(team[key]);
}

for (let i = 0; i < team.length; i++) {
    descrizioneDom[i].innerHTML += `<div>${team[i].nome}</div>`
    descrizioneDom[i].innerHTML += `<div>${team[i].posizione}</div>`
    immagine[i].setAttribute('src', team[i].immagine)
}


