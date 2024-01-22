import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(ev) {
  ev.preventDefault();

  const delay = Number(ev.target.elements.delay.value);
  const value = ev.target.elements.state.value;

  const makePromise = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (value === 'fulfilled') {
          resolve(`✅ Fulfilled promise in ${delay}ms`);
        }
        reject(`❌ Rejected promise in ${delay}ms`);
      }, delay);
    });
  };

  makePromise()
    .then(value => {
      console.log(value);
      iziToast.show({
        theme: 'dark',
        message: `${value}`,
        messageSize: '16px',
        messageColor: 'white',
        backgroundColor: '#59A10D',
        position: 'topRight',
      });
    })
    .catch(error => {
      console.log(error);
      iziToast.show({
        message: `${error}`,
        messageSize: '16px',
        messageColor: 'white',
        backgroundColor: '#EF4040',
        position: 'topRight',
      });
    });

  ev.target.reset();
}