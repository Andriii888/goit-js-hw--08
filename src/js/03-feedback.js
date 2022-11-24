let throttleForVideo = require('lodash.throttle');

const formRef = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'selectedFilters';

initForm();

formRef.addEventListener('submit', e => {
  e.preventDefault();
    const formData = new FormData(formRef);
    formData.forEach((value, name) => {
        alert(` ${name}:${value}`);
    });
    localStorage.removeItem(LOCALSTORAGE_KEY);
e.currentTarget.reset();
});

formRef.addEventListener('change', e => {
  let persistedFilters = localStorage.getItem(LOCALSTORAGE_KEY);
  persistedFilters = persistedFilters ? JSON.parse(persistedFilters) : {};
  persistedFilters[e.target.name] = e.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(persistedFilters));
});


function initForm() {
  let persistedFilters = localStorage.getItem(LOCALSTORAGE_KEY);
  if (persistedFilters) {
    persistedFilters = JSON.parse(persistedFilters);
    Object.entries(persistedFilters).forEach(([name, value]) => {
      formRef.elements[name].value = value;
    });
  }
}
// let throttleForVideo = require('lodash.throttle');

// const formRef = document.querySelector('.feedback-form');

// const inputEmailRef= document.querySelector('.feedback-form input');
// const inputMessageRef = document.querySelector('.feedback-form textarea');
// const KEY = 'feedback-form-state';
// formRef.addEventListener('input', throttleForVideo(onWritingValue,500));
// const objValuesForm = {email:"",message:"",};

// function onWritingValue(e) {
   
//     objValuesForm[e.target.name] = e.target.value;
//     const string = JSON.stringify(objValuesForm);
//     localStorage.setItem(KEY, string);

// };


// function listenerForStorage() {
//     const getValues = localStorage.getItem(KEY);
//     const itValues = JSON.parse(getValues);
//     if (getValues) {
//         inputEmailRef.value = itValues.email;
//         inputMessageRef.value = itValues.message;
//     }
//    };
// listenerForStorage();

// formRef.addEventListener('submit', onSubmitForm);

// function onSubmitForm(e) {
//     e.preventDefault();
//     alert(`email: ${objValuesForm.email}
//     message: ${objValuesForm.message}`);
//     e.currentTarget.reset();
//     localStorage.removeItem(KEY);
// }
