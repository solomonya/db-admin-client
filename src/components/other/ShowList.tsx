import { ReactNode } from 'react';

interface Props {
  list: Array<any>;
  children: () => JSX.Element;
}

const ShowList = ({ list, children }: Props) => {
  return list.map(children);
};

export default ShowList;
