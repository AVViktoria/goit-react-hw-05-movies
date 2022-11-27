import styled from 'styled-components';

export const Cover = styled.div`
   {
    padding: 25px;
  }
`;

export const Form = styled.form`
   {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
  }
`;

export const Input = styled.input`
  width: 300px;
  color: #fff;
  font-size: 16px;
  padding: 11px 17px;
  border: none;
  background-color: #8e6f6f;
  transition: all 0.2s ease-in;

  float: left; /* IE 9 Fix */
  &:hover,
  &:focus {
    background-color: #7e5a5a;
    outline: none;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  display: inline-block;
  color: #fff;
  font-size: 16px;
  text-transform: uppercase;
  padding: 11px 20px;
  border: none;
  margin-left: -1px;
  background-color: #c0392b;
  float: left; /* IE 9 Fix */
  transition: all 0.2s ease-in;
  &:hover {
    background-color: #6e0e0e;
  }
`;

export const TrendCover = styled.div`
   {
  }
`;
