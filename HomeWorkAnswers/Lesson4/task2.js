let attempt = 3;
let rightAnswer = 0;
let wrongAnswer = 0;
const operation = ["+", "-", "*", "/"];
const action = operation[Math.floor(Math.random() * 4)];
const operand1 = Math.floor(Math.random() * 100);
const operand2 = Math.floor(Math.random() * 100) + 1;
const result = Math.round(eval(`${operand1} ${action} ${operand2}`) * 10) / 10;
while (attempt !== 0) {
  let answer = prompt(
    `Введіть відповідь: ${operand1} ${action} ${operand2} = ?\nДробовий результат слід округлити до 1 знака після коми`
  );
  attempt--;
  if (answer == result) {
    rightAnswer++;
    break;
  } else wrongAnswer++;
}

alert(
  `Відповідь: ${result}.\nКількість спроб: ${
    3 - attempt
  }\nКількість неправильних відповідей: ${wrongAnswer}\nКількість правильних відповідей: ${rightAnswer}`
);
