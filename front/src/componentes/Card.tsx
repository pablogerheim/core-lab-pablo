import {IVehicle} from '../../Types/Vehicle';
import {api, helperColor} from '../Helper/HelperFunction';
import {AiOutlineForm, AiOutlineClose, AiFillHeart, AiOutlineHeart} from 'react-icons/ai';
import {Add} from '../Pages/Add';
import {useState} from 'react';
import {v4} from 'uuid';

type CallbackCard = (args: IVehicle[]) => void;

type prop = {
	card: IVehicle;
	setCards: CallbackCard | undefined;
};

function Card({
	card,
	setCards,
}: prop) {
	const [id, setId] = useState<number>(0);

	async function getData() {
		const dados = await api.get<IVehicle[]>('/');
		if (dados.data && setCards !== undefined) {
			setCards(dados.data);
		}
	}

	async function handleUpdate(upId: number) {
		setId(upId);
	}

	async function handleDelet(id: number) {
		await api.delete<IVehicle>(`/${id}`);
		getData();
	}

	async function handleFavorit(id: number) {
		await api.patch<IVehicle>('/', {id});
		getData();
	}

	if (id !== 0) {
		return <Add id={id} setId={setId} setCards={setCards} />;
	}

	return (
		<div key={v4()} className={`h-56 w-60 opacity-75 ${helperColor(card.color)} m-4`}>
			<section className='flex p-2 justify-end gap-2'>
				<button title='update' type='button' onClick={async () => handleUpdate(card.id)} ><AiOutlineForm className='h-7 w-7' /></button>
				<button title='delete' type='button' onClick={async () => handleDelet(card.id)}><AiOutlineClose className='h-7 w-7' /></button>
				<button type='button' onClick={async () => handleFavorit(card.id)}>{card.isFavorite ? <AiFillHeart className='h-7 w-7' /> : <AiOutlineHeart className='h-7 w-7' />}</button>
			</section>
			<section className='m-4'>
				<h2>{card.name}</h2>
				<p>Preço: {card.price}</p>
				<p>Descrição: {card.description}</p>
				<p>Cor: {card.color}</p>
				<p>Ano: {card.year}</p>
			</section>
		</div>
	);
}

export default Card;
