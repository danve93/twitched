import axios from "axios";

if(localStorage.getItem('theToken') === '') localStorage.setItem('theToken', document.location.hash) 
const theToken = localStorage.getItem('theToken')
let API_KEY = "ouulveyk5zqtijgetelrowlgm5yxlt";
let AUTH = 'gvr9gy0jjz3gpdem68f3z46on9m4fa'
// theToken.slice(14, 44);

let api = axios.create({
  headers: {
    "Client-ID": API_KEY,
    "Authorization": "Bearer "+ AUTH
  }
});

export default api;
