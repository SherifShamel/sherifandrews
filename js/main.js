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
