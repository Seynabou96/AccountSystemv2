"use strict";
const form = document.querySelector('form');
const typeOp = document.querySelector('#typeOperation');
const montant = document.querySelector('#montant');
const motif = document.querySelector('#motif');
const liste = document.querySelector('.listeOrdonnee');
let localStore = window.localStorage.account;
let listForm = [];
let liststore = window.localStorage.accounts;

if (liststore){
    liste.innerHTML = liststore;

}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (typeOp.value !== "" && montant.value > 0 && motif.value.length >= 5) {
        listForm.push({
            operation: typeOp.value,
            montant: montant.value,
            motif: motif.value
        });
        console.log(JSON.stringify(listForm));
        window.localStorage.account = JSON.stringify(listForm);
        if (typeOp.value === 'debit') {
            liste.innerHTML += `<li class = "itemlistdebit">
            Débit:<br>
            <span>${montant.value}</span> déposait suite à un(e) ${motif.value}
            </li><hr>`;
            window.localStorage.accounts = liste.innerHTML;
        }
        // the user have to enter a kind of sum (money in $) : in function of typeOp 
        if (typeOp.value === 'credit') {
            liste.innerHTML += `<li class = "itemlistcredit">
            Crédit:<br>
            <span>${montant.value}</span>  déposait suite à un(e) ${motif.value}
            </li><hr>`;
            window.localStorage.accounts = liste.innerHTML;
        }
    }
    else {
        console.log('non');
    }
    typeOp.value = "";
    montant.value = '';
    motif.value = "";
});
