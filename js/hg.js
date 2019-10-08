var vowels_ru=['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я','А', 'Е', 'Ё', 'И', 'О', 'У', 'Ы', 'Э', 'Ю', 'Я'];
// var vowels_RU=['А', 'Е', 'Ё', 'И', 'О', 'У', 'Ы', 'Э', 'Ю', 'Я'];
var user_words=prompt('Введите предложение, строку');

function find_vowels(user_words) {
    var quantity_vowels=[];
    for (var i=0; i<user_words.length; i++) {
        for(var j=0; j<vowels_ru.length; j++) {            
                if (user_words[i]==vowels_ru[j]) {
                quantity_vowels.push(user_words[i]);
                } 
                    // else { for(var k=0; k<vowels_RU.length; k++) {
                    //     if (user_words[i]===vowels_RU[k]) {
                    //     quantity_vowels.push(user_words[i]);
                    //     }
                    //     }                      
                    // }
                        
    }    
}
return quantity_vowels;  
} 

find_vowels(user_words);
alert("Длина равна " + find_vowels(user_words).length);


