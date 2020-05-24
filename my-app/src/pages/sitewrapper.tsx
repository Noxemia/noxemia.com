import React from "react";

import styled from "styled-components";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

import Logo from "./../media/noxemialogogray.png";
import Button from "./sitewrapper-components/sidebar-button";
import GithubLogo from "./../media/githublogolight.png";

import CodePage from "./code";
import HomePage from "./home";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
`;

const Sidebar = styled.div`
  width: 250px;
  height: 100%;
  border-right: solid black 1px;
  background: #333333;
  padding: 4px 0 0 0;
`;

const LogoWrapper = styled.div`
  width: 100%;
  height: 50px;
`;

const CurrentPage = styled.div`
  width: 100%;
  height: 100%;
  background: lightgray;
`;

const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const Homepage = () => {
  return (
    <Wrapper>
      <Router>
        <Sidebar>
          <LogoWrapper>
            <StyledLink style={{ textDecoration: "none" }} to="/">
              <img src={Logo}></img>
            </StyledLink>
            <StyledLink to="/code">
              <Button text="</>"></Button>
            </StyledLink>
            <Button>
              <img
                style={{ width: "auto", height: "80%" }}
                src={GithubLogo}
              ></img>
            </Button>
          </LogoWrapper>
        </Sidebar>
        <CurrentPage>
          <Switch>
            <Route path="/code" component={CodePage} />
            <Route path="/" component={HomePage}></Route>
          </Switch>
        </CurrentPage>
      </Router>
    </Wrapper>
  );
};

export default Homepage;
