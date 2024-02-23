
let settings = setInterval(main_change,2000)



let i = 2
function main_change(){
    i = (i%3) + 1
    let url1 = "../images/effect0"
    let url2 = ".jpg"
    let final_url = url1 + i + url2
    let main_board = document.querySelector('#main_photoes')
    main_board.style.backgroundImage="url("+final_url+")"
}
