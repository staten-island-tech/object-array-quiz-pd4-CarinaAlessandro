const presidents = [
  { name: "Donald Trump", terms: 1, party: "R" },
  { name: "Barack Obama", terms: 2, party: "D" },
  { name: "George W. Bush", terms: 2, party: "R" },
  { name: "Bill Clinton", terms: 2, party: "D" },
  { name: "George H.W. Bush", terms: 1, party: "R" },
  { name: "Ronald Reagan", terms: 2, party: "R" },
  { name: "Jimmy Carter", terms: 1, party: "D" },
  { name: "Gerlad Ford", terms: 1, party: "R" },
  { name: "Richard Nixon", terms: 2, party: "R" },
  { name: "John F. Kennedy", terms: 1, party: "D" },
  { name: "Lyndon Johnson", terms: 2, party: "D" },
  { name: "Dwight Eisenhower", id="lbj", terms: 2, party: "R" },
];

//Challenge Questions
//1) Filter all presidents, leaving only the Democratic ones
const democrat = presidents.filter((presidents) => presidents.party === "D");
console.table(democrat);
//2)Filter all presidents to leave only one term Republican presidents HINT use If statement
const oneTerm = presidents.filter(function (president) {
  if (president.terms === 1 && president.party === "R") {
    return true;
  }
});
console.table(oneTerm);
//3) return only the last three presidents
const three = presidents.slice(0, 3);
console.table(three);
//4) log all dems who served 2 terms. HINT use chain filter, filter and slice
const twoTerms = presidents.filter(function (president) {
  if (president.terms === 2 && president.party === "D") {
    return true;
  }
});
console.table(twoTerms);
//BONUS write a script to check if LBJ was a 2 term president. IF he was then alert("LBJ served two terms") else alert "LBJ was one and done"
const lyndon = presidents.filter(function(president){
  if(president.id === lbj && president.terms === 2){
    console.log("LBJ served two terms")
  }
  else{
console.log("LBJ was one and done")
  }
})