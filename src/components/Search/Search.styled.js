import styled from 'styled-components';

export const Input = styled.input`
  flex-grow: 1;
  border-style: none;
  background: transparent;

  outline: none;
  color: #bfd2ff;
  font-size: 1.5rem;
  line-height: 2.4rem;
  vertical-align: middle;
  &::-webkit-input-placeholder {
    color: #b1c2ff;
  }
`;

// export const Searchbar= styled.input {
//   top: 0;
//   left: 0;
//   position: sticky;
//   z-index: 1100;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   min-height: 64px;
//   padding-right: 24px;
//   padding-left: 24px;
//   padding-top: 12px;
//   padding-bottom: 12px;
//   color: #fff;
//   background-color: rgb(15, 34, 93);
//   box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
//     0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
// }

export const Form = styled.form`
   {
    position: relative;
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    border-radius: 5px;
    padding: 1rem;
    background: rgba(57, 63, 84, 0.8);
    &:after {
      content: '';
      position: absolute;
      left: 0px;
      right: 0px;
      bottom: 0px;
      z-index: 999;
      height: 2px;
      border-bottom-left-radius: 2px;
      border-bottom-right-radius: 2px;
      background-position: 0% 0%;
      background: linear-gradient(
        to right,
        #b294ff,
        #57e6e6,
        #feffb8,
        #57e6e6,
        #b294ff,
        #57e6e6
      );
      background-size: 500% auto;
      animation: gradient 3s linear infinite;
    }
  }
`;

export const Button = styled.button`
   {
   
    padding: 0; background: none; border: none; outline: none; 
     color:   #b1c2ff;
  font-size: 1.8rem;
  line-height: 2.4rem;
  vertical-align: middle;
  transition: color .25s;
  &:hover {
    color: #ddfeff;
  }
`;

// .searchForm__button:hover {
//   opacity: 1;
// }
// export const Label = styled.label`
//    {
//     position: absolute;
//     width: 1px;
//     height: 1px;
//     padding: 0;
//     overflow: hidden;
//     clip: rect(0, 0, 0, 0);
//     white-space: nowrap;
//     clip-path: inset(50%);
//     border: 0;
//   }
// `;

// .searchForm__input {
//   display: inline-block;
//   width: 100%;
//   font: inherit;
//   font-size: 20px;
//   border: none;
//   outline: none;
//   padding-left: 4px;
//   padding-right: 4px;
// }

// .searchForm__input::placeholder {
//   font: inherit;
//   font-size: 18px;
// }
// .file-upload-wrapper {
//     position: relative;
//     margin-bottom: 5px;
//     //border: 1px solid #ccc;
// }
// .file-upload-input {
//     width: $file-upload-size;
//     color: #fff;
//     font-size: 16px;
//     padding: 11px 17px;
//     border: none;
//     background-color: $file-upload-color;
//     @include transition(all 0.2s ease-in);
//     float: left; /* IE 9 Fix */
//     &:hover, &:focus {
//         background-color: darken($file-upload-color, 5);
//         outline: none;
//     }
// }
// .file-upload-button {
//     cursor: pointer;
//     display: inline-block;
//     color: #fff;
//     font-size: 16px;
//     text-transform: uppercase;
//     padding: 11px 20px;
//     border: none;
//     margin-left: -1px;
//     background-color: darken($file-upload-color, 10);
//     float: left; /* IE 9 Fix */
//     @include transition(all 0.2s ease-in);
//     &:hover {
//         background-color: darken($file-upload-color, 20);
//     }
// }
