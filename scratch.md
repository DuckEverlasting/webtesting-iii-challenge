dashboard (component)
  x shows Controls component
  x shows Display component
  x starts unlocked
  x starts open

display (component)
  x display 'Locked' or 'Unlocked' exists
  x display 'Closed' or 'Open' exists
  x displays 'Closed' if the `closed` prop is `true` and 'Open' if otherwise
  x displays 'Locked' if the `locked` prop is `true` and 'Unlocked' if otherwise
  x when `Locked` is visible use the `red-led` class
  x when `Closed` is visible use the `red-led` class
  x when `Unlocked` is visible use the `green-led` class
  x when `Open` is visible use the `green-led` class

controls (component)
  x has 'close'/'open' button
  x 'close'/'open' button runs a toggle on click
  x has 'lock'/'unlock' button
  x 'lock'/'unlock' button runs a toggle on click
  x 'close'/'open' button reads 'Close Gate' or 'Open Gate' depending on props
  x 'lock'/'unlock' button reads 'Lock Gate' or 'Unlock Gate' depending on props
  x 'close'/'open' button is disabled if the gate is locked
  x 'lock'/'unlock' button is disabled if the gate is open