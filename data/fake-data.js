const carMakeModels = [
  ['Honda', 'Civic'],
  ['Toyota', 'Prius'],
  ['Audi', 'A1'],
  ['Audi', 'A2'],
  ['Audi', 'A3'],
  ['Audi', 'A4'],
  ['BMW', 'X1'],
  ['Ford', 'Kuga'],
  ['Honda', 'CR-V'],
  ['Ford', 'Kuga'],
  ['Nissan', 'Leaf'],
  ['Tesla', 'Model-S'],
];

const generateVin = () => {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

  for (let i = 0; i < 17; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};

const generateMakeModel = () => {
  return carMakeModels[ Math.floor(Math.random() * carMakeModels.length) ]
}

module.exports = {
  generateVin,
  generateMakeModel,
};
