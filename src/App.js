import {useEffect, useState} from 'react';
import SongService from "./service/SongService";
import Generate from './component/Generate';
import { RiFolderMusicLine } from "react-icons/ri";
import { MdQueueMusic, MdPlaylistAdd } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from "./component/Home";
import Login from "./component/Login";
import SignUp from "./component/SignUp";
import MyMusic from "./component/MyMusic";


// import Catalog from "./components/Catalog";
// import Home from "./components/Home";
// import Player from "./components/Player";
// import EditSong from "./components/EditSong";
// import UploadSong from "./components/UploadSong";

function App() {

    const [currentSong, setCurrentSong] = useState({
        fileName: 'sample',
        userId: 'sample'
    });
    const [isLoggedin, setIsLoggedin] = useState(false);

    useEffect(() => {
        const user = localStorage.getItem("USER");
        if (!user) {
            setIsLoggedin(false);
            console.log("실패");
        } else {
            setIsLoggedin(true);
            console.log(user);
            console.log("성공");
        }
    }, []);

    function playSongHandler(song) {
        setCurrentSong(song);
    }

    const logoutClicked = () => {
        localStorage.removeItem("USER");
    }

    function handleCreateSong(musicDto) {
        SongService.createSong(musicDto)
            .then((song) => {
                playSongHandler(song)
                console.log(currentSong);
            })
            .catch((error) => {
                console.log("fail");
            });
    }
    return (

        <Router>
            <div className="mx-auto md:max-w-4xl mt-50">
                <div className="bg-gray-900 text-center m-5 rounded-3xl pt-3 h-fit">
                    <h1 className="text-6xl font-extrabold text-white">Auto Music</h1>
                    <img alt="" src="https://media.tenor.com/HJvqN2i4Zs4AAAAi/milk-and-mocha-cute.gif"
                        className="mx-auto p-4" />
                    <div className="inline-flex pb-2 space-x-2">

                        <Link to="/allMusic">
                            <button type="button"
                                    className=" w-32 inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-gray-100 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700">
                                <MdQueueMusic className=" text-lg mr-2" />
                                All Music
                            </button>
                        </Link>

                        <Link to="/myMusic">
                            <button type="button"
                                    className=" w-32 inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-gray-100 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700">
                                <RiFolderMusicLine className=" text-lg mr-2" />
                                My Music
                            </button>
                        </Link>

                        <Link to="/generate">
                            <button type="button"
                                    className=" w-32 inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-gray-100 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700">
                                <MdPlaylistAdd className=" text-lg mr-2" />
                                Generate
                            </button>
                        </Link>
                        {isLoggedin ? (
                            <Link to="/signIn">
                                <button type="button"
                                    className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-gray-100 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700">
                                    <FaRegUserCircle />
                                    Login
                                </button>
                            </Link>
                        ) : (
                            <Link to="/">
                                <button type="button" onClick={logoutClicked}
                                    className=" w-32 inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-gray-100 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700">
                                <FaRegUserCircle className=" text-lg mr-2" />
                                    Logout
                                </button>
                            </Link>
                        )}    
                    </div>
                </div>
                <div className="sticky top-0">
                    <audio className="mx-auto w-full sticky top-0" autoPlay={true}
                           src={`http://ykh8746.iptime.org:8080/static/music/${currentSong.userId}_${currentSong.fileName}.wav`} controls>
                        <source type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
                </div>
                <Switch>
                    <Route path="/generate">
                        <Generate createSong={handleCreateSong} />
                    </Route>
                    <Route path="/myMusic">
                        <MyMusic playSongButton={playSongHandler}></MyMusic>
                    </Route>
                    <Route path="/signin">
                        <Login></Login>
                    </Route>
                    <Route path="/signUp">
                        <SignUp></SignUp>
                    </Route>
                    <Route path="/allMusic">
                        <Home  playSongButton={playSongHandler} />
                    </Route>
                </Switch>
            </div>
        </Router>

    );
}

export default App;