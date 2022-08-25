//  require("../data/src-img.json")
const loadData = async () => {
  const result = await fetch("assets/data/src-img.json");
  console.log(result);
  const dataImport = await result.json();
  // console.log(dataImport.data.length);
  const pictures = document.getElementById("tes");
  for (let i = 0; i < dataImport.data.length; i++) {
    pictures.innerHTML += `
    <div class="card">
    <div class="picture">
          <img
          src="${dataImport.data[i].url}"
          alt="Pas Foto"
          class="image"
        />
    </div>
        <div class="overlay">
          <div class="text">${dataImport.data[i].text}</div>
        </div>
    </div>
 `;
    // const element = array[i];
  }
};
