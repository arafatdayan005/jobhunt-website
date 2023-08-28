import React, { useEffect, useState } from 'react'
import { Link, useLoaderData, useNavigate, useParams } from 'react-router-dom'
import QuizCards from './QuizCards'
import Swal from 'sweetalert2'

function Quiz() {
    const data = useLoaderData()
    const jobId = useParams()
    const navigate = useNavigate()

    const initialTime = 300;
    const [time, setTime] = useState(initialTime);
    const [isRunning, setIsRunning] = useState(true);
    let [result, setResult] = useState(0)
    const [submit, setSubmit] = useState(false)

    const quiz = data.find(data => data.id === jobId.id).quiz

    const totalResult = (updateResult) => {
        setResult(updateResult)
    }


    const handleSubmit = () => {
        console.log(result)
        //setSubmit(true)
        setIsRunning(false);
        if (result >= 7) {
            Swal.fire({
                title: `<strong>Congratulations! </br> ${result}/10</strong>`,
                text: 'You have passed the quiz',
                width: 600,
                padding: '3em',
                color: '#716add',
                background: '#e8ffed',
                confirmButtonText: 'Drop CV',
            })
                .then(async e => {
                    const { value: file } = await Swal.fire({
                        title: 'Select PDF file',
                        input: 'file',
                        inputAttributes: {
                            'accept': 'application/pdf',
                            'aria-label': 'Upload your CV (PDF Format)'
                        }
                    })

                    if (file) {
                        Swal.fire(
                            'Successful!',
                            'Good Luck for your interview session',
                            'success'
                        )
                        navigate('/appliedjobs')
                    }
                })
        } else {
            Swal.fire({
                title: `<strong>Unfortunate :( </br> ${result}/10</strong>`,
                text: 'You have failed the quiz',
                width: 600,
                padding: '3em',
                color: '#716add',
                background: '#ffe8e8',
                confirmButtonText: 'Browse Similar Jobs',
            })
                .then(e => navigate('/'))
        }

    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    useEffect(() => {
        let timerInterval;

        if (isRunning && time > 0) {
            timerInterval = setInterval(() => {
                setTime((prevTime) => prevTime - 1);
            }, 1000);
        } else if (time === 0) {
            setIsRunning(false);
            clearInterval(timerInterval);
        }

        return () => {
            clearInterval(timerInterval);
        };
    }, [isRunning, time, initialTime, jobId]);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return (
        <>
            <div className="px-48 pt-8 flex flex-wrap items-center justify-between">
                <div>
                    <h2 className='font-bold text-xl'>JobHuntBD</h2>
                    <p className='text-center bg-gradient-to-r from-[#7e8ffe] to-[#9873ff] bg-clip-text text-transparent font-bold text-4xl'>QUIZ</p>
                </div>
                <Link to={'/home'}>
                    <button className='bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white font-semibold px-5 py-3 rounded-lg hover:scale-110 duration-300 hover:cursor-pointer'>
                        Exit Quiz
                    </button>
                </Link>
            </div>
            <div className='text-center my-12'>
                <p className='text-red-500 font-bold text-lg'>Attention!</p>
                <p className='font-bold text-lg'>You have 5 minute to answer 10 questions.</p>
                <p className='font-bold text-lg'>Please keep an eye on the timer and make sure to answer all questions before time runs out.</p>
            </div>
            <div className='px-48 grid grid-cols-1 lg:grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    {
                        quiz.map(ques => (
                            <QuizCards key={ques.serial} quiz={ques} result={result} totalResult={totalResult} ></QuizCards>
                        ))
                    }
                </div>
                <div className='col-span-1'>
                    <div data-aos="zoom-in" data-aos-duration="1000" className='border border-[#7E90FE] p-8 rounded-lg sticky top-[25%]'>
                        <h1 className='bg-gradient-to-r from-[#7e8ffe] to-[#9873ff] bg-clip-text text-transparent font-bold text-xl text-center'>Time Remaining</h1>
                        <p className='text-center font-bold text-7xl mb-12 mt-8'>{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</p>
                        <button disabled={submit} onClick={handleSubmit} className='bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white font-semibold px-5 py-3 rounded-lg w-full disabled:opacity-70 hover:scale-110 duration-300 hover:cursor-pointer'>Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Quiz