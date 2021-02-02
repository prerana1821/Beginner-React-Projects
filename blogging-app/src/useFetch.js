import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    var [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    // console.log(res);
                    if (!res.ok) {
                        throw Error('Sorry, could not fetch data, Please try again later!');
                    }
                    return res.json();
                })
                .then(data => {
                    // console.log(data);
                    // isPending = false;
                    setIsPending(false);
                    setError(null);
                    setData(data);
                }).catch(error => {
                    // console.log(error);
                    // console.log(error.message);
                    setIsPending(false);
                    setError(error.message);
                });
        }, 1000);
    }, [url]);

    return { data, isPending, error };
}

export default useFetch;
