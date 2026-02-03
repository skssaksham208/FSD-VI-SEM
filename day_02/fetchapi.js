const div = document.getElementById("products");
const button = document.getElementById("btn");

const getData = async () => {
  try {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    return data; 
  } catch (error) {
    console.log("unable to fetch data");
    return [];
  }
};

button.addEventListener("click", async (e) => {
  e.preventDefault();

  div.innerHTML = ""; 

  const data = await getData();

  data.map((d) => {
    const insideDiv = document.createElement("div");
    insideDiv.innerText = d.title;
    div.appendChild(insideDiv);
  });
});