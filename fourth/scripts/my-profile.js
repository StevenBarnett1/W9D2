let updateBirthday = (birthday) => {
    let diff = birthday-Date.now()
    diff = Number(diff.toString().slice(0,diff.toString().length-3))
    let days = Math.floor(diff / (3600*24))
    let hours = Math.floor(diff % (3600*24) / 3600)
    let minutes = Math.floor(diff % 3600 / 60)
    let seconds = Math.floor(diff % 60)
    return `${days}:${hours}:${minutes}:${seconds}`
}

let getTime = () => {
    let date = new Date()
    let time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    return time
}
window.onload = () => {
    let h1 = document.createElement("h1")
    h1.innerText = "Steven Barnett"
    h1.id = "name"
    h1.className = "name"

    let ul = document.createElement("ul")
    ul.className = "my-details"
    ul.innerHTML = "<li>Name is Steven</li> <li>165 Pounds</li> <li>Lives in San Jose</li> <li>Eats el Pollo Loco</li>"
    document.body.append(h1,ul)
    let items = document.querySelectorAll("ul > li")
    for(let item of items){
        item.className = "detail"
    }

    let timer = document.createElement("li")
    timer.innerText = `I live in San Jose, CA, and its currently ${getTime()}`
    timer.className = "timer"
    ul.append(timer)
    setInterval(() => {
        timer.innerText = `I live in San Jose, CA, and its currently ${getTime()}`
    }, 1000);

    let img = document.createElement("img")
    img.src = "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
    h1.after(img)
    setInterval(() => {
        timer.classList.toggle("visible")
    },1000);

    let div = document.createElement("div")
    div.className = "birthday"
    div.id = "birthday"
    let birthday = new Date(2022,0,11)
    document.body.append(div)
    setInterval(() => {
        div.innerText =  `It is my birthday in ${updateBirthday(birthday)}`
    }, 1000);
}



// Bonus A: Add more sections to your page
// Using JavaScript, create new elements and:

// Insert an image into your profile under your name. Hint: You could insert a new img, or you could add a div and set the background image using a CSS class.
// Insert more sections to your profile. Examples: "Likes" list and "Dislikes" list, "Favorite Restaurants", "My Activities", etc.
// Bonus B: Use other Element methods
// Check the MDN documentation for more Element methods you can use to manipulate the DOM. Try doing the following:

// Use .outerHTML to replace an element.
// Use the classList API to add/remove classes.
// Try using : Element.closest, getElementsByClassName, getElementsByTagName to select elements on your page.
// Bonus C: Make a countdown clock
// Instead of keeping the current time on your profile page, make a countdown clock to your birthday.

// Refer to the MDN documentation on the Date object for help with this task. Review how to calculate the elapsed time between two dates.
