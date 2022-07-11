import { IVehicle, IselectObj } from "../../Types/Vehicle"
import { COLORS } from "./HelperContents";
import axios from "axios";

function upFirstLetter(text: string): string {
    return text[0].toUpperCase() + text.substring(1)
}
function helperSelect(arr: IVehicle[]) {
    const marca = arr.map(obj => obj.name)
    const cor = arr.map(obj => obj.color)
    const ano = arr.map(obj => obj.year)
    const selectObj: IselectObj = {
        "marca": marca,
        "cor": cor,
        "ano": ano
    }
    return selectObj
}
function helperColor(color: string) {
    let selectedColor = ''
    Object.entries(COLORS).forEach((arr) => { if (arr[0] === color) { selectedColor = arr[1] } })
    return selectedColor
}




const api = axios.create({
  baseURL: "http://localhost:3001",
});

export { upFirstLetter, helperSelect, helperColor, api }