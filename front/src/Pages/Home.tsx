import {AiOutlineSearch} from 'react-icons/ai';
import {v4} from 'uuid';
import {IVehicle} from '../../Types/Vehicle';
import Card from '../componentes/Card';
import {FILTER_BY, imagen} from '../Helper/HelperContents';
import {api} from '../Helper/HelperFunction';

type CallbackCard = (args: IVehicle[]) => void;

type props = {
	cards: IVehicle[] | [];
	setCards: CallbackCard;
};

function Home({cards, setCards}: props) {
	async function handleSearch(search: string) {
		const dados = await api.get<IVehicle[]>('/');
		console.log(search);
		let ativado = false;
		const found = dados.data.map((card) => {
			console.log(card);
			Object.entries(card).forEach(arr => {
				if (FILTER_BY.includes(arr[0])) {
					console.log(arr);

					if (arr[1].toString().includes(search)) {
						ativado = true;
					}
				}
			});
			if (ativado) {
				ativado = false;
				return card;
			}
		});
		const result: IVehicle[] = [];
		found.forEach(card => {
			if (card) {
				result.push(card);
			}
		});
		setCards(result);
	}

	function favorite(card: IVehicle) {
		if (card.isFavorite) {
			return (<Card key={v4()} card={card} setCards={setCards} />);
		}
	}

	function myAds(card: IVehicle) {
		if (!card.isFavorite) {
			return (<Card key={v4()} card={card} setCards={setCards} />);
		}
	}

	return (
		<div className='p-4 h-screen'>
			<div className='flex pt-[5rem] items-center '>
				<div className='flex gap-2 p-3 border rounded-3xl bg-green-200 '>
					<AiOutlineSearch className='h-7 w-7' />
					<input
						className='bg-green-200 text-lg font-medium'
						placeholder='Buscar'
						onChange={async (e) => handleSearch(e.target.value)}
					/>
				</div>
				<a href='/filter'>
					<button type='button' className='h-12 w-20 ml-4 border-none '>
						<img className='bttt' src={imagen} alt={'tools'} />
					</button>
				</a>
			</div>
			<div className='flex justify-center mt-8'>
				<a href='/create' className='flex items-center w-full border rounded-3xl bg-green-300'>
					<p className='text-4xl pb-3 pl-5 pr-20'> + </p>
					<p>ADICIONAR</p>
				</a>
			</div>
			<strong className='flex self-start mt-4'>Favoritos</strong>
			<div className='p-8 flex items-center flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
				{cards.map(card => favorite(card))}
			</div>
			<strong className='flex self-start'>Meus Anúncios</strong>
			<div className='p-8 flex items-center flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
				{cards.map(card => myAds(card))}
			</div>
		</div>
	);
}

export {Home};

