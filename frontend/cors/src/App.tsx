import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";

export const GET_USER_PLAYLISTS = gql`
query UserPlaylists {
  userPlaylists {
    songs {
      name
    }
    spotifyId
    name
  }
}
`;

function App() {
  const [count, setCount] = useState(0)

  const { error, loading, data } = useQuery(GET_USER_PLAYLISTS);

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (error) return <>error</>;
  if (loading) return <>loading...</>;


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
