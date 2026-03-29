'use client'
import {
  useEffect,
  useState,
} from 'react';

interface JobInterface {
    id: number
    finishedOn: number
    processedOn: number
}

const CheckQueue = () => {
  const [jobs, setJobs] = useState<JobInterface[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

    const check = async (): Promise<JobInterface[]> => {
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
        const data = await response.json() as JobInterface[]
        return data
        } catch (err) {
        setError('Произошла ошибка: ' + (err as Error).message);
        return []
        } finally {
            setIsLoading(false);
        }
    }
    useEffect(() => {
        const intervalId = setInterval(async () => {
            const jobs = await check();
            setJobs(jobs);
            console.log(jobs)
          }, 1000);

          return () => {
            clearInterval(intervalId);
          };
    },[])
    return (
        <>
            {error && <div>{error}</div>}
            {success && <div>{success}</div>}
            {!isLoading && <div>{
            jobs.map((job, index)=>(
                <div key={index}>
                    Job #{job.id}. Status: {job.finishedOn ? 'finished.': 'active.'}
                </div>
            ))
            }</div>}
        </>
    );
}

export default CheckQueue;
