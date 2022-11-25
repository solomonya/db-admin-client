import ky from 'ky';

const client = ky.extend({
  prefixUrl: "http://localhost:8000"
});


export default client;