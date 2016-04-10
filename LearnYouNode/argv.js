var i = 2;
var sum = 0;
while (i < process.argv.length) {
    sum = sum + Number(process.argv[i]);
    i = i+1;
}
console.log(sum);
