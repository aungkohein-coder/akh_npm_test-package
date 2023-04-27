export const myName = "Aung Ko Hein";

export const ShowmyName = () => {
  return myName;
};

export const showUi = () => {
  const h1 = document.createElement("h1");
  h1.innerText = myName;
  document.body.prepend(h1);
};
