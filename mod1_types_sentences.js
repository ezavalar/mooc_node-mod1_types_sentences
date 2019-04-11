console.log();
let hour= new Date().getHours();
if(hour>=7 && hour<=12)
	console.log("Good morning, it's "+hour+" o'clock");
else if(hour>=13 && hour<=22)
	console.log("Good afternoon, it's "+hour+" o'clock");
else
	console.log("Good night, it's "+hour+" o'clock");
console.log();
console.log("Number PI with 6 decimals: "+(Math.PI).toFixed(6));
console.log();
for(var num=0; num<=22; num++)
{
	console.log(num+" dec= "+(num).toString(16)+" hex= "+(num).toString(8)+" oct= "+(num).toString(2)+" bin");
}
console.log();
for(let num=1; num<=21; num++)
{
		if(num%2!=0 && !(num>=10 && num<=20))
			console.log(num+" dec= "+(num).toString(16)+" hex= "+(num).toString(8)+" oct= "+(num).toString(2)+" bin");
}
console.log();
console.log("Hi in Chinese is written as: \u55e8\uff0c\u4f60\u597d\u5417");
console.log();
console.log("The program has finished");