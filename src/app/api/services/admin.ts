import { IAuthData, IAuthResponse } from './../../../types/api/auth';
import { useMutation, useQuery } from '@tanstack/react-query';
import client from '../client';

export default {
  getCurrentAdmin: () =>
    useQuery(['admin'], async () => {
      try {
        return await client.get('auth/admin').json();
      } catch (error) {
        return Promise.reject(error);
      }
    }),
  authAdmin: () =>
    useMutation(['admin'], (authData: IAuthData): Promise<IAuthResponse> => {
      const formData = new FormData();

      (Object.keys(authData) as Array<keyof typeof authData>).forEach((key) => {
        formData.append(key, authData[key]);
      });

      return client
        .post('auth/sign-in', {
          body: formData,
        })
        .json();
    }),
};
