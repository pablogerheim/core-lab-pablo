import { AiOutlineArrowLeft } from 'react-icons/ai';
import { api, upFirstLetter } from "../Helper/HelperFunction";
import { COLORS } from "../Helper/HelperContents";
import { useEffect, useState } from 'react';
import { IVehicle } from '../../Types/Vehicle';
import { useNavigate } from 'react-router-dom';
import InfoFilds from '../componentes/InfoFild';

interface IAdd {
    id: number
    setCards: Function | null
    setId: Function | null
}

function Add({ id, setCards, setId }: IAdd): JSX.Element {
    const navegate = useNavigate()

    const [name, setName] = useState<string>('')
    const [color, setColor] = useState<string>('brnaco')
    const [description, setDescription] = useState<string>('')
    const [year, setYear] = useState<string>('')
    const [plate, setPlate] = useState<string>('')
    const [price, setPrice] = useState<string>('')

    useEffect(() => {
        if (id !== 0) {
            (async () => {
                const dados = await api.get<IVehicle>(`/${id}`)
                if (dados.data) {
                    const { name, color, description, year, plate, price } = dados.data
                    setName(name)
                    setColor(color)
                    setDescription(description)
                    setYear(year.toString())
                    setPlate(plate)
                    setPrice(price.toString())

                }
            })()
        }
    },[id])

    async function handleSubmit(): Promise<void> {
        // eslint-disable-next-line no-restricted-globals
        event?.preventDefault()
        if (id === 0) { await api.post<IVehicle>("/", { name, color, description, year, plate, price }) }
        if (id !== 0) { await api.put<IVehicle>("/", { name, color, description, year, plate, price, id }) }
        if (setCards) { const dados = await api.get<IVehicle[]>("/"); setCards(dados.data) }
        navegate('/')
        if (setId) { setId(0) }
    }

    function select() {
        return (<select defaultValue={color? color : 'branco'} className='p-2 pl-8  font-medium w-full border rounded-3xl border-black'
            onChange={(e) => setColor(e.target.value)}
            title="select color"
        >
            {Object.keys(COLORS).map((key, i) => <option value={key} key={i}>{upFirstLetter(key)}</option>)}
        </select>)
    }

    return (
        <div  className="p-4 border " >
            <a title='back' href='/'><AiOutlineArrowLeft className='h-6 w-8' /></a>
            <form onSubmit={handleSubmit} className="m-6 mt-4  bg-white">
                <div className=" pt-[3rem] items-center p-4 ">
                    <InfoFilds valueFild={name} nameFild="nome" setFild={setName} />
                    <InfoFilds valueFild={description} nameFild="descrição" setFild={setDescription} />
                    <InfoFilds valueFild={year} nameFild="ano" setFild={setYear} />
                    <InfoFilds valueFild={plate} nameFild="placa" setFild={setPlate} />
                    <InfoFilds valueFild={price} nameFild="preço" setFild={setPrice} />
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