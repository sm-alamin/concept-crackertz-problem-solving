const solution = (letter)=> {
    //Write Your solution Here
    const vowel = "VOWEL";
    const consonant = "CONSONANT";
    if(letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u' ){
        return vowel;
    }else{
        return consonant;
    }
    
  };
  const checkVowelConsonant = solution('a');
  console.log(checkVowelConsonant);