import React, { useState } from 'react';
import Modal from 'react-modal';
import '../styles/popup-absen-style.css'

Modal.setAppElement('#root');

const PopupAbsen = ({ isOpen, onClose, onAbsenSubmit }) => {
    const [selectedOption, setSelectedOption] = useState(''); // present atau sick

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const handleSubmit = () => {
        onAbsenSubmit(selectedOption);
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="Absen" >
            <div className='cover'>
                <div className='flex'>
                    <h2>Absen</h2>
                </div>
                <div className='radio'>
                    <label>
                        <input type='radio' className='present-radio' value="Present" checked={selectedOption === "Present"} onChange={handleOptionChange} required/>
                        Present
                    </label>
                    <label>
                        <input type="radio" className='sick-radio' value="Sick" checked={selectedOption === 'Sick'} onChange={handleOptionChange} required/>
                        Sick
                    </label>
                </div>
                <button className='submit-btn' onClick={handleSubmit}>Submit</button>
                <button className='cancel-btn' onClick={onClose}>Cancel</button>
            </div>
        </Modal>
    );
}

export default PopupAbsen;