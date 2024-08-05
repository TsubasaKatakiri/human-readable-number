module.exports = function toReadable (number) {
    const numbers = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const dozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const answer = [];
    if(number === 0) return 'zero';
    if(number < 20) return numbers[number];
    const digitArray = number.toString().split('').map(e => +e);
    if(digitArray.length === 3) {
        answer.push(`${numbers[digitArray[0]]} hundred`);
        digitArray.shift();
    }
    answer.push(dozens[digitArray[0]]);
    if(digitArray[0] > 1) digitArray.shift();
    const doubleDigitNumber = +digitArray.join('');
    answer.push(numbers[doubleDigitNumber]);
    return answer.filter(e => e !== '').join(' ');
}