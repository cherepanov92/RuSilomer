export const validatorTextField = (value, length) => {
  const validSymbols = /^[а-яё]*$/i;

  if (!value) {
    throw new Error(`Поле обязательно`);
  }

  if (!validSymbols.test(value)) {
    throw new Error(`Недопустимый символ. Только кириллица`);
  }

  if (value.length <= length[0]) {
    throw new Error(`Минимальная длина ${length[0] + 1} симв.`);
  }

  if (value.length > length[1]) {
    throw new Error(`Максимальная длина ${length[1]} симв.`);
  }
}

export const validatorDigitField = (value, range) => {
  const validSymbols = /^[0-9]*$/i;

  if (!value) {
    throw new Error(`Поле обязательно`);
  }

  if (!validSymbols.test(value)) {
    throw new Error(`Недопустимый символ. Только цифры`);
  }

  if (+value < range[0]) {
    throw new Error(`Значения от ${range[0]}`);
  }

  if (+value > range[1]) {
    throw new Error(`Значение до ${range[1]}`);
  }
}