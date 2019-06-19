import React from 'react';
import ReactDOM from "react-dom";
import { render } from '@testing-library/react';
import "@testing-library/react/cleanup-after-each";

import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
  it('runs tests', () => {
    expect(true).toBe(true);
  });
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Dashboard />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders without errors", () => {
    const queries = render(<Dashboard />);
    // console.log(queries.debug())
  });

  it("renders Display component", () => {
    const { getByTestId } = render(<Dashboard />);
    getByTestId(/Display/i)
  })
  
  it("renders Controls component", () => {
    const { getByTestId } = render(<Dashboard />);
    getByTestId(/Controls/i)
  })

  it("Starts unlocked", () => {
    const { getByText } = render(<Dashboard />);
    getByText(/Unlocked/i)
  })

  it("Starts open", () => {
    const { getByText } = render(<Dashboard />);
    getByText(/Open/i)
  })



  // it('matches snapshot', () => {
  //   const { container } = render(<Dashboard />);
  //   expect(container).toMatchSnapshot();
  // });
});
