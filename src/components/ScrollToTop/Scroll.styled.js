import styled from 'styled-components';
export const Cover = styled.div`
   {
    position: fixed;
    bottom: 40px;
    right: -40px;
    
`;

// export const Item = styled.svg`
//   height: 15px;
//   weight: 15px;
//   color: red;
//   background-color: black;
//   fill: #fff;
// `;

export const Button = styled.div`
   {
    display: inline-block;
    width: 40px;
    height: 40px;
    z-index: 1000;
    cursor: pointer;
    text-align: center;
    border-radius: 4px;
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.2);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease-in-out;
    background-color: rgba(159, 157, 157, 0.9);
  }
  &:hover {
    background-color: var(--accent-color);
  }
`;

// #toTop {
//   position: fixed;
//   display: inline-block;
//   bottom: 40px;
//   right: -40px;
//   width: 40px;
//   height: 40px;
//   z-index: 1000;
//   cursor: pointer;
//   text-align: center;
//   border-radius: 4px;
//   box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.2);
//   opacity: 0;
//   visibility: hidden;
//   transition: all 0.3s ease-in-out;
//   background-color: rgba(159, 157, 157, 0.9);
// }
// #toTop:hover {
// 		background-color: var(--accent-color);

// }

// #toTop svg {
//   position: relative;
//   top: 9px;
//   right: -1px;
//   fill: #fff;
//   transition: all 0.3s ease-in-out;
// }

// #toTop:hover svg {
//   cursor: pointer;
//   fill: #fff;
//   transition: all 0.3s ease-in-out;
// }

// #toTop.showScroll {
//   opacity: 1;
//   visibility: visible;
//   right: calc(2%);
//   cursor: pointer;
//   border-radius: 25%;
// }
