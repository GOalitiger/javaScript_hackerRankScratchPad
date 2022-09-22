// import removeDuplicateCharacters from './'; 


function alternate(str) {

    let charArr = str.split('');

    // let charSet = new Set(charArr); // this is also a way to remove the duplicate values
    let duplicateRemoved = removeDuplicateCharacters(charArr);
    let maxlength = 0;
    for (let i = 0; i < duplicateRemoved.length; i++) {
        for (let j = i + 1; j < duplicateRemoved.length; j++) {
            const a = duplicateRemoved[i];
            const b = duplicateRemoved[j];
            let removedCharArr = charArr.filter(c => c === a || c === b);
            console.log(removedCharArr);
            if (isAlternate(removedCharArr) && removedCharArr.length > maxlength) {
                maxlength = removedCharArr.length;
            }

            // i++;
        }

    }
    alert(charArr);
    console.log("\n\n", charArr);
    console.log(duplicateRemoved);
    console.log(maxlength);
    // console.log(charSet);
}


/**
 * @description removes the duplicate in character array
 * @param char  
 * @returns 
 */
function removeDuplicateCharacters(char) {
    let duplicateRemoveCharArr = char.filter((x, i, a) => {
        if (a.indexOf(x) == i) {
            return x;
        }
    });
    return duplicateRemoveCharArr;
}


/**
 * @description checks if the string contains alternate characters or not
 * @param {*} removedCharArr 
 * @returns boolean
 */

function isAlternate(removedCharArr) {
    if (removedCharArr.length > 0) {
        let a = removedCharArr[0];
        let b = removedCharArr[1];
        return removedCharArr.every((e, i) => (i % 2 === 0 && e === a) || (i % 2 === 1 && e === b))

    } else {
        return false;
    }
}

alternate('abbbknkn')