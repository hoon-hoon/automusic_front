import {useEffect, useState} from "react";
import Loading from "./Loading";
import SongService from "../service/SongService";
import {Link, useHistory} from "react-router-dom";

export default function MyMusic(props){

    const {isLoading} = props;
    const [songs, setSongs] = useState([]);
    const history = useHistory();

    useEffect(() => {
        SongService.getMySong()
            .then((response) => {
                setSongs(response.data);
            })
            .catch((err)=>{
                history.push("/login");
                console.log(err);
            })
    }, []);

    return (
        <>
            <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-900">
                                <tr className="grid grid-cols-6">
                                    {
                                        (isLoading) ?
                                            <>
                                                <th scope="col"
                                                    className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider">
                                                    Songs
                                                </th>
                                            </> :
                                            <>
                                                <th scope="col"
                                                    className="col-span-3 px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider">
                                                    Songs
                                                </th>
                                                <th scope="col"
                                                    className="col-span-3 px-6 py-3 text-right text-lg font-medium text-gray-500 uppercase tracking-wider">
                                                    Controls
                                                </th>
                                            </>
                                    }


                                </tr>
                                </thead>
                                <tbody>

                                {

                                    (isLoading) ? <Loading /> :
                                        <>
                                            {
                                                songs.map((song) => {
                                                    return (
                                                        <tr className="bg-gray-900 grid grid-cols-6">
                                                            <td className="col-span-3 px-6 py-4 whitespace-nowrap text-lg font-medium text-white">
                                                                {song.fileName}
                                                            </td>
                                                            <td className="col-span-3 px-6 py-4 whitespace-nowrap text-lg font-medium text-white">
                                                                {song.userId}
                                                            </td>
                                                            <td className="col-span-3 px-6 py-4 whitespace-nowrap text-right text-sm font-medium inline-flex justify-end space-x-2">
                                                                <button
                                                                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-black bg-gray-100 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                                                                    onClick={() => props.playSongButton(song)}>Play
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    );
                                                })
                                            }
                                        </>

                                }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );

}