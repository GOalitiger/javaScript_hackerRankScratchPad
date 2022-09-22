
/**
 * @description shifting of alphabets in s string over k alphabets 
 * @param string s 
 * @param number k 
 */

let alphabetsString ="abcdefghijklmnopqrstuvwxyz"
function caesarCipher(s, k) {
    
    // Write your code here
    let charArr = s.split('');
    if(charArr && charArr.length && charArr.length >0){
        let charLen = charArr.length;
        charArr.forEach((elem,i,arr) => {

            let asciCode = elem.charCodeAt(0);
            //capital case
            let swapCode = asciCode+( k % 26);
            if(asciCode > 64 && asciCode < 91){
                if(swapCode < 91){
                    mapToSwapCode(i,arr,swapCode);
                }else{
                    swapCode -= 26
                    mapToSwapCode(i,arr,swapCode);
                }
            
                
            }else if(asciCode > 96 && asciCode < 123){
                if(swapCode < 123){
                    mapToSwapCode(i,arr,swapCode);
                }else{
                    swapCode -= 26
                    mapToSwapCode(i,arr,swapCode);
                }
            }
        
            // let swapIndex = i+k;
            // if(swapIndex > charLen-1){
            //     swapIndex -= (charLen-1);
            //     swapIndex -= 1;
            //     shiftELementInArray(i,swapIndex,arr); 
            // }else{
            //     shiftELementInArray(i,swapIndex,arr);
            // }
        });
        console.log(charArr.join(""));
    }else{
        console.log('String conversion to character array failed!')
    }

}

function shiftELementInArray(currIndex, swapIndex, arr){
    let swapElemTemp =   arr[swapIndex];
    arr[swapIndex] = arr [currIndex];
    arr[currIndex] = swapElemTemp;

}

function mapToSwapCode(currIndex, arr, swapCode){
    arr[currIndex] = String.fromCharCode(swapCode);
}


caesarCipher('abcdefghijklmnopqrstuvwxyz',3)
caesarCipher('Hello_World!',4)


