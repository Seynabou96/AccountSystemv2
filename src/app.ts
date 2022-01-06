// const typeOp = document.querySelector('#typeOperation')
// const montant = document.querySelector('#montant')
// const motif = document.querySelector('#motif')
const form = document.querySelector('form')!
//console.log(form)
//console.log(typeOp,montant,motif)
// const arrayType = [];
// const arrayMontant = [];
// const arrayMotif = [];

// typeOp?.addEventListener('change',(e)=>{
//     if(e.target.value!==""){
//             arrayType.push(e.target.value!)
//     }

// })
// montant?.addEventListener('change',(e)=>{
//     if(e.target.value!==""){
//         arrayMontant.push(e.target.value!)

//     }
// })
// motif?.addEventListener('change',(e)=>{
//     if(e.target.value!==""){

//         arrayMotif.push(e.target.value)
//     }
// })
const typeOp = document.querySelector('#typeOperation')!
    const montant = document.querySelector('#montant')!
    const motif = document.querySelector('#motif')!
    const liste = document.querySelector('.listeOrdonnee')!

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (typeOp.value !== "" && montant.value>0 && motif.value.length>=5) {
       
        if(typeOp.value ==='debit'){
           liste.innerHTML += `<li class = "itemlistdebit">
           Débit:<br>
           ${montant.value} déposait suite à un(e)${motif.value}
           </li><hr>`
        }
        if(typeOp.value==='credit'){
            liste.innerHTML += `<li class = "itemlistcredit">
            Crédit:<br>
            ${montant.value} déposait suite à un(e)${motif.value}
            </li><hr>`
        }
    }
    else {
        console.log('non');
    }
    typeOp.value = "";
    montant.value = '';
    motif.value = "";

})
