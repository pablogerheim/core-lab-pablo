import { AiOutlineSearch } from 'react-icons/ai';
import { IVehicle } from '../../Types/Vehicle';
import Card from '../componentes/Card';

const imagen = "https://t3.ftcdn.net/jpg/03/20/78/84/240_F_320788475_nEiLVViOBewea7taZWqNUR0lJAMTAaSo.jpg"

interface props {
    cards: IVehicle[] | []
    setCards: Function
}

function Home({ cards, setCards }: props) {


    function handleSearch(search: string) {
        let ativado = false
        let found = cards.map((card) => {

            Object.values(card).map(text => {
                if (text.toString().includes(search)) {
                    ativado = true
                }
            }
            )
            if (ativado) {
                ativado = false
                return card
            }
        })
        let result: IVehicle[] = []
        found.forEach(card => { if (card) { result.push(card) } })
        setCards(result)
    }
    
    function favorite(card: IVehicle) {
        if (card.isFavorite) {
            return (<Card card={card} onChangeCards={setCards} />)
        }
    }

    function myAds(card: IVehicle) {
        if (!card.isFavorite) {
            return (<Card card={card} onChangeCards={setCards} />)
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
                        onChange={e => handleSearch(e.target.value)}
                    />
                </div>
                <a href='/filter'>
                    <button type='button' className="h-12 w-12 ">
                        <img src={imagen} alt={'tools'} />
                    </button>
                </a>
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


