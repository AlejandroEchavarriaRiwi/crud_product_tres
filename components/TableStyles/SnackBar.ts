import styled from 'styled-components';

const Snackbar = styled.div<{ visible: boolean }>`
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
  min-width: 250px;
  background-color: #4caf50; /* Color verde */
  color: white;
  text-align: center;
  border-radius: 2px;
  padding: 16px;
  position: fixed;
  z-index: 1;
  left: 50%;
  bottom: 30px;
  transform: translateX(-50%);
  font-size: 17px;
  transition: visibility 0s, opacity 0.5s ease-in-out;
  opacity: ${(props) => (props.visible ? 1 : 0)};
`;

export default Snackbar;
