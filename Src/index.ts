const Str = "Civic";
const reversedStr = Str.split().reverse().join();
console.log(reversedStr);
console.log ();

for (let i=0; i <Str.replaceAll("", "").length; i++){
    const clean = Str.replaceAll(" ", "");
    const reversedString = clean[clean.length-1 -i];
    console.log(reversedString);
}