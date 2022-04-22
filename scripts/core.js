// this is a ligth vanilla javascript framwork based on components paradigm

//Parse from String to HTML
function StringHTML(string) {
    const div = document.createElement('div');
    string = string.replace(/\>/g, ">")
    div.innerHTML = string;
    return div.children[0];
}

function addElement(object, template, place){
    const string = template(object)
    const element = StringHTML(string);
    place.insertBefore(element, place.firstChild)
}

function deleteElement(element){
    element.remove()
}

//Dev

async function getHTML() {
    let response = await fetch('data.txt');
    if (!response.ok) {throw new Error(`HTTP error! status: ${response.status}`);}
    let text = await response.text(); // await ensures variable has fulfilled Promise
    return text
}
  

export {addElement, deleteElement, getHTML}//export all functions



