import * as React from 'react';

interface IProps {
  text: string;
}

export default class ExampleComponent extends React.Component<IProps> {
  render() {
    const { text } = this.props;

    return <div style={{ color: 'red' }}>Hello {text}</div>;
  }
}
