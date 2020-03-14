import React from 'react';
import './App.css';
import {Layout, Header, Navigation, Content} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';

function App() {
  return (
<div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="Hotel Resort" scroll>
            <Navigation>
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
            </Navigation>
        </Header>
        <Content>
            <div className="page-content" />            
            <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;
