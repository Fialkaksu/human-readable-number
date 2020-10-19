module.exports = function toReadable(number) {
    const numberArr = String(number).split('').reverse();
    const n = numberArr.length;
    
    const n_firstLine = new Map();
    n_firstLine.set(0, 'zero').set(1, 'one').set(2, 'two').set(3, 'three').set(4, 'four').set(5, 'five').set(6, 'six').set(7, 'seven').
    set(8, 'eight').set(9, 'nine');
    const n_secondLine = new Map();
    n_secondLine.set(10, 'ten').set(11, 'eleven').set(12, 'twelve').set(13, 'thirteen').set(14, 'fourteen').set(15, 'fifteen').
    set(16, 'sixteen').set(17, 'seventeen').set(18, 'eighteen').set(19, 'nineteen');
    const n_thirdLine = new Map();
    n_thirdLine.set(2, 'twenty').set(3, 'thirty').set(4, 'forty').set(5, 'fifty').
    set(6, 'sixty').set(7, 'seventy').set(8, 'eighty').set(9, 'ninety');

    if (n === 1) {
        return `${n_firstLine.get(number)}`;
    } else if (n === 2) {
        return read();
    } else {
        if(numberArr[0] === '0' && numberArr[1] === '0'){
            return `${n_firstLine.get(Number(numberArr[2]))} hundred`;
        }else{
            return `${n_firstLine.get(Number(numberArr[2]))} hundred ${numberArr[1] === '0' ? n_firstLine.get(Number(numberArr[0])) : read()}`;
        }
        
    }

    function read() {
        if (numberArr[1] === '1') {
            return `${n_secondLine.get(Number(numberArr[1] + numberArr[0]))}`;
        } else {
            return `${numberArr[0] === '0' ? n_thirdLine.get(Number(numberArr[1])) : (n_thirdLine.get(Number(numberArr[1])) + ' ' + 
            n_firstLine.get(Number(numberArr[0])))}`;
        }
    }
}
