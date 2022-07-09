import { AiOutlineArrowLeft } from 'react-icons/ai';
import { api, upFirstLetter } from "../Helper/HelperFunction";
import { COLORS } from "../Helper/HelperContents";
import { useEffect, useState } from 'react';
import { v4 } from 'uuid'
import { IVehicle } from '../../Types/Vehicle';

interface Add {
    id: number
    onChangeCards: Function | null
}

function Add({ id, onChangeCards}: Add): JSX.Element {
    
    const [name, setName] = useState<string>('qwe')
    const [color, setColor] = useState<string>('')
    const [description, setDescription] = useState<string>('qwew')
    const [year, setYear] = useState<string>('2022')
    const [plate, setPlate] = useState<string>('1231asd')
    const [price, setPrice] = useState<string>('44444')

    useEffect(() => {
        if(id !==0) {
           (async () => { const dados = await api.get<IVehicle>(`/${id}`)
            if (dados.data) {
                const {name, color, description, year, plate, price } = dados.data
                setName(name)
                setColor(color)
                setDescription(description)
                setYear(year.toString())
                setPlate(plate)
                setPrice(price.toString())
            }})()
        }
    }, [])


    async function handleSubmit(): Promise<void> {
        event?.preventDefault()
        let vehicle = await api.post<IVehicle>("/", { name, color, description, year, plate, price })
        const dados = await api.get<IVehicle[]>("/")
        if(onChangeCards){onChangeCards(dados.data)}
        console.log(vehicle)
    }

    function select() {
        return (<select className='p-2 pl-8  font-medium w-full border rounded-3xl border-black'
            onChange={(e) => setColor(e.target.value)}
            value={color}
        >
            <option value='' ></option>
            {Object.keys(COLORS).map(key => <option value={key} key={v4()}>{upFirstLetter(key)}</option>)}
        </select>)
    }

    return (
        <div className="p-4 border " >
            <a href='/'><AiOutlineArrowLeft className='h-6 w-8' /></a>
            <form onSubmit={handleSubmit} className="m-6 mt-4  bg-white">
                <div className=" pt-[3rem] items-center p-4 ">
                    <label className="w-full">
                        <p className="pl-8">{upFirstLetter("nome")}:</p>
                        <input
                            value={name}
                            className="p-2 pl-8 font-medium w-full border rounded-3xl border-black"
                            placeholder={upFirstLetter("nome")}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                    <label className="w-full">
                        <p className="pl-8">{upFirstLetter("descrição")}:</p>
                        <input
                            value={description}
                            className="p-2 pl-8 font-medium w-full border rounded-3xl border-black"
                            placeholder={upFirstLetter("descrição")}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </label>
                    <label className="w-full">
                        <p className="pl-8">{upFirstLetter("ano")}:</p>
                        <input
                            value={year}
                            className="p-2 pl-8 font-medium w-full border rounded-3xl border-black"
                            placeholder={upFirstLetter("ano")}
                            onChange={(e) => setYear(e.target.value)}
                        />
                    </label>
                    <label className="w-full">
                        <p className="pl-8">{upFirstLetter("placa")}:</p>
                        <input
                            value={plate}
                            className="p-2 pl-8 font-medium w-full border rounded-3xl border-black"
                            placeholder={upFirstLetter("placa")}
                            onChange={(e) => setPlate(e.target.value)}
                        />
                    </label>
                    <label className="w-full">
                        <p className="pl-8">{upFirstLetter("preço")}:</p>
                        <input
                            value={price}
                            className="p-2 pl-8 font-medium w-full border rounded-3xl border-black"
                            placeholder={upFirstLetter("preço")}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </label>
                    <label className='mt-2'>
                        <p className="pl-8">Cor:</p>
                        {select()}</label>
                </div>
                <div className="flex justify-end mt-8">
                    <button type='submit' className="border rounded-3xl m-10 px-8 p-2 bg-green-300">
                        <p>SALVAR</p>
                    </button>
                </div>
            </form>
        </div>
    );
}

export { Add };