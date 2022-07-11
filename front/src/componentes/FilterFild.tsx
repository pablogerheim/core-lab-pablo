import { useEffect, useState } from "react";
import { v4 } from "uuid";
import { IVehicle } from "../../Types/Vehicle";
import { api, upFirstLetter } from "../Helper/HelperFunction";

interface props {
    nameFild: string[]
    setFild: Function
}

function FilterFild({ nameFild, setFild }: props) {
    const [selectOptions, setSelectOptions] = useState<string[] | []>([])
    const [option, setOption] = useState<string>('selecione --')


    async function getData() {
        const dados = await api.get<IVehicle[]>("/")
        if (dados.data) {
            let options: string[] = ['selecione --']
            dados.data.map(obj => Object.entries(obj).map(arr => { if (arr[0] === nameFild[1]) { return arr[1] } })).forEach(arr => arr.forEach(e => { if (e) { options.push(e) } }))
            setSelectOptions(options)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    function handleSelect(params: string) {
        setOption(params)
        setFild(params)
    }

    return (
        <label key={v4()} className="w-full" >
            <p className="pl-8"> {upFirstLetter(nameFild[0])}:</p>
            <select  defaultValue={option? option: 'selecione -- ' } onChange={(e) => handleSelect(e.target.value)} className="p-2 pl-8 font-medium w-full border rounded-3xl border-black" >
                {selectOptions.map(op => <option value={op} key={v4()}>{op}</option>)}
            </select>
        </label>
    )
}

export default FilterFild;