import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Main from './components/Main';
import SideBar from './components/SideBar';

function App() {

    const [showModal, setShowModal] = useState(false);

    function handleToggleModal() {
        setShowModal(state => !state);
    }

    useEffect(() => {
        (async () => {
            const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
            const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=${NASA_KEY}`;

            console.log(url)
            try {

                const res = await fetch(url);
                const data = await res.json();

                console.log(data)

            } catch (err) {
                console.log(err.message);

            }

        })();
    }, []);

    return (
        <>
            <Main />
            {showModal &&

                (<SideBar handleToggleModal={handleToggleModal} />)

            }
            <Footer handleToggleModal={handleToggleModal} />
        </>
    );
}

export default App;
