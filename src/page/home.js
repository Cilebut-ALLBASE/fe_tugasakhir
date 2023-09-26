import React from 'react';
import LiveClock from '../components/live-clock';
import { Sidebar } from '../components/sidebar';

export const Home = () => {
  return (
    <div>
      <div className='absolute'>
        <div className='content'>
          <h1>Overview</h1>

          <div className='present'>
            <p>Present</p>
          </div>

          <div className='absent'>
            <p>Absent</p>
          </div>
        </div>
      </div>
      <Sidebar />
    </div>
  );
};

export default Home;