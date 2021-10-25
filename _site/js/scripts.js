var API =
  "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=dog&api-key=rWiZs2UHoaybUAIp5wiCM3G4zCTGcjH1";

var baseURL = "https://nytimes.com/"
 

async function getStories(event) {
    const res = await fetch(API);
    const data = await res.json();

    showData(data.response.docs);
    
  }

function showData(stories) {
    console.log(stories)
  var looped = stories
    .map(
      (result) => `
    <div class="item">
    <picture>
    <img src="${baseURL}${result.multimedia[2].url}" alt="" />
    </picture>
    <h3>${result.headline.main}</h3>
    <h3><a href="${result.headline.main.url}">${result.headline.main}</a></h3>
    <p>${result.abstract}</p>
    </div>
  `
    )
    .join("");

  document.querySelector(".stories").innerHTML = looped;
}

getStories();