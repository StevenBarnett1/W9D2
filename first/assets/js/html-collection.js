export default () => {
  const bodyChildElements = document.body.children; // HTMLCollection [div]
  console.log("html collection",bodyChildElements);

  const div = bodyChildElements[0];
  console.log("html collection 0th",div)
  const divChildElements = div.children; // HTMLCollection [span]
  const helloWorld = div.innerText; // Hello World! Yes!    <-- NOT Hello World!
  const span = divChildElements[0]; // <span>Yes!</span>

  
};
