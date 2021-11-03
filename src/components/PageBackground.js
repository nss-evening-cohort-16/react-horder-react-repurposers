import styled from 'styled-components';

export default function PageBackground(image) {
  return styled.div`
    background-image: url(${image});

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 50px 0px;

    h1 {
      color: #444430;
      font-family: 'Heebo', sans-serif;
      font-size: 84px;
      font-weight: 400;
      text-shadow: 2px 2px #a9a29e;
    }

    h5 {
      color: #a56a26;
      font-family: 'Nothing You Could Do', cursive;
      font-size: 35px;
      font-weight: bold;
    }
  `;
}
