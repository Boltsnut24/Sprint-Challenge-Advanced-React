- [ ] Why would you use class component over function components (removing hooks from the question)?
  A class can have its own state whereas a functional compoenents has state passed in as props but are otherwise stateless.
- [ ] Name three lifecycle methods and their purposes.
  ComponentDidMount - triggers when a component gets mounted to the DOM, used to initialize items that require DOM nodes
  shouldComponentUpdate - to add logic about when the component should re-render instead of just re-rendering everytime, can improve performance in this way
  componentWillUnmount - cleans up all data before the component is destroyed.
- [ ] What is the purpose of a custom hook?'
  It is essentially a function that you reuse the logic set up in a component.
- [ ] Why is it important to test our apps?
  Preventing regression as we continue to develop our applications. 