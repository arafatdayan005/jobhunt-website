import React, { useEffect, useState } from 'react'

function QuizCards({ quiz, result, totalResult }) {
    const [selectedValue, setSelectedValue] = useState('');
    const [temp, setTemp] = useState(false);
    const { serial, ques, op1, op2, op3, op4, ans } = quiz;

    const handleRadioChange = (event) => {
        setSelectedValue(event.target.value);        
    };

    useEffect(() => {
        if (!temp) {
            if (selectedValue === ans) {
                totalResult(result+1)
                setTemp(true)
            }
        } else {
            totalResult(result-1)
            setTemp(false)
        }
    }, [selectedValue])


    return (
        <>
            <div className='flex gap-8 items-center relative'>
                <div className='bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white font-semibold h-14 w-14 rounded-full flex justify-center items-center'>
                    <p>{serial}</p>
                </div>
                <p className='text-xl font-bold absolute left-20'>{ques}</p>
            </div>
            <div className='grid grid-cols-2 gap-4 mt-8 my-8'>
                <div className='border border-[#7E90FE] flex items-center rounded-lg py-4 ps-4 gap-4 text-lg hover:bg-[#7E90FE30]'>
                    <input type="radio" name={serial} value={op1} onChange={handleRadioChange} />
                    <p>{op1}</p>
                </div>
                <div className='border border-[#7E90FE] flex items-center rounded-lg py-4 ps-4 gap-4 text-lg hover:bg-[#7E90FE30]'>
                    <input type="radio" name={serial} value={op2} onChange={handleRadioChange} />
                    <p>{op2}</p>
                </div>
                <div className='border border-[#7E90FE] flex items-center rounded-lg py-4 ps-4 gap-4 text-lg hover:bg-[#7E90FE30]'>
                    <input type="radio" name={serial} value={op3} onChange={handleRadioChange} />
                    <p>{op3}</p>
                </div>
                <div className='border border-[#7E90FE] flex items-center rounded-lg py-4 ps-4 gap-4 text-lg hover:bg-[#7E90FE30]'>
                    <input type="radio" name={serial} value={op4} onChange={handleRadioChange} />
                    <p>{op4}</p>
                </div>
            </div>
        </>
    )
}

export default QuizCards