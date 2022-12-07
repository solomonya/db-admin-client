import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../app/store/provider';

interface Props {
  redirectPath?: string;
  children: JSX.Element;
}

const PrivateRoute = ({ children, redirectPath = '/auth' }: Props) => {
  const store = useAppContext();
  const navigate = useNavigate();

  if (!store?.localStorage.token) navigate(redirectPath);

  return children;
};

export default observer(PrivateRoute);
