import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Counter from './counter.jsx';
import { useState } from 'react';



createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>
)
