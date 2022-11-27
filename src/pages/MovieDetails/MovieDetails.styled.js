import styled from 'styled-components';

export const Img = styled.img`
   {
    border-radius: 10px;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

    &:hover,
    &:focus {
      box-shadow: 0px 7px 8px -5px rgba(0, 0, 0, 0.2),
        0px 8px 9px 0px rgba(0, 0, 0, 0.14),
        0px 5px 15px 0px rgba(0, 0, 0, 0.12);
    }
  }
`;

export const InfCover = styled.div`
   {
    width: 400px;
  }
`;
export const CardCover = styled.div`
   {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
`;
export const Cover = styled.div`
   {
    padding-top: 25px;
  }
`;
export const Button = styled.button`
   {
     {
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
    }
  }
`;

export const Title = styled.h2``;
export const Item = styled.div`
   {
    margin-bottom: 15px;
  }
`;

export const ButCover = styled.div`
   {

        display: flex;
    align-items: flex-start;
    justify-content: center;
     
      margin-bottom: 25px;
}
  }
`;

export const LinkName = styled.div`
   {
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
    &:first-child {
      margin-left: 20px;
    }
  }
`;

export const LinkCover = styled.div`
   {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    margin-top: 25px;
    margin-bottom: 25px;
  }
`;
