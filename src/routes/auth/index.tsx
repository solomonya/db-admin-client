import { observer } from 'mobx-react-lite';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../app/store/provider';
import { IAuthData } from '../../types/api/auth';
import Admin from '../../app/api/services/admin';

const Auth = () => {
  const store = useAppContext();
  const navigate = useNavigate();
  const { mutate } = Admin.authAdmin();

  const handleFinish = async (values: IAuthData) => {
    await mutate(values, {
      onSuccess: (data) => {
        store?.localStorage.setToken(data.access_token);
        navigate('/');
      },
    });
  };

  return <h1>auth</h1>;
};

export default observer(Auth);
