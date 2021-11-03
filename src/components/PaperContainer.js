import styled from 'styled-components';
import image from '../images/pageBackgroundImage.png';

export default function PaperContainer() {
  return styled.div`
    background-image: url(${image});
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 70px 50px;
    margin: 10px;
    box-shadow: 10px 10px 10px 0px;
  `;
}
