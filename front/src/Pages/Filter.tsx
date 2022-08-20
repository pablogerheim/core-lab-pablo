import {useState} from 'react';
import {AiOutlineArrowLeft} from 'react-icons/ai';
import {IVehicle} from '../../Types/Vehicle';
import FilterFild from '../componentes/FilterFild';
import {useNavigate} from 'react-router-dom';

type CallbackCard = (args: IVehicle[]) => void;

type props = {
	cards: IVehicle[] | [];
	setCards: CallbackCard;
};

function Filter({cards, setCards}: props) {
	const navegate = useNavigate();

	const [name, setName] = useState<string>('');
	const [color, setColor] = useState<string>('');
	const [year, setYear] = useState<string>('');

	function handleFilters() {
		const filterName: IVehicle[] = name ? [] : cards;
		if (name !== 'selecione --') {
			cards.forEach((obj: IVehicle) => {
				if (obj.name === name) {
					filterName.push(obj);
				}
			});
		}

		const filterColor: IVehicle[] = color ? [] : filterName;
		if (color !== 'selecione --') {
			filterName.forEach((obj: IVehicle) => {
				if (obj.color === color) {
					filterColor.push(obj);
				}
			});
		}

		const filterYear: IVehicle[] = year ? [] : filterColor;
		if (year !== 'selecione --') {
			filterColor.forEach((obj: IVehicle) => {
				if (obj.year === parseInt(year)) {
					filterYear.push(obj);
				}
			});
		}

		setCards(filterYear);
		navegate('/');
	}

	return (
		<div className='p-4 bg-slate-200 h-screen' >
			<a title='back' href='/'><AiOutlineArrowLeft className='h-6 w-8' /></a>
			<form onSubmit={handleFilters} className='m-6 mt-4  bg-white'>
				<div className=' pt-[3rem] items-center p-4 '>
					<FilterFild nameFild={['nome', 'name']} setFild={setName} />
					<FilterFild nameFild={['cor', 'color']} setFild={setColor} />
					<FilterFild nameFild={['ano', 'year']} setFild={setYear} />
				</div>
				<div className='flex justify-end mt-8'>
					<button type='submit' className='border rounded-3xl m-10 px-8 p-2 bg-green-300'>
						<p>SALVAR</p>
					</button>
				</div>
			</form>
		</div>
	);
}

export {Filter};
