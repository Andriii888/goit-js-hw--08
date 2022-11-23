let throttleForVideo = require('lodash.throttle');

const formRef = document.querySelector('.feedback-form');
const inputEmailRef= document.querySelector('.feedback-form input');
const inputMessageRef = document.querySelector('.feedback-form textarea');
const KEY = 'feedback-form-state';
formRef.addEventListener('input', throttleForVideo(onWritingValue,500));
const objValuesForm = {email:"",message:"",};

function onWritingValue(e) {
   
    objValuesForm[e.target.name] = e.target.value;
    const string = JSON.stringify(objValuesForm);
    localStorage.setItem(KEY, string);

};


function listenerForStorage() {
    const getValues = localStorage.getItem(KEY);
    const itValues = JSON.parse(getValues);
    if (getValues) {
        inputEmailRef.value = itValues.email;
        inputMessageRef.value = itValues.message;
    }
   };
listenerForStorage();

formRef.addEventListener('submit', onSubmitForm);

function onSubmitForm(e) {
    e.preventDefault();
    alert(`email: ${objValuesForm.email}
    message: ${objValuesForm.message}`);
    e.currentTarget.reset();
    localStorage.removeItem(KEY);
}