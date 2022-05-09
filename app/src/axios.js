import axios from 'axios'


axios.defaults.headers.get['lAuthToken'] = localStorage.getItem("token") || sessionStorage.getItem('token');
axios.defaults.headers.post['lAuthToken'] = localStorage.getItem("token") || sessionStorage.getItem('token');
axios.defaults.headers.put['lAuthToken'] = localStorage.getItem("token") || sessionStorage.getItem('token');
axios.defaults.headers.delete['lAuthToken'] = localStorage.getItem("token") || sessionStorage.getItem('token');