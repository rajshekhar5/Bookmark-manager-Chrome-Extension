let myLeads = []
const inputBtn = document.getElementById("input-btn")
const inputEL = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const del = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
const leadsFromLocslStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocslStorage) {
    myLeads = leadsFromLocslStorage
    render(myLeads)
}
tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})

inputBtn.addEventListener("click", function (){
    myLeads.push(inputEL.value) 
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    console.log(localStorage.getItem("myLeads"))
    render(myLeads)
    inputEL.value =""     
})
// del.addEventListener("click", function(){
//     console.log("double click to delete all")
// })
del.addEventListener("click", function (){
    console.log("double clicked")
    myLeads = []
    localStorage.clear()
    render(myLeads)
})
function render(leads) {
    let listItems =""
    for ( i=0 ; i<leads.length; i++) {
        listItems += 
        `<li>
            <a target='_blank' href='${leads[i]}'>
            ${leads[i]} 
            </a>
         </li>`  
    }
    ulEl.innerHTML = listItems
}

// "<li>" + myLeads[i] + "</li>"    www.google.com  www.googleEarth.com  "www.youtube.com", "www.chrome.com"
