import { Layout } from "antd";
import { observer } from "mobx-react-lite";
import { useAppContext } from "../app/store/provider";


const { Header, Sider, Content } = Layout;

const Root = () => {

  const store = useAppContext()

  const handleClick = (): void => {
    store?.errors.addError({id: Math.random(), description: 'error!'})
  }

  return (
    <Layout>
      <Header>
        <h1>Header</h1>
      </Header>
      <Layout>
        <Sider>
          <h1>Sidebar</h1>
        </Sider>
        <Content>
          <h1>Content</h1>
        </Content>
      </Layout>
    </Layout>
  );
};


export default observer(Root);