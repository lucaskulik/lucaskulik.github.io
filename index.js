
fetch("./data.json")
    .then(response => {
        return response.json();
    })
    .then(jsondata => populateJSON(jsondata));

// window.onload = function () {
//     console.log("CHAMOU");
//     loadJSON(populateJSON);
// };

// loadJSON(populateJSON);

// function loadJSON(callback) {
//     var xobj = new XMLHttpRequest();
//     xobj.overrideMimeType("application/json");
//     xobj.open('GET', 'data.json', true); // Replace 'my_data' with the path to your file
//     xobj.onreadystatechange = function () {
//         console.log(xobj.status);
//         if (xobj.readyState == 4 && xobj.status == "200") {
//             // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
//             console.log(xobj);
//             callback(xobj.responseText);
//         }
//     };
//     xobj.send(null);
// }

function populateJSON(response) {
    var obj = JSON.parse(response);
    console.log(response);
    document.getElementById('name').replaceChild(obj.name);
}
