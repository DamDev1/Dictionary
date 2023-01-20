const search = document.querySelector(".searchIcon");

search.addEventListener("click", (e) =>{
    e.preventDefault();
    const searchValue = document.querySelector(".searchInput").value;

    async function fetchDictionary(){
        const res =  await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchValue}`)
        const data = await res.json();
        console.log(data)
    
        document.querySelector(".word").innerHTML = data[0].word
        document.querySelector(".search").innerHTML = data[0].word;
    
        document.querySelector(".transcription").innerHTML = data[0].phonetic;
    
        document.querySelector(".defination").innerHTML =data[0].meanings[0].definitions[0].definition;
    
        document.querySelector(".partOfSpeech").innerHTML = data[0].meanings[0].partOfSpeech;
    
        document.querySelector(".synonyms").innerHTML = `${data[0].meanings[0].synonyms[0]},${data[0].meanings[0].synonyms[1]}`;
    
        document.querySelector(".antonyms").innerHTML =  data[0].meanings[0].antonyms[0];
        
        document.querySelector(".sentences").innerHTML =data[0].meanings[0].definitions[0].example;
        
    }

    fetchDictionary()

})
