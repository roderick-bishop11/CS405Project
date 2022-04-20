import React, { useState } from "react";
import data from "./data";
import Birthdays from "./Views/Birthday/birthdayView";
import { Layout, Menu, PageHeader } from "antd";
import ProgressBar from "./Components/Progress";



const { Content, Footer, Sider } = Layout;


const App = () => {
  const [people, setPerson] = useState(data);

  return (
    <Layout>
     <PageHeader
    title="Birthday Reminders App"
    backIcon={false}
    ghost
  />
      <Sider></Sider>
      <Content style={{margin:'10px'}}>
        <Birthdays people={people} setPerson={setPerson}></Birthdays>
        <ProgressBar />
      </Content>
      <Footer style={{textAlign: 'center', position:'sticky'}}>
        Designed and Coded with ❤️ by Roderick Bishop, Kristin Barret, & Ramon Lavendar. They learned a lot.
      </Footer>
    </Layout>
  );
};
export default App;
