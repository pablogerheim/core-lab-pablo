import {upFirstLetter} from '../Helper/HelperFunction';

type CallbackFild = (params:string) => void;

type props = {
	valueFild: string;
	nameFild: string;
	setFild: CallbackFild;
};

function InfoFilds({valueFild, nameFild, setFild}: props) {
	return (
		<label className='w-full'>
			<p className='pl-8'>{upFirstLetter(nameFild)}:</p>
			<input
				value={valueFild}
				className='p-2 pl-8 font-medium w-full border rounded-3xl border-black'
				placeholder={upFirstLetter(nameFild)}
				onChange={(e) => setFild(e.target.value)}
			/>
		</label>
	);
}

export default InfoFilds;
