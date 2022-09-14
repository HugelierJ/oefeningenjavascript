let i = 0;
let text = "";

for (i; i <= 99; i++) {
    if (i <= 9) {
        text = text + "0" + i + ",";
    } else {
        text = text + i + ",";
    }
    text = text + i + ",";
}
console.log(text);
