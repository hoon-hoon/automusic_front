import {useEffect, useState} from 'react';
import SongService from "./service/SongService";
import Generate from './component/Generate';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from "./component/Home";
import Login from "./component/Login";
import SignUp from "./component/SignUp";


// import Catalog from "./components/Catalog";
// import Home from "./components/Home";
// import Player from "./components/Player";
// import EditSong from "./components/EditSong";
// import UploadSong from "./components/UploadSong";

function App() {

    const BACKEND_URL = "http://ykh8746.iptime.org:8080/song";
    const [isPlaying, setPlaying] = useState(false);
    const [songs, setSongs] = useState([]);
    const [currentSong, setCurrentSong] = useState({
        fileName: 'sample',
        userId: 'sample'
    });
    const [queue, setQueue] = useState([]);
    const [history, setHistory] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    //Load the songs from the backend when the page first loads
    useEffect(() => {
        SongService.getSongs()
            .then(function (response) {
                // handle success
                setSongs(response.data);
                setIsLoading(false);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });

    }, []);

    //every time the currentSong is updated, play that song.
    useEffect(() => {
        play();
    }, [currentSong]);

    function audio(){
        return document.querySelector("audio");
    }

    function play() {
        audio().play().then(r => console.log("Playing song."));
        setPlaying(true);
    }

    function pauseSong(){
        audio().pause();
        setPlaying(false);
    }

    function restartSong() {
        audio().currentTime = 0;
    }

    function refreshSongs(){

        setIsLoading(true);

        SongService.getSongs()
            .then(function (response) {
                setSongs(response.data);
                setIsLoading(false);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    function updateSong(updatedSong){

        setSongs(songs.map(function (song) {
            if (song.id === updatedSong.id){
                return updatedSong;
            }
            return song;
        }));

    }

    //go to the next song if there is one
    function nextSong() {

        if (queue.length > 0) {
            let nextSong = queue[0];
            console.log("Going to next song: " + nextSong);
            setHistory([...history, currentSong]);
            setCurrentSong(nextSong);
            let currentQueue = [...queue];
            currentQueue.shift();
            setQueue(currentQueue);
        }else{
            //pick a random song to play
            const randIndex = Math.floor(Math.random() * songs.length);
            setHistory([...history, currentSong]);
            setCurrentSong(songs[randIndex]);
        }
    }

    //go to the prev song if there is one
    function prevSong() {

        //if within 5 seconds, go to last song
        if (document.querySelector("audio").currentTime <= 5){
            if (history.length > 0) {
                let currentHistory = history;
                let lastSong = history.pop();
                setHistory(currentHistory);
                console.log("Going to prev song: " + lastSong);
                setQueue([currentSong, ...queue]);
                setCurrentSong(lastSong);
            }
        }else{
            restartSong();
        }

    }

    function playSongHandler(song) {
        setCurrentSong(song);
    }

    function queueSongHandler(songKey) {
        setQueue([...queue, songKey]);
    }

    return (

        <Router>
            <div className="mx-auto md:max-w-4xl mt-50">

                <div className="bg-gray-900 text-center m-5 rounded-3xl pt-3">
                    <h1 className="text-6xl font-extrabold text-white">Auto Music</h1>
                    <img src="https://media.tenor.com/HJvqN2i4Zs4AAAAi/milk-and-mocha-cute.gif"
                         className="mx-auto p-4"/>
                    <div className="inline-flex pb-2 space-x-2">

                        <Link to="/allMusic">
                            <button type="button"
                                    className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-gray-100 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" className="-ml-1 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                                All Music
                            </button>
                        </Link>

                        <Link to="/myMusic">
                            <button type="button"
                                    className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-gray-100 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" className="-ml-1 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                </svg>
                                My Music
                            </button>
                        </Link>

                        <Link to="/generate">
                            <button type="button"
                                    className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-gray-100 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" className="-ml-1 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                </svg>
                                Generate
                            </button>
                        </Link>

                        <Link to="/login">
                            <button type="button"
                                    className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-gray-100 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" className="-ml-1 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                </svg>
                                Login
                            </button>
                        </Link>

                    </div>
                    <audio onEnded={nextSong} onPause={() => setPlaying(false)} onPlay={() => setPlaying(true)} className="mx-auto w-full"
                           src={`http://ykh8746.iptime.org:8080/static/music/${currentSong.userId}_${currentSong.fileName}.wav`} autoPlay={true} controls>
                        <source type="audio/mpeg"/>
                        Your browser does not support the audio element.
                    </audio>
                </div>

                <Switch>
                    <Route path="/generate">
                        <Generate />
                    </Route>
                    {/*<Route path="/song/:id">*/}
                    {/*    <EditSong updateSong={updateSong} refreshSongs={refreshSongs} />*/}
                    {/*</Route>*/}
                    {/*<Route path="/upload">*/}
                    {/*    <UploadSong />*/}
                    {/*</Route>*/}
                    <Route path="/login">
                        <Login></Login>
                    </Route>
                    <Route path="/signUp">
                        <SignUp></SignUp>
                    </Route>
                    <Route path="/allMusic">
                        <Home updateSong={updateSong} songs={songs} isLoading={isLoading} queue={queue} currentSong={currentSong} playSongButton={playSongHandler} queueSong={queueSongHandler} setQueue={setQueue} />
                    </Route>
                </Switch>

            </div>

            {/*<div className="mx-auto w-3/6">*/}
            {/*    <Player isPlaying={isPlaying} play={play} currentSong={currentSong} queue={queue} playSongButton={playSongHandler} setQueue={setQueue} nextSong={nextSong} prevSong={prevSong} pauseSong={pauseSong} />*/}
            {/*</div>*/}
        </Router>

    );
}

export default App;
