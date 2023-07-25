export default function splitString(str){
    // split str into array
    const trimStr = str.trim().split(',')
    return trimStr.map(str => str.trim())
}