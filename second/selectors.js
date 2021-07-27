const select = () => {
    /* Write queries for each of the following */

    /* Section 1 */
    // 1. Get all seeded fruit elements
    // Your code here
    let seeded = document.getElementsByClassName(".seed")
    // 2. Get all seedless fruit elements
    // Your code here
    let seedless = document.getElementsByClassName(".seedless")
    // 3. Get first seedless fruit element
    // Your code here

    /* Section 2 */
    // 4. Get inner span with text "you"
    // Your code here
    let innerSpan = document.querySelector("#wrapper p span")

    // 5. Get all children of element "wrapper"
    // Your code here
    let wrapperChildren = document.querySelector("#wrapper").children
    let test = document.querySelectorAll("#wrapper > *")

    // 6. Get all odd number list items in the list
    // Your code here
    let odds = document.getElementsByClassName("odd")


    // 7. Get all even number list items in the list
    // Your code here
    let evens = document.querySelectorAll("section#two ol li:not(.odd)")
    /* Section 3 */
    // 8. Get all tech companies without a class name
    // Your code here

    let companies = document.querySelectorAll("section#three p:first-of-type > a:not([class])")
    // let result = []
    // for(let company of companies){
    //     result.push(company.innerText)
    // }


    // 9. Get "Amazon" list element
    // Your code here
    let amazon = document.querySelector("section#three > p:first-of-type > a.shopping")


    // 10. Get all unicorn list elements (not the image element)
    let result = []
    let unicorns = document.querySelectorAll("section#three >ul > li")
    for(let unicorn of unicorns){
        if (unicorn.querySelector("img.unicorn"))
        result.push(unicorn)
    }
    console.log(result)
}

window.onload = select;
