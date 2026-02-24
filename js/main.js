// Experience Section
async function getData() {
  let data = await fetch(
    "https://api.jsonbin.io/v3/b/6962520fd0ea881f40621007",
    {
      headers: {
        "X-Master-Key":
          "$2a$10$qIHW.uBjT202MQY9ParQ3uy9HibyOY/o5K/J9ROIp1LXAsAeIL1TG",
      },
    },
  ).then((e) => e.json());
  return data.record.experiences;
}

let data = await getData();
let expSection = document.querySelector("#expSection");
let desc = [];

for (let index = 0; index < data.length; index++) {
  for (
    let descIndex = 0;
    descIndex < data[index].description.length;
    descIndex++
  ) {
    desc += `<li>${data[index].description[descIndex]}</li>`;
  }

  expSection.innerHTML += ` <div class="text-start text-white my-2">
                                <h3 class="mb-0">${data[index].title}</h3>
                                <div class="d-flex justify-content-between main-text">
                                    <p class="fst-italic"> ${
                                      data[index].companyWebsite
                                        ? `<a href="${data[index].companyWebsite}" target="_blank"
                                            class="main-text">at
                                            ${data[index].companyName}</a>`
                                        : ` at
                                            ${data[index].companyName}`
                                    }
                                            </p>
                                    <p class="fst-italic">${data[index].startDate} - ${data[index].endDate}</p>
                                </div>
                                <ul>
                                    ${desc}
                                </ul>
                            </div>`;
  desc = [];
}
// End Of Experience Section

// Projects Section
let wordpressTab = document.querySelector("#wordpressContent");
let wordpressContent = [];
let nativeTab = document.querySelector("#native-tab");
let frameworkTab = document.querySelector("#frameworkContent");

let tags = [];
let wordpressProjects = [];
let frameworkProjects = [];

// Wordpress projects
async function getWordpressProjects() {
  let data = await fetch(
    "https://api.jsonbin.io/v3/b/697f2db2ae596e708f08e4ef",
    {
      headers: {
        "X-Master-Key":
          "$2a$10$qIHW.uBjT202MQY9ParQ3uy9HibyOY/o5K/J9ROIp1LXAsAeIL1TG",
      },
    },
  ).then((e) => e.json());
  return data.record;
}
wordpressProjects = await getWordpressProjects();
console.log(wordpressProjects);

for (let index = 0; index < wordpressProjects.length; index++) {
  for (let tag = 0; tag < wordpressProjects[index].techtags.length; tag++) {
    tags.push(wordpressProjects[index].techtags[tag]);
  }
  wordpressTab.innerHTML += `<div class="col-sm-12 col-lg-6">
                                            <div class="card bg-transparent p-2 h-100">
                                                <img src="${wordpressProjects[index].url}" class="card-img"
                                                    alt="Quote Generator app">
                                                <div class="card-body my-2">
                                                    <h5 class="card-title main-text">${wordpressProjects[index].name}
                                                    </h5>

                                                   <p class="card-text text-white">${wordpressProjects[index].description}
                                                   </p>
                                                   <p>
                                                       <a href="${wordpressProjects[index].demo}"
                                                           target="_blank" class="main-text">View Demo</a>
                                                   </p>
                                                   <p class="card-text">tags: ${tags}</p>
                                               </div>
                                           </div>
                                       </div>`;
  tags = [];
}

// Framework Projects

async function getFrameworkProjects() {
  let data = await fetch(
    "https://api.jsonbin.io/v3/b/697f5dfcae596e708f092f67",
    {
      headers: {
        "X-Master-Key":
          "$2a$10$qIHW.uBjT202MQY9ParQ3uy9HibyOY/o5K/J9ROIp1LXAsAeIL1TG",
      },
    },
  ).then((e) => e.json());
  return data.record;
}
frameworkProjects = await getFrameworkProjects();
console.log(frameworkProjects);

for (let index = 0; index < frameworkProjects.length; index++) {
  for (let tag = 0; tag < frameworkProjects[index].techtags.length; tag++) {
    tags.push(frameworkProjects[index].techtags[tag]);
  }
  frameworkTab.innerHTML += `<div class="col-sm-12 col-lg-6">
                                            <div class="card bg-transparent p-2 rounded-4 h-100">
                                              <div class="card-img-top">
                                                <img class="w-100 rounded-3" src="${frameworkProjects[index].url}" class="card-img"
                                                alt="${frameworkProjects[index].name}">
                                              </div>    
                                                <div class="card-body d-flex flex-column my-2">
                                                    <h5 class="card-title main-text">${frameworkProjects[index].name}
                                                    </h5>

                                                   <p class="card-text text-white flex-grow-1">${frameworkProjects[index].description}
                                                   </p>
                                                   
                                                   <div class="tags-section flex-grow-1">
                                                    <p class="card-text mb-0 text-start fw-bold text-white">tags:</p>
                                                      <ul class="tags-list">
                                                      ${tags.map((tag) => `<li class="tag fw-bold text-white">${tag}</li>`).join("")}
                                                      </ul>
                                                   </div>
                                                   <p>
                                                       <a href="${frameworkProjects[index].demo}"
                                                           target="_blank" class="demo-link">View Demo</a>
                                                   </p>
                                               </div>
                                           </div>
                                       </div>`;
  tags = [];
}

// End OfProjects Section
