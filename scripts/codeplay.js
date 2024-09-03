console.log(9+10)
// output: 19
console.log(4*4)
// output: 16
console.log(4/2)
// output: 2
console.log(4-2)
// output: 2
console.log(6%0)
// output: NaN
console.log(100/0)
// output: Infinity
console.log(2 * 77 % 2 ^ 90)
// output: 90
console.log(2 * 77 % 2 ** 90)
// output: 154
console.log("0" + 45)
// output: 045
console.log(typeof 7 + "3")
// output: number3
console.log(typeof (8 * "3"))
// output: number
console.log(typeof ("8" + 3))
// output: string
console.log("string","manipulation")
// output: string manipulation
console.log("string" + "manipulation")
// output: stringmanipulation
console.log(("string" + 3) * 9)
// output: NaN
console.log(console.log("Hello World"))
// output: Hello World undefined
const a = 5
a = 6
console.log(a)
// output: Uncaught TypeError: Assignment to constant variable.
let b = 5
b = 6
console.log(b)
// output: 6
console.log(5 == "5")
// output: true
console.log(5 === "5")
// output: false
console.log(5 != "5")
// output: false
console.log(5 !== "5")
// output: true
console.log(5 > 5)
// output: false
console.log(5 >= 5)
let c = 5
console.log(c++)
// output: 5
console.log(c)
// output: 6
console.log(++c)
// output: 7
const func = () => {
    console.log("Hello World")
}
func()
// output: Hello World
const func2 = (a, b) => {
    return a + b
}
console.log(func2(5, 6))
// output: 11
const func3 = (a, b) => a + b
console.log(func3)
// output: [Function: func3]
let first = "Hello"
let second = "World"
let third = first + second
console.log(third)
// output: HelloWorld
let fourth = `${first} ${second}`
console.log(fourth)
// output: Hello World
let num
console.log(num)
// output: undefined
console.log(9 === 0)
// output: false
let h = 0
const i = () => h = 1
i()
console.log(h)
// output: 1
const vowels = ["a", "e", "i", "o", "u"]
if ("apple".charAt(0) in vowels) {
    console.log("apple starts with a vowel")
}
// output: apple starts with a vowel
console.log("" === 0)
// output: false
console.log(0 == "")
// output: true
const country = "India"
console.log(country, "has", country.length, "characters")
// output: India has 5 characters