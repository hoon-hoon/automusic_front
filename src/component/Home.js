import { useEffect, useState } from "react";
import Loading from "./Loading";
import SongService from "../service/SongService";

export default function Home(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [songs, setSongs] = useState([]);

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

  return (
    <>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-900">
                  <tr>
                    {isLoading ? (
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Songs
                      </th>
                    ) : (
                      <>
                        <th
                          className="px-6 py-3 text-left text-lg font-extrabold text-gray-500 uppercase tracking-wider"
                        >
                          Songs
                        </th>
                        <th
                          className="px-6 py-3 text-left text-lg font-extrabold text-gray-500 uppercase tracking-wider"
                        >
                          User
                        </th>
                        <th
                          className="px-6 py-3 text-right text-lg font-extrabold text-gray-500 uppercase tracking-wider"
                        >
                          Controls
                        </th>
                      </>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {isLoading ? (
                    <Loading />
                  ) : (
                    <>
                      {songs.map((song) => (
                        <tr key={song.fileName}  className="bg-gray-900">
                          <td className="px-6 py-4 whitespace-nowrap text-lg font-medium text-white">
                            {song.fileName}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-lg font-medium text-white">
                            {song.userId}
                          </td>
                          <td className="px-12 py-4 whitespace-nowrap text-lg font-medium text-white text-right">
                            <button
                              className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-black bg-gray-100 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                              onClick={() => props.playSongButton(song)}
                            >
                              Play
                            </button>
                          </td>
                        </tr>
                      ))}
                    </>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}