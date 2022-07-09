import { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { IVehicle } from '../../Types/Vehicle';
import Card from '../componentes/Card';
import { api } from '../Helper/HelperFunction';
const imagen = "https://t3.ftcdn.net/jpg/03/20/78/84/240_F_320788475_nEiLVViOBewea7taZWqNUR0lJAMTAaSo.jpg"

function Home() {
    const [cards, setCards] = useState<IVehicle[] | []>([])
    
    async function getData() {
        const dados = await api.get<IVehicle[]>("/")
        if (dados.data) {
            setCards(dados.data)
        }
    }
    useEffect(() => {
        getData()
    }, [])
    
    function favorite(card: IVehicle) {
        if (card.isFavorite) {
            return (<Card card={card} onChangeCards={setCards} />)
        }
    }

    function myAds(card: IVehicle) {
        if (!card.isFavorite) {
            return (<Card card={card} onChangeCards={setCards}/>)
        }
    }

    return (
        <div className="p-4 h-screen">
            <div className="flex pt-[5rem] items-center ">
                <div className='flex gap-2 p-3 border rounded-3xl bg-green-200 '>
                    <AiOutlineSearch className='h-7 w-7' />
                    <input
                        className="bg-green-200 text-lg font-medium"
                        placeholder="Buscar"
                    />
                </div>
                <button className="h-12 w-12 ">
                    <a href='/filter'><img src={imagen} /></a>
                </button>
            </div>
            <div className="flex justify-center mt-8">
                <a href='/create' className="flex items-center w-full border rounded-3xl bg-green-300">
                    <p className="text-4xl pb-3 pl-5 pr-20"> + </p>
                    <p>ADICIONAR</p>
                </a>
            </div>
            <div className='p-8 flex items-center flex-col '>
                <strong className='flex self-start'>Favoritos</strong>
                {cards.map(card => favorite(card))}
            </div>
            <div className='p-8 flex items-center flex-col '>
                <strong className='flex self-start'>Meus Anúncios</strong>
                {cards.map(card => myAds(card))}
            </div>
        </div>
    );
}

export { Home };


