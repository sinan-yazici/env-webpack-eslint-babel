import React, { Component } from 'react';

export const ComponentsExo1 = class ComponentsExo1 extends Component {
  render() {
    return <h1>Hello World React.Component</h1>;
  }
};

export const ComponentsExo2 = () => (
      <h1>Hello World React</h1>
);

export const ComponentsExo3 = () => (
    <>
      <h1>HelloWorldFragmentReact</h1>
    </>
);

export const ComponentsExo4 = () => (
    <>
        <ul>
            <li>Mercedes</li>
            <li>Bmw</li>
            <li>Audi</li>
            <li>Porsche</li>
            <li>Aston Martin</li>
        </ul>
    </>
);
