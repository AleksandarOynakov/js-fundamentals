function solve(text) {
    let result = '';
    for (let index = 0; index < text.length; index++) {

      if(((text[index] == text[index -1]) && (text[index] != text[index + 1])) ||
         ((text[index] != text[index -1]) && (text[index] != text[index + 1])) ){
          result += text[index];
      }   
    }
    console.log(result);
}

solve('aaaaabbbbbcdddeeeedssaa')