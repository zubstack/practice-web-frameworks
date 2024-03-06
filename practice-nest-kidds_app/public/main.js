const numberGroups = 5;
const range = [0, 10];

const clickAudio = document.querySelector('#click_audio');
const successAudio = document.querySelector('#success_audio');
const errorAudio = document.querySelector('#error_audio');

const quizForm = document.querySelector('#quizForm');
renderGroups();
quizForm.addEventListener('submit', handleSubmitForm);

async function handleSubmitForm(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const resultsByGroup = [];
  const groupContainers = document.querySelectorAll('.group__container');

  groupContainers.forEach((groupElement) => {
    const groupID = groupElement.id.split('-')[1];
    const labelValue = groupElement.querySelector('label').textContent;
    const options = formData.getAll(`options-${groupID}`);
    resultsByGroup.push({
      id: groupID,
      titular: Number(labelValue),
      checkboxes: options.length,
    });
  });

  checkResults(resultsByGroup);
  // const response = await fetch('/api/grade-quiz', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(answers),
  // });

  // const result = await response.json();
  // showNotification(`Resultado del quiz: ${result.score}`);
}

function renderGroups() {
  for (let index = 0; index < numberGroups; index++) {
    const groupContainer = document.createElement('div');
    groupContainer.id = `group-${index}`;
    groupContainer.classList.add('group__container');
    const groupLabel = document.createElement('label');
    groupLabel.htmlFor = `options-${index}`;
    const groupTitualNumber = getRandomNumber(range[0], range[1]);
    groupLabel.innerText = `${groupTitualNumber}`;
    groupLabel.style.fontFamily = `${getRandomFont()}, sans-serif`;
    const groupCheckboxes = renderCheckboxes(`options-${index}`);
    groupContainer.append(groupLabel, groupCheckboxes);
    quizForm.append(groupContainer);
  }
  renderFormButtons();
  const resetFormButtonElement = document.querySelector('#reset__form__button');
  const restartGroupsButtonElement = document.querySelector('#restart__button');
  resetFormButtonElement.addEventListener('click', resetForm);
  restartGroupsButtonElement.addEventListener('click', restartGroups);
}

function renderCheckboxes(optionsGroup) {
  const checkboxesContainer = document.createElement('div');
  checkboxesContainer.classList.add('checkboxes__container');
  const randomColor = getRandomRainbowColor();
  for (let index = 0; index < 10; index++) {
    const inputCheckbox = document.createElement('input');
    inputCheckbox.classList.add('input_checkbox');
    inputCheckbox.addEventListener('change', function () {
      clickAudio.play();
      if (this.checked) {
        this.style.backgroundColor = randomColor;
      } else {
        this.style.backgroundColor = '#fff';
      }
    });
    inputCheckbox.type = 'checkbox';
    inputCheckbox.name = optionsGroup;
    checkboxesContainer.append(inputCheckbox);
  }
  return checkboxesContainer;
}

function renderFormButtons() {
  const formButtonsContainer = document.createElement('div');
  formButtonsContainer.id = 'form__buttons__container';
  const resetFormButton = document.createElement('button');
  resetFormButton.type = 'reset';
  resetFormButton.classList.add('btn', 'btn__reset');
  resetFormButton.innerText = 'Borrar';
  resetFormButton.id = 'reset__form__button';
  const restartGroupsButton = document.createElement('button');
  restartGroupsButton.classList.add('btn', 'btn__restart');

  restartGroupsButton.type = 'button';
  restartGroupsButton.innerText = 'Nuevo';
  restartGroupsButton.id = 'restart__button';
  const submitFormButton = document.createElement('button');
  submitFormButton.classList.add('btn', 'btn__submit');

  submitFormButton.type = 'submit';
  submitFormButton.innerText = 'Comprobar';
  formButtonsContainer.append(
    resetFormButton,
    submitFormButton,
    restartGroupsButton,
  );
  quizForm.append(formButtonsContainer);
}

function resetForm() {
  const checkBoxes = document.querySelectorAll('.input_checkbox');
  checkBoxes.forEach((box) => (box.style.backgroundColor = '#fff'));
  quizForm.reset();
  const groupContainers = document.querySelectorAll('.group__container');
  groupContainers.forEach((groupElement) => {
    groupElement.classList.remove('success', 'failure');
  });
}

function restartGroups() {
  quizForm.innerHTML = '';
  renderGroups();
}

function checkResults(results) {
  const groupContainers = document.querySelectorAll('.group__container');
  groupContainers.forEach((groupElement) => {
    groupElement.classList.remove('success', 'failure');
  });
  groupContainers.forEach((groupElement) => {
    const groupID = groupElement.id.split('-')[1];
    const { titular, checkboxes } = results[groupID];
    if (titular === checkboxes) {
      groupElement.classList.add('success');
    } else {
      groupElement.classList.add('failure');
    }
  });
  checkSuccess(groupContainers);
}

function checkSuccess(groupContainers) {
  const userSucceed = Array.from(groupContainers).every(
    (group) => !group.classList.contains('failure'),
  );
  if (userSucceed) {
    successAudio.play();
  } else {
    errorAudio.play();
  }
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandomRainbowColor() {
  const rainbowColors = [
    '#FF0000',
    '#FF7F00',
    '#FFFF00',
    '#00FF00',
    '#0000FF',
    '#4B0082',
    '#8B00FF',
  ];
  const randomIndex = Math.floor(Math.random() * rainbowColors.length);
  return rainbowColors[randomIndex];
}
function getRandomFont() {
  const fonts = [
    'Play',
    'Arvo',
    'Varela Round',
    'Pacifico',
    'Protest Revolution',
    'Dancing Script',
    'Kdam Thmor Pro',
    'Libre Baskerville',
    'Dosis',
    'Barlow',
    'Rubik',
    'Raleway',
    'Anta',
  ];

  const randomIndex = Math.floor(Math.random() * fonts.length);
  return fonts[randomIndex];
}
