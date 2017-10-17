const isFizzBuzz = (num: number) => {
  let result: number | string = ''

  if (num % 3 === 0) result += 'fizz'
  if (num % 5 === 0) result += 'buzz'

  if (num % 3 !== 0 && num % 5 !== 0 || num === 0) result = num

  return result
}

export default isFizzBuzz
