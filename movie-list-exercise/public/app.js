const dataConst = document.querySelector(".data")

fetcher()

async function fetcher() {
    const res = await fetch("/api/movies")
    const data = await res.json()
    toHTML(data)
    console.log(data);
}

function toHTML(json) {
    json.forEach((e) => {
        dataConst.innerHTML += `
       
    <tr>
      <td>${e.title}</td>
         <td>${e.releaseDate}</td>
           <td>${e.age}</td>
            <td>${e.genres}</td>
            <td>${e.rating}</td>
    </tr>
    `

    })
}
