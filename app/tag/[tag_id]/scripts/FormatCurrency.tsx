export default function FormatCurrency(num: number) {
    const str = num.toString();
    const reversedStr = str.split('').reverse().join('');
    const formattedStr = reversedStr.replace(/\d{3}(?=\d)/g, '$&.');
    return formattedStr.split('').reverse().join('');
}