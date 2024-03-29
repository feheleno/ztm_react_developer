import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const Name = styled.div`
  width: 23%;
`;

export const Quantity = styled.div`
  width: 23%;
  display: flex;
`;
export const Value = styled.span`
  margin: 0 10px;
`;

export const Price = styled.div`
  width: 23%;
`;

export const DecreaseSign = styled.span`
  font-size: 15px;
  background-color: white;
  color: black;
  border: none;
  cursor: pointer;
`;

export const IncreaseSign = styled.span`
  font-size: 15px;
  background-color: white;
  color: black;
  border: none;
  cursor: pointer;
`;

export const RemoveSign = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
