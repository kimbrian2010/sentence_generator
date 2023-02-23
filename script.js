const btn = document.getElementById("btn")
const jokeParagraph = document.getElementById("joke")


const api_key = "bK+3OFwIMgg2msZgZ62ngA==B3hQoBXIEHKywEq8"

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": api_key
    }
}

const api_url = "https://api.api-ninjas.com/v1/chucknorris?limit=1"

async function getSentence() {
    try {
        jokeParagraph.innerText = "Fetching joke..." /*msg to appear we wait for the joke to be fetched */
        btn.disabled = true
        btn.innerText = "Upadating joke"

        const response = await fetch(api_url, options)
        const data = await response.json()

        btn.disabled = false
        btn.innerText = "Get New Joke"

        jokeParagraph.innerText = data.joke

    } catch (error) {
        jokeParagraph.innerText = "Something went wrong, try later!"
    }
}

btn.addEventListener("click", getSentence)