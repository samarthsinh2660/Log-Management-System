import { useEffect, useState } from 'react';
import "./App.css";

function App() {
  const [logs, setLogs] = useState([]);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    // Fetch logs from the backend API
    fetch(`${backendUrl}/api/logs`)
      .then(response => response.json())
      .then(data => setLogs(data))
      .catch(error => console.error('Error fetching logs:', error));
  }, [backendUrl]);

  return (
    <div id="root">
      <h1>Welcome to Log Sys</h1>
      {logs.length === 0 ? (
        <p>No logs found.</p>
      ) : (
        <ul>
          {logs.map((log) => (
            <li key={log.id}>
              <strong>ID:</strong> {log.id} - <strong>Message:</strong> {log.message} -{' '}
              <strong>Time:</strong> {new Date(log.created_at).toLocaleString()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
