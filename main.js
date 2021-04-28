// //exo1
// let x = ["kevin","alexis", "junior", "andy","anthony","junior","tania","oussama","issam" ];
// let i = 0;
// while (i < 9) {
//     console.log("Bonjour " + x[i]);
//     i++
// }
//exo2
// let fruits = ["banane", "mange", "pomme", "figue", "pamplemouse", "mur"];
// let i =0;
// while ( i< fruits.length) {
//     fruits.splice(0, 1)
// }
// console.log(fruits);
//exo3
// let panierLegumes =["leugume1","leugume2","leugume3","leugume4"];
// let caisseLegumes =[];
// let longeur = panierLegumes.length;
// let i =0;
// while( longeur  !=0){
//     caisseLegumes.push(panierLegumes[0]);
//     panierLegumes.splice( 0, 1);
//     longeur--;
// }
// console.log(panierLegumes );
// console.log(caisseLegumes);
//exo4
// let regime = prompt(' vous avez commencer le regime ?');
// while (regime != true) {
//     regime =prompt(' vous avez commencer le regime ?')
// }
// console.log('felicitation');
//exo5
// let regime = prompt(' vous avez commencer le regime ?');
// do {
//     if (regime == true) {
//         console.log('felicitation');
//     }
// } while (regime != true);
// regime =prompt(' vous avez commencer le regime ?')
//exo6
// let annee1 = 2021;
// let annee = Math.round(Math.random()*(annee1 - 1970)) +1970;
// console.log(annee);
// let  age;
// let reslt = annee1 - annee;
// let essaie = 0 ;
// do {
//     age = parseInt(prompt(`Si je suis née en ${annee}(année généré aléatoirement), quel age ai-je aujourd’hui ?`));
//     if (age ==  reslt) {
//         alert('felicitation', reslt)
//     }
//     else{
//         alert('ressayer');
//         essaie++;
//     }
// } while (age != reslt && essaie != 3);
// alert(reslt)
//exo7
// let fruit =[];
// let max = prompt("Choissisez un nombre max d'Ã©tudiant");

// while (fruit.length != max) {
//     fruit.push(prompt("rentrez un nom"))
//     console.log(fruit);
//     let desire =prompt('nom du fruit');
    
    
// }
