window.addEventListener("load", function(event) {
  event.preventDefault();

  const h1Remove = document.querySelector("h1");
  h1Remove.remove();
  const h1Element = document.createElement("h1");
  h1Element.append("Webpage Recreation Practice");

  const p = document.createElement("p");
  p.append("The HTML of this webpage was created with JavaScript.");

  const img = document.createElement("img");
  img.setAttribute("src", "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900");
  img.setAttribute("alt", "This is an image of a Multicolored Tanager bird from birdsoftheworld.org");
  img.setAttribute("style", "width:50%");

  const h1Fact = document.createElement("h1");
  h1Fact.append("Facts about the Multicolored Tanager");

  const ulElement = document.createElement("ul");
  const liElementOne = document.createElement("li");
  liElementOne.append("It is endemic to the mountains of Colombia.");
  const liElementTwo = document.createElement("li");
  liElementTwo.append("It usually searches for insects on the underside of leaves of outer limbs while clinging to leaves with its feet.");
  ulElement.append (liElementOne, liElementTwo);

  const h2 = document.createElement("h2");
  h2.append("Source");

  const a = document.createElement("a");
  a.setAttribute("href", "https://en.wikipedia.org/wiki/Multicoloured_tanager");
  a.append("Wikipedia");

  const bodyElement = document.querySelector("body");
  bodyElement.append(h1Element);
  bodyElement.append(p);
  bodyElement.append(img);
  bodyElement.append(h1Fact);
  bodyElement.append(ulElement);
  bodyElement.append(liElementOne);
  bodyElement.append(liElementTwo);
  bodyElement.append(h2);
  bodyElement.append(a);
  });

