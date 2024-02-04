const findLongestWord = (wordsArray) => {
    const wordsWithLength = wordsArray.map(word => ({ mot: word, longueur: word.length }));
    const longestWordObject = wordsWithLength.reduce((prev, current) => (prev.longueur > current.longueur) ? prev : current, {});
    return longestWordObject;
  };
  
  const mots = ["a", "aa", "aaaa", "aaaaa", "aaaaaaaaaa"];
  const result = findLongestWord(mots);
 // console.log("Le mot le plus long est :", result.mot);
//  console.log("Sa longueur est :", result.longueur);




//2
  const countOccurrences = (arrayOfArrays) => {
    const flatArray = arrayOfArrays.flat();
    return flatArray.reduce((acc, value) => {
      acc[value] = (acc[value] || 0) + 1;
      return acc;
    }, {});
  };
  
  const tab = [["a", "b","c"],
              ["c", "d", "f"], 
              ["d", "f","g"]];
  const occurrences = countOccurrences(tab);
 // console.log("Occurrences d'éléments distincts :", occurrences);


//3
  let students = [{name:'John' ,id:123, marks:98},
  {name:'Baba',id:101,marks:23},
  {name:'John',id:200,marks:45},
  {name:'Wick',id:115,marks:75},];

  const totalMarks = students
  .map(student => ({ ...student, marks: (student.marks < 50) ? student.marks + 15 : student.marks }))
  .filter(student => student.marks > 50)
  .reduce((total, student) => total + student.marks, 0);

console.log(totalMarks);




//4
let ID = 1; 
const Tab = [
  { nom: "A", valeur: 3 },
  { nom: "B", valeur:4 },
 
];

function ajouterNouvelleEntree(nom, valeur) {
  const nouvelObjet = { nom, valeur, ID: ID++ };
  Tab.push(nouvelObjet);
}

ajouterNouvelleEntree("C", 30);
ajouterNouvelleEntree("D", 40);


module.exports = { ID, Tab, ajouterNouvelleEntree };
