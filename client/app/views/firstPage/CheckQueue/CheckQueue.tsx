'use client'
import {
  useEffect,
  useState,
} from 'react';

const CheckQueue = () => {
  const [text, setText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

    const check = async () => {
        setIsLoading(true);
        setError('');
        setSuccess('');
        try {
        const response = await fetch('http://localhost:3000/checkjobs', {
            method: 'GET',
            mode: 'cors',
            headers: {
            'Content-Type': 'application/json'
            },
        });
    
        if (!response.ok) {
            throw new Error('Ошибка при проверке очереди');
        }
        console.log(await response.json())
        setSuccess('Данные успешно получнеы!');
        } catch (err) {
        setError('Произошла ошибка: ' + (err as Error).message);
        } finally {
            setIsLoading(false);
        }
    }
    useEffect(() => {
        check();
    },[])
    return (
        <>
            {error && <div>{error}</div>}
            {success && <div>{success}</div>}
        </>
    );
}

export default CheckQueue;
