var button = document.querySelector('#translate');
var output = document.querySelector('#outputTxt');

button.addEventListener('click', () => {
    var inputText = document.querySelector('#inputTxt').value

    //Mock response
    // var data={
    //     "success": {
    //         "total": 1
    //     },
    //     "contents": {
    //         "translated": "I ambar na- changes; im tur- feel ha in i nen,  im tur- feel ha in i coe,  im tur- smell ha in i gwilith.",
    //         "text": "The world is changes; I can feel it in the water, I can feel it in the earth, I can smell it in the air.",
    //         "translation": "sindarin"
    //     }
    // }

    function errorHandler(error){
        console.log(error)
        alert('Please try after sometime')
    }

    fetch('https://api.funtranslations.com/translate/sindarin.json?text='+inputText)
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data.contents.translated);
            output.innerText = data.contents.translated
        })
        .catch(errorHandler);

    //    output.innerText = data.contents.translated

})