const sentence = "Hello there from 18 Mcarthur St ";
 let i = 0;

 const typewritter = () => setTimeout(() => {
   process.stdout.write(sentence[i++]);
   if (i < sentence.length) typewritter();
   //if (i === sentence.length) process.stdout.write('');
 }, 50);

 typewritter();
/*for (const char of sentence) {
  //process.stdout.write;
  setTimeout(() => {
    console.log(char);
  }, 2000) // 
}
*/   