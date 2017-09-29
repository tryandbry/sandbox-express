const pikachu = () => {
  let obj = {
    1: 'one',
    2: 'two',
    3: 'three',
  };
  let {one,two,three} = obj;

  return `hello ${one} ${two} ${three}!`;
}
