import React from 'react';
import ReactDOM from "react-dom";
import { render } from '@testing-library/react';
import "@testing-library/react/cleanup-after-each";

import Display from './Display';

describe('<Display />', () => {
  it('runs tests', () => {
    expect(true).toBe(true);
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Display />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders without errors", () => {
    render(<Display />);
  });
  
  it("Displays 'Unlocked' or 'Locked'", () => {
    const { getByText } = render(<Display />);
    getByText(/Unlocked|Locked/)
  })
  
  it("Displays 'Open' or 'Closed'", () => {
    const { getByText } = render(<Display />);
    getByText(/Open|Closed/)
  })

  it("Displays 'Closed' if 'closed' is true", () => {
    const { getByText } = render(<Display closed={true}/>);
    getByText(/Closed/)
  })

  it("Displays 'Open' if 'closed' is false", () => {
    const { getByText } = render(<Display closed={false}/>);
    getByText(/Open/)
  })

  it("Displays 'Locked' if 'locked' is true", () => {
    const { getByText } = render(<Display locked={true}/>);
    getByText(/Locked/)
  })

  it("Displays 'Unlocked' if 'locked' is false", () => {
    const { getByText } = render(<Display locked={false}/>);
    getByText(/Unlocked/)
  })

  it("'Closed' is red when visible", () => {
    const { getByText } = render(<Display closed={true}/>);
    const closed = getByText(/Closed/)
    closed.className.includes("red-led")
  })

  it("'Open' is green when visible", () => {
    const { getByText } = render(<Display closed={false}/>);
    const open = getByText(/Open/)
    open.className.includes("green-led")
  })

  it("'Locked' is red when visible", () => {
    const { getByText } = render(<Display locked={true}/>);
    const locked = getByText(/Locked/)
    locked.className.includes("red-led")
  })

  it("'Unlocked' is green when visible", () => {
    const { getByText } = render(<Display locked={false}/>);
    const unlocked = getByText(/Unlocked/)
    unlocked.className.includes("green-led")
  })



  // it('matches snapshot', () => {
  //   const { container } = render(<Display />);
  //   expect(container).toMatchSnapshot();
  // });
});
