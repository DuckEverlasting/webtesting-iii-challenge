import React from 'react';
import ReactDOM from "react-dom";
import { render, fireEvent } from '@testing-library/react';
import "@testing-library/react/cleanup-after-each";

import Controls from './Controls';

const testFunction = jest.fn()

describe('<Controls />', () => {
  it('runs tests', () => {
    expect(true).toBe(true);
  });
  
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Controls />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders without errors", () => {
    render(<Controls />);
  });

  it("renders 'close/open' button", () => {
    const { getByText } = render(<Controls />);
    getByText(/close|open/i)
  })

  it("renders 'lock/unlock' button", () => {
    const { getByText } = render(<Controls />);
    getByText(/Unlock|Lock/)
  })

  it("Button reads 'Open Gate' if 'closed' is true", () => {
    const { getByText } = render(<Controls closed={true}/>);
    getByText(/Open Gate/)
  })

  it("Button reads 'Close Gate' if 'closed' is false", () => {
    const { getByText } = render(<Controls closed={false}/>);
    getByText(/Close Gate/)
  })

  it("Button reads 'Unlock Gate' if 'locked' is true", () => {
    const { getByText } = render(<Controls locked={true}/>);
    getByText(/Unlock Gate/)
  })

  it("Button reads 'Lock Gate' if 'locked' is false", () => {
    const { getByText } = render(<Controls locked={false}/>);
    getByText(/Lock Gate/)
  })

  it("Lock button disabled when gate is open", () => {
    const { getByText } = render(<Controls locked={false} closed={false}/>);
    const lockButton = getByText(/Lock/)
    expect(lockButton.disabled).toBeTruthy()
  })

  it("Open button disabled when gate is locked", () => {
    const { getByText } = render(<Controls locked={true} closed={true}/>);
    const openButton = getByText(/open/i)
    expect(openButton.disabled).toBeTruthy()
  })

  it("On click, 'lock/unlock' button runs function", () => {
    const { getByText } = render(<Controls closed={true} toggleLocked={testFunction}/>);
    const lockButton = getByText(/lock/i)
    fireEvent.click(lockButton)
    expect(testFunction).toBeCalled()
  })

  it("On click, 'open/close' button runs function", () => {
    const { getByText } = render(<Controls toggleOpen={testFunction}/>);
    const closeButton = getByText(/close/i)
    fireEvent.click(closeButton)
    expect(testFunction).toBeCalled()
  })



  // it('matches snapshot', () => {
  //   const { container } = render(<Controls />);
  //   expect(container).toMatchSnapshot();
  // });
});
