import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updatePrices } from '../store/slices/cryptoSlice';

// Simulates WebSocket for price updates
const WebSocketSimulator: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('WebSocket Simulator started');
    
    // Update prices every 1.5 seconds
    const interval = setInterval(() => {
      dispatch(updatePrices());
    }, 1500);

    // Clean up on component unmount
    return () => {
      console.log('WebSocket Simulator stopped');
      clearInterval(interval);
    };
  }, [dispatch]);

  // This component doesn't render anything
  return null;
};

export default WebSocketSimulator; 