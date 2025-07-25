import React from 'react';
import './App.css';
import AnimatedArrows from './components/AnimatedArrows';
import DocumentViewer from './components/DocumentViewer';

function App() {
  return (
    <div className="app-wrapper">
      <h1 className="title">🩺 Aarogya Task UI</h1>
      <AnimatedArrows />
      <DocumentViewer />
    </div>
  );
}

export default App;
