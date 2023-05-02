import { useState, useEffect } from 'react';

const fetchJson = async (url: string) => {
    const response = await fetch(url)
    const jsonData = await response.json();
    return jsonData.rows
}

function awaitAll(list: Array<any>, fetchJson: (url: string) => void) {
    const promises:any = [];
  
    list.forEach((x: string) => {
      promises.push(fetchJson(x));
    });
  
    return Promise.all(promises);
  }
  

const useFetchJson = (arrUrl: Array<string>) => {
    const [data, setData] = useState<Array<any>>([])
    function loadData() {
        awaitAll(arrUrl, fetchJson).then(results => setData(results.flat(1)))
        .catch(e => console.error(e));
    }

    useEffect(() => {
        loadData()
      }, [])

    return data && data.length ? data : undefined
}

export {
    useFetchJson
}
