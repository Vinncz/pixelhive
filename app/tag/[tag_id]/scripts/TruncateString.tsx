export default function TruncateString(str:string, maxLength:number) {
    if (str.length > maxLength) {
        return str.substring(0, maxLength - 2) + "...";
    } else {
        return str;
    }
}