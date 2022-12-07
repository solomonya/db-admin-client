import ky from 'ky';

const client = ky.extend({
  prefixUrl: 'http://localhost:8000',
  hooks: {
    beforeRequest: [
      (request) => {
        const rawUser = localStorage.getItem('user');
        const user = rawUser ? JSON.parse(rawUser) : null;
        if (user && user.token) {
          request.headers.set('x-access-token', user.token);
        }
      },
    ],
  },
});

export default client;
