export const handleScroll = (id: string) => {
  // first prevent the default behavior
  // get the href and remove everything before the hash (#)

  // get the element by id and use scrollIntoView
  const elem = document.querySelector(id);

  elem?.scrollIntoView({ behavior: "smooth" });
};
