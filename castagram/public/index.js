
let getCatPicture = async () => {
    let res = await fetch(`https://api.thecatapi.com/v1/images/search`,{
        headers:{
            "content-type":"application/json",
            "x-api-key":"c204565e-9537-4f02-8530-8fd01ec3e21f"
        }
    })
    return await res.json()
}

window.onload = async () => {
    let picArray = await getCatPicture()
    let pic = picArray[0]
    let div = document.createElement("div")
    let img = document.createElement("img")

    img.src = pic.url
    div.style.display = "flex";
    div.style.justifyContent = "center"
    div.style.alignItems = "center"

    document.body.append(div)
    div.append(img)
}
