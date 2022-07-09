import { useEffect, useState } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { upFirstLetter, helperSelect } from "../Helper/HelperFunction";
import { IselectObj } from "../../Types/Vehicle";
import { CAR_FILTER, mok } from "../Helper/HelperContents";
//import { v4 } from 'uuid';



function Filter() {
    const [filters, setFilters] = useState<IselectObj|{}>({})

    useEffect(()=>{
        if (mok) {            
            setFilters(helperSelect(mok))
        }
    },[mok])

    function selec(text:string) {
        let helperArr:string[] =[]
       
        Object.entries(filters).forEach((arr) => {arr[0]===text? helperArr = arr[1] : console.log()})

        return(
            <label className="w-full" key={text}> 
            <p className="pl-8">{upFirstLetter(text)}:</p>
                <select className="p-2 pl-8 font-medium w-full border rounded-3xl border-black" >
                 {helperArr.map((e:string, i) => <option key={i} >{e}</option>)}        
                </select>
            </label>
        )
    } 
    return (
        <div className="p-4 bg-slate-200 h-screen" >
            <a href='/'><AiOutlineArrowLeft className='h-6 w-8'/></a>
            <div className="m-6 mt-4  bg-white">
                <div className=" pt-[3rem] items-center p-4 ">
                    {CAR_FILTER.map(e => selec(e))}
                </div>
                <div className="flex justify-end mt-8">
                    <button className="border rounded-3xl m-10 px-8 p-2 bg-green-300">
                        <p>SALVAR</p>
                    </button>
                </div>
            </div>
        </div>
    );
}

export { Filter };