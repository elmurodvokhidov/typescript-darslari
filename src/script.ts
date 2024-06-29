let ism: string = "nimagadur";
ism = "salom";

let yosh: number | string;
// yosh = 'alsdkjf';
yosh = 50;

let massiv: string[] = [];
// massiv = ["salom", "alik"];
massiv.push("text");
// massiv.push(15);

let mixedArr: (string | number | boolean)[] = [];
mixedArr.push("hello");
mixedArr.push(false);
console.log(mixedArr);

let obj: {
    ism: string,
    yoshi: number,
    isMarried: boolean
};

obj = {
    ism: "string",
    yoshi: 15,
    isMarried: true
}

let lyuboy: any;

lyuboy = 20;
lyuboy = ["salom"]