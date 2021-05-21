
import React from 'react';
import ReactDOM from 'react-dom'


import Nav from "./pages/Nav";
import MemoryRouter, { BrowserRouter as Router } from 'react-router-dom';
import App from "./App";
import Product from "./pages/product";
import Login from "./pages/login";
import Info from "./pages/info";
import List_of_user from "./pages/list_of_user";
import Signup from "./pages/signup";
import $ from "jquery";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
      <Router>
        <App />
      </Router>,
      div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it("renders without Product", () => {
  const div = document.createElement("div");
  ReactDOM.render(
      <Router>
        <Product />
      </Router>,
      div
  );
  const seat = $('#seat').text();
  expect(seat).not.toBe(null)
  ReactDOM.unmountComponentAtNode(div);

});

it("renders without Login", () => {
  const div = document.createElement("div");
  ReactDOM.render(
      <Router>
        <Login />
      </Router>,
      div
  );
  ReactDOM.unmountComponentAtNode(div);
});
it("renders without info", () => {
  const div = document.createElement("div");
  ReactDOM.render(
      <Router>
        <Info />
      </Router>,
      div
  );
  ReactDOM.unmountComponentAtNode(div);
});
it("renders without list", () => {
  const div = document.createElement("div");
  ReactDOM.render(
      <Router>
        <List_of_user />
      </Router>,
      div
  );
  ReactDOM.unmountComponentAtNode(div);
});
it("renders without singup", () => {
  const div = document.createElement("div");
  ReactDOM.render(
      <Router>
        <Signup />
      </Router>,
      div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it("renders without list fields", () => {
    const div = document.createElement("div");
    ReactDOM.render(
        <Router>
            <List_of_user />
        </Router>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});
