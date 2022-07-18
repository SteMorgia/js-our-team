let componenteDom = document.getElementById('componente');



let team = [
            {
                nome: 'Wayne Barnett',
                posizione:'Founder & CEO',
                immagine: 'wayne-barnett-founder-ceo.jpg'
            },

            {
                nome: 'Angela Caroll',
                posizione:'Chief Editor',
                immagine: 'angela-caroll-chief-editor.jpg'
            },

            {
                nome: 'Walter Gordon',
                posizione:'Office Manage',
                immagine: ' walter-gordon-office-manager.jpg'
            },

            {
                nome: 'Angela Lopez',
                posizione:'Social Media Manager',
                immagine: 'angela-lopez-social-media-manager.jpg'
            },

            {
                nome: 'Scott Estrada',
                posizione:'Developer',
                immagine: 'scott-estrada-developer.jpg'
            },

            {
                nome: 'Barbara Ramos',
                posizione:'Graphic Designer',
                immagine: 'barbara-ramos-graphic-designer.jpg'
            }



]

for (let key in team) {
    console.log(key);
    console.log(team[key]);
}
