import { useEffect, useState } from 'react';

// Runs during component re-rendering(only if dependency changes)
const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setPending] = useState(true);
    const [error, setError] = useState(null);

    const handeDelete = (id) => {
        const newData = data.filter((data) => data.id !== id);
        setData(newData);
    }

    useEffect(() => {
        // Used to stop usedEffect when new page is opened
        const abortCont = new AbortController();

        setTimeout(() => { // Simlates 1 second loading time
            fetch(url, { signal: abortCont.signal })
                .then(res => {
                    if (!res.ok) {
                        throw Error('Could not fetch data for that resource!');
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data);
                    setPending(false);
                    setError(null);
                })
                .catch(err => {
                    // Make sure state is only updated when component is opened
                    if (err.name === 'AbortError') {
                        console.log('fetch aborted');
                    } else {
                        setPending(false);
                        setError(err.message);
                    }
                });
        }, 1000);
        
        // Abort when component closed
        return () => abortCont.abort();

    }, [url]);

    return { data, isPending, error, handeDelete };
}

export default useFetch;

