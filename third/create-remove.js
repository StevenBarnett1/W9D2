/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");
add.addEventListener("click", async () => {
    try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random")

        const data = await res.json(); // res.json() parses a json input into a javacript object, it is used for async opposed to JSON.parse because res.json returns a promise **IMPORTANT, res.json() returns the json body content, not the entire response

        const url = data.message; // URL of new dog image


        /*--------------- Get breed (Hint: Parse from URL) ---------------- */
        let breed = url.split("/")[4]


        /*------------ Create new dog card with the url above ------------- */
        /* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url) */
        // Your code here
            let newli = document.createElement("li")
            let newFigure = document.createElement("figure")
            let newImage = document.createElement("img")
            let newFigCaption = document.createElement("figcaption")

            newImage.src = url
            newFigCaption.innerText = breed

            newFigure.append(newImage,newFigCaption)
            newli.append(newFigure)
            document.querySelector("section.gallery > ul").append(newli)




        /* Add the new dog card as a child to the ul in the .gallery element */
        // Your code here

    } catch (e) {
        console.log("Couldn't fetch dog :(")
    }
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
    /*-------------------- Select the first dog card --------------------- */
    document.querySelector("section.gallery ul > li:first-of-type").remove()

    /*-------------------- Remove the first dog card --------------------- */
    // Your code here
});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
    document.querySelector("section.gallery ul > li:last-of-type").remove()
    /*-------------------- Select the last dog card ----------------------- */
    // Your code here

    /*-------------------- Remove the last dog card ----------------------- */
    // Your code here
});
