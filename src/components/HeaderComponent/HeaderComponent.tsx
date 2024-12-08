import { NavLink } from "react-router-dom";
import { Layout } from "antd";

const { Header } = Layout;

const HeaderComponent: React.FC = () => {
  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center", color: "white" }}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/todo">Todo's</NavLink>
      </Header>
    </Layout>
  );
};

export default HeaderComponent;
