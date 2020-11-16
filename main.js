const fecthBtn = document.getElementById("fetch-btn");
const temperature = document.getElementById("temperature");
const humidity = document.getElementById("humidity");
const tempHeader = document.getElementById("temp-header");
const humiHeader = document.getElementById("humi-header");
const table = document.getElementById("table");
const apiUrl = "https://api.thingspeak.com/channels/1211881/feeds.json";
//const apiUrl = ;
const apiUrl1 = "https://api.thingspeak.com/channels/1211881/fields/1.json?results=2&fbclid=IwAR3sYrhaWWzyNJCcaSegbwmzjTjG-6JkudfFXLJh6XzLhIs6aIpcleaak4Q";
function fetchData(url, tempElement, humiElement) {
    let channel;
    let feeds;
    axios.get(url)
        .then(function (response) {
            // handle success
            console.log(response);
            channel = response.data.channel;
            feeds = response.data.feeds;

            humiHeader.innerHTML = channel.field1;
            tempHeader.innerHTML = channel.field2;

            if (feeds.length > 0){
                feeds.forEach(function(feed) {
                    const tr = document.createElement("tr");
                    const tempTD = document.createElement("td");
                    const humiTD = document.createElement("td");
                    const timeTD = document.createElement("td");
                    humiTD.innerHTML = feed.field1;
                    tempTD.innerHTML = feed.field2;
                    timeTD.innerHTML = feed.created_at;
                    tr.appendChild(tempTD);
                    tr.appendChild(humiTD);
                    tr.appendChild(timeTD);
                    if (feed.field1 > 0 && feed.field2) {
                        table.appendChild(tr);
                    }
                });
            }
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
}

// invoke
// hoisting js

fecthBtn.addEventListener("click", () => fetchData(apiUrl, temperature, humidity));