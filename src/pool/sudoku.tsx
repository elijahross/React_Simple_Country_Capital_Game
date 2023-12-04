import React, {useEffect, useState} from 'react'

const Sudoku = () => {
    const [warn, setWarn] = useState(false);
    const [inp, setInp] = useState([{a1:1, a2:2, a3:3, a4:4, a5:5, a6:6, a7:7, a8:8, a9:9},
                                    {a1:0, a2:0, a3:0, a4:0, a5:0, a6:0, a7:0, a8:0, a9:0},
                                    {a1:4, a2:5, a3:6, a4:7, a5:8, a6:9, a7:1, a8:2, a9:3},
                                    {a1:9, a2:1, a3:2, a4:3, a5:4, a6:5, a7:6, a8:7, a9:8},
                                    {a1:6, a2:7, a3:8, a4:9, a5:1, a6:2, a7:3, a8:4, a9:5},
                                    {a1:3, a2:4, a3:5, a4:6, a5:7, a6:8, a7:9, a8:1, a9:2},
                                    {a1:8, a2:9, a3:1, a4:2, a5:3, a6:4, a7:5, a8:6, a9:7},
                                    {a1:5, a2:6, a3:7, a4:8, a5:9, a6:1, a7:2, a8:3, a9:4},
                                    {a1:2, a2:3, a3:4, a4:5, a5:6, a6:7, a7:8, a8:9, a9:1}])

//a2; a5, a8; a1; a4, a7 oder a3,a6,a9 austauschen  in reihen [1,4,7] und [3,6,9] oder [2,5,8]
//a1, a2, a3; a4, a5, a6; a7, a8, a9 austauschen in reihen [1,2,3] [4,5,6] oder, [7,8,9]

// create empty dataset
 
// create validation rules for validate the column, validate the row and validate the section;

// get random number, check if it valid for the section, and put it in the field (in diagonal);

// delete some fields;

    const checkSqr = (index, num) => {
        for (let i=0; i<9; i++) {
            if (`${inp[index]}.a${i + 1}` == num) {return false} else return true;
        }
    }

    const checkCol = (index, position, num) => {
        for (let i=0; i<9; i=i+3) {
            if (index <= i && position <=i) {return false} else return true;
        }
    }

    const checkRow = (index, position, num) => {
        
    }
    const checkTrue = () => {
        if ("") {

        }
        else return <Win></Win>;}

    const randomize = () =>{
        return Math.random() - 0.5;
    }

    const shuffle = () => {
        let n = 0;
        while (n < 3) { 
            console.log(n);
            setInp(inp.map((opt, index) =>{ if (index === n) {return({a1: inp[n+3].a4, a2: inp[n+3].a5, a3: inp[n+3].a6, a4: inp[n+6].a7, a5: inp[n+6].a8, a6: inp[n+6].a9, a7: inp[n+6].a1, a8: inp[n+6].a2, a9: inp[n+6].a3})}
                                         else if (index === (n + 3)) {return({a1 : inp[n].a1, a2: inp[n].a2, a3: inp[n].a3, a4: inp[n+6].a4, a5: inp[n+6].a5, a6: inp[n+6].a6, a7: inp[n].a7, a8: inp[n].a8, a9: inp[n].a9})}                                          
                                         else if (index === (n + 6)) {return({a1 : inp[n].a4, a2: inp[n].a5, a3: inp[n].a6, a4: inp[n+3].a7, a5: inp[n+3].a8, a6: inp[n+3].a9, a7: inp[n+3].a1, a8: inp[n+3].a2, a9: inp[n+3].a3})} else {return opt;}}));  n++;
      }; }


    useEffect(() => {
        shuffle();
    }, [warn])

    const changeValue = (e, index, name) => {
        if (e.target.valueAsNumber === NaN || 10 < e.target.valueAsNumber < 0) {setWarn(true); setTimeout(() => {setWarn(false)}, 3000)}
        else {setInp(inp.map((opt) => {if (opt === inp[index]) {return ({...opt, name: e.target.valueAsNumber})} else return opt}));}};

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="flex flex-col">
            <div id="1" className='flex relative flex-row justify-center items-center'>
                <div className={`${warn ? "block" : "hidden"} absolute left-[-500px] p-2 border-[1px]`}>Input must be valid Number between 1 and 9</div>
                <div id="a1" className={` border-[2px] grid grid-cols-3 grid-flow-row gap-[2px]`}> 
                    {inp.map((seal, index) => 
                        <div className='grid-cols-3' key={`${inp[index].a1}${inp[index].a2}${inp[index].a3}${inp[index].a4}${inp[index].a5}${inp[index].a6}${inp[index].a7}${inp[index].a8}${inp[index].a9}`}>
                            <div className='m-[10px]'><input className='p-1 m-1 su' 
                                    name="a1" 
                                    onChange={(e) => {changeValue(e, index, name)}} 
                                    defaultValue={inp[index].a1}></input>
                            <input className='p-1 m-1 su' 
                                    name="a2" 
                                    onChange={(e) => {changeValue(e, index, name)}} 
                                    defaultValue={`${inp[index].a2}`}></input>
                            <input className='p-1 m-1 su' 
                                    name="a3" 
                                    onChange={(e) => {changeValue(e, index, name)}} 
                                    defaultValue={`${inp[index].a3}`}></input> </div>
                            <div className='m-[10px]'><input className='p-1 m-1 su' 
                                    name="a4" 
                                    onChange={(e) => {changeValue(e, index, name)}} 
                                    defaultValue={`${inp[index].a4}`}></input>
                            <input className='p-1 m-1 su' 
                                    name="a5" 
                                    onChange={(e) => {changeValue(e, index, name)}} 
                                    defaultValue={`${inp[index].a5}`}></input>
                            <input className='p-1 m-1 su' 
                                    name="a6" 
                                    onChange={(e) => {changeValue(e, index, name)}} 
                                    defaultValue={`${inp[index].a6}`}></input></div>
                            <div className='m-[10px]'><input className='p-1 m-1 su' 
                                    name="a7" 
                                    onChange={(e) => {changeValue(e, index, name)}} 
                                    defaultValue={`${inp[index].a7}`}></input>
                            <input className='p-1 m-1 su' 
                                    name="a8" 
                                    onChange={(e) => {changeValue(e, index, name)}} 
                                    defaultValue={`${inp[index].a8}`}></input>
                            <input className='p-1 m-1 su' 
                                    name="a9" 
                                    onChange={(e) => {changeValue(e, index, name)}} 
                                    defaultValue={`${inp[index].a9}`}></input></div>                                       
                        </div>
                    )}
                </div>
                {inp[1].a1}{inp[1].a2}{inp[1].a3}
                <div><button className='btn m-8' onClick={shuffle}>Schuffle</button></div>
            </div>
        </div>
    </main>
  )
}

export default Sudoku
