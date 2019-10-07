const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    
    var strLetter='';
    var strTemp='';
    var strResult='';
    

    while(expr!='')
    {        
        strLetter=expr.slice(0,10);
        expr=expr.slice(10);
        if(strLetter.startsWith('*'))
        {
            strResult+=' ';            
        }
        else
        {       
            while(strLetter.startsWith('0'))
            {
                strLetter=strLetter.slice(1);
            }
            while(strLetter.startsWith('10') || strLetter.startsWith('11'))
            {
                if(strLetter.startsWith('10'))
                {
                   strTemp+='.';
                }
                else 
                {                    
                    strTemp+='-';
                }
                strLetter=strLetter.slice(2);
            } 
                strResult+=MORSE_TABLE[strTemp];
                strTemp='';       
         }             
    }
    return strResult;
}

module.exports = {
    decode
}