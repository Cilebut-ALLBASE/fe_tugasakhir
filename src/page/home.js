import React from 'react';
import LiveClock from '../components/live-clock';
import { Sidebar } from '../components/sidebar';
import present from '../assets/Present-bg.png';
import absent from '../assets/Absent-bg.png';
import Calendar from '../components/calendar';

export const Home = () => {
  return (
    <div>
      <div className='absolute'>
        <div className='content'>
          <h1 className='h1'>Overview</h1>

          <div className='status'>
            <div className='present'>
              <p>Present</p>
              <img src={present} alt='bg' className='present-bg'></img>
            </div>

            <div className='absent'>
              <p>Absent</p>
              <img src={absent} alt='bg' className='absent-bg'></img>
            </div>
          </div>

          <div className='bungkus-kedua'>
          <div className='history'>
            <h4 className='h4'>Leave History</h4>
            <table>
              <thead>
                <tr>
                  <th>Type of Leave</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>halo</td>
                  <td>halo</td>
                  <td>halo</td>
                </tr>
                <tr>
                  <td>halo</td>
                  <td>halo</td>
                  <td>halo</td>
                </tr>
                <tr>
                  <td>halo</td>
                  <td>halo</td>
                  <td>halo</td>
                </tr>
                <tr>
                  <td>halo</td>
                  <td>halo</td>
                  <td>halo</td>
                </tr>
              </tbody>
            </table>
            
            </div>

            <div className='clock'>
              <LiveClock />
            </div>

            <div className='kalender'>
              <Calendar />
            </div>
            </div>
        </div>
      </div>
      <Sidebar />
    </div>
  );
};

export default Home;