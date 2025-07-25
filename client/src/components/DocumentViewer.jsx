import React, { useState } from 'react';
import '../styles/DocumentViewer.css';

const DocumentViewer = () => {
  const [data, setData] = useState(null);

  const handleViewClick = async () => {
    const res = await fetch("http://localhost:5000/extract", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ documentId: 1 })
    });
    const result = await res.json();
    setData(result);
  };

  return (
    <div className="document-wrapper">
      <button className="view-button" onClick={handleViewClick}>
        📄 View Document
      </button>

      {data && (
        <div className="result-card">
          <h2>Extracted Key-Value Pairs</h2>
          <ul>
            {Object.entries(data).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {value}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DocumentViewer;
