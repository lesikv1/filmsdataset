
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

const func = (min, max) => {
  let str = '';
  const steps = 438
  let flag = false

  for (let i = 0; i < steps; i++) {
    // str.push(`${getRandomIntInclusive(1, 10)}.${getRandomIntInclusive(1, 10)} `)
    str += `${getRandomIntInclusive(min, max)}`;

    if(false) {
     str += `.${getRandomIntInclusive(1, 10)}`;
    }

    str += '\n';
  }

  console.log(str)
}

func(1, 5)
