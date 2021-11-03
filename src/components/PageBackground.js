import styled from 'styled-components';

export default function PageBackground(image) {
  return styled.div`
    background-image: url(${image});
    /* position: static; */
    height: 100%;
    width: 100%;
    background-repeat: repeat;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 50px 0px;

    h1 {
      color: #444430;
      text-align: center;
      font-size: 84px;
      font-weight: 400;
      font-family: 'Heebo', sans-serif;
      text-shadow: 2px 2px #a9a29e;
    }
  `;
}
