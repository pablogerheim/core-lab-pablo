import { v4 } from "uuid";
import { upFirstLetter } from "../Helper/HelperFunction";

interface props {
    valueFild: string
    nameFild: string
    setFild: Function
}

function InfoFilds({ valueFild, nameFild, setFild }: props) {
    return (
        <label className="w-full">
            <p className="pl-8">{upFirstLetter(nameFild)}:</p>
            <input
                value={valueFild}
                className="p-2 pl-8 font-medium w-full border rounded-3xl border-black"
                placeholder={upFirstLetter(nameFild)}
                onChange={(e) => setFild(e.target.value)}
            />
        </label>
    )
}

export default InfoFilds;