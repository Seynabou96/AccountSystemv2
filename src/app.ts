
const form = document.querySelector('form')!

const typeOp = document.querySelector('#typeOperation')!
const montant = document.querySelector('#montant')!
const motif = document.querySelector('#motif')!
const liste = document.querySelector('.listeOrdonnee')!
let localStore = window.localStorage.account
let listForm : object [];

form.addEventListener('submit', (e) => {
    e.preventDefault()

    if (typeOp.value !== "" && montant.value > 0 && motif.value.length >= 5) {
        listForm.push({
            operation : typeOp.value,
            montant : montant.value,
            motif : motif.value 
        })
        console.log(JSON.stringify(listForm));
        localStore = listForm
        

        if (typeOp.value === 'debit') {
            liste.innerHTML += `<li class = "itemlistdebit">
            Débit:<br>
            ${montant.value} déposait suite à un(e)${motif.value}
            </li><hr>`;
            localStore = liste.innerHTML; 
            
        }
        // the user have to enter a kind of sum (money in $) : in function of typeOp 
        if (typeOp.value === 'credit') {
            liste.innerHTML += `<li class = "itemlistcredit">
            Crédit:<br>
            ${montant.value} déposait suite à un(e)${motif.value}
            </li><hr>`;

            localStore = liste.innerHTML; 
            
        }
    }
    else {
        console.log('non');
    }
    typeOp.value = "";
    montant.value = '';
    motif.value = "";

})
