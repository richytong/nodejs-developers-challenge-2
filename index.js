const { pipe, fork, assign, tap, map, transform, get } = require('rubico')

const equation = x => x ** 7 / 7 - (117649 * x)

const range = (start, end) => Array.from({ length: end - start }, (x, i) => i + start)

const getMinimumPoint = (f, x) => {
  let minYi = Infinity
  let minXi = -1
  for (const xi of x) {
    const yi = f(xi)
    if (yi < minYi) {
      minYi = yi
      minXi = xi
    }
  }
  return minXi
}

const number = '16791573288892525934609440079317541905554393653557736896280802239551592289061061348368963'

const generateIncrements = n => function*(s) {
  for (let i = 0; i < s.length; i += n) {
    yield s.slice(i, i + n)
  }
}

const trace = tap(console.log)

const identity = x => x

const toBinaryString = x => x.toString(2)

pipe([
  BigInt,
  toBinaryString,
  generateIncrements(
    getMinimumPoint(equation, range(-10, 10))
  ),
  transform(map(pipe([
    identity,
    x => parseInt(x, 2),
    String.fromCharCode,
  ])), []),
  trace,
])(number)
