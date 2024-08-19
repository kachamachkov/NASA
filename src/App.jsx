import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Main from './components/Main';
import SideBar from './components/SideBar';

function App() {

    const [data, setData] = useState(null);
    const [showModal, setShowModal] = useState(false);

    function handleToggleModal() {
        setShowModal(state => !state);
    }

    useEffect(() => {
        (async () => {
            const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
            const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=${NASA_KEY}`;

            const today = (new Date()).toDateString();
            const localKey = `NASA-${today}`;

            if (localStorage.getItem(localKey)) {
                const apiData = JSON.parse(localStorage.getItem(localKey));
                setData(apiData);
                console.log('Fetched from cache today');
                return;
            }

            localStorage.clear();

            try {

                const res = await fetch(url);
                const apiData = await res.json();

                localStorage.setItem(localKey, JSON.stringify(apiData));
                console.log('Fetched from API today');
                setData(apiData);


            } catch (err) {
                console.log(err.message);

            }

        })();
    }, []);

    return (
        <>
            {data ? (<Main data={data} />) :
                (<div className='loading'>
                    <i class="fa-solid fa-gear"></i>
                </div>
                )}
            {showModal &&

                (<SideBar data={data} handleToggleModal={handleToggleModal} />)

            }
            {data && (<Footer data={data} handleToggleModal={handleToggleModal} />)}
        </>
    );
}

export default App;
