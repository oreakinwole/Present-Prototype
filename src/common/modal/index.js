import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import './modal.css';

import modalPic from '../../images/modpic.png';

import caret from '../../images/caret.svg';
import locationIcon from '../../images/location.svg';

Modal.setAppElement('#root');

const PepperModal = ({ isOpen, closeModal }) => {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      maxWidth: '90%',
      height: '592px',
      transform: 'translate(-50%, -50%)',
    },
    Overlay: { zIndex: 1000000000000 },
  };

  const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    // @media screen and (max-width: 730px) {flex-flow: column nowrap;}

      aside {
        height: 100%;
        width: 50%;
        background: #fff url(${modalPic}) no-repeat center;
        background-size: cover;
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-end;

          .info {
            width: 100%;
            min-height: 210px;
            background: #000;
            color: #fff;

            padding: 14px 25px 0px;
            

            .title {
              margin: 0;
              font-style: normal;
              font-weight: 500;
              font-size: 24px;
              line-height: 36px;
              text-align: center;
            }

            .desc {
              font-style: normal;
              font-weight: 300;
              font-size: 16px;
              line-height: 157.2%;
              margin-top: 10px;

            }

            .bottom {
              display: flex;
              justify-content: space-between;
              align-items: center;
              flex-wrap: wrap;
                p{
                  font-style: normal;
                  font-weight: 600;
                  font-size: 24px;
                }
            }

            .buttons {
              display: flex;
              align-items: center;
              
              font-style: normal;
              font-weight: lighter;
              font-size: 24px;
              .count{margin: 0 15px;}

              div {
                width: 50px;
                height: 50px;
                border-radius: 50px;
                background: white;
                color: black;
                cursor: pointer;

                font-style: normal;
                font-weight: lighter;
                font-size: 24px;

                display: flex;
                align-items: center;
                justify-content: center;
              }
            }
          }
      }

      main {
        width: 50%;
        height: 100%;
        background: white;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-around;
        align-items: center;

          p {
            max-width: 90%;

            text-align: center;
            font-style: normal;
            font-weight: 500;
            font-size: 32px;
            line-height: 48px;

            color: #000;
          }

          .options {
              width: 90%;
              display: flex;
              flex-flow: column nowrap;
              justify-content: space-between;
              align-items: center;

                select {
                  border: 1px solid #000000;
                  height: 56px;
                  width: 100%;
                  border-radius: 5px;
                  
                  appearance: none;
                  background: url(${locationIcon}) left 20px top 50% no-repeat, url(${caret}) right 20px top 50% no-repeat;
                  background-color: #fff;
                  padding: 0 26px 0 48px !important;

                  font-weight: normal;
                  font-size: 16px;
                  line-height: 24px;
                  color: #000;

                  margin-bottom: 16px;
                }

                button {
                  border: none; background: #000; color: #fff;
                  height: 56px;
                  width: 100%;
                  border-radius: 5px;
  
                  font-style: normal;
                  font-weight: 600;
                  font-size: 20px;
                  text-align: center;
                  cursor: pointer;
  
                  color: #FFFCFC;
                }

            }
      }

  
  `;

  return (
    // To animate the modal, add these classes: animate__zoomIn animate__animated
    <Modal
      isOpen={isOpen}
      onRequestClose={() => closeModal()}
      style={customStyles}
      contentLabel='Verify'
      className='Modal'
      overlayClassName='Overlay'

    >

      <Wrapper>
        <aside>
          <footer className="info">
            <p className="title">Spaghetti & Barbeque chicken</p>
            <p className="desc">Gluten Free Cauliflower crust dough with our handcrafted tomato sauce, covered with a blend of fine cheeses.</p>

            <div className="bottom">
              <p>₦ 4,670.00 </p>

              <div className="buttons">
                <div><p>-</p></div>
                <p className="count">1</p>
                <div><p>+</p></div>
              </div>
            </div>
          </footer>
        </aside>

        <main>
          <p>We need to confirm the availability of this meal from the Black pepper Annex closest to you.</p>

          <footer className="options">
            <select> <option>Select Closest Blackpepper to you</option> </select>
            <button>Confirm</button>

          </footer>
        </main>

      </Wrapper>

    </Modal>
  );
};

export default PepperModal;
