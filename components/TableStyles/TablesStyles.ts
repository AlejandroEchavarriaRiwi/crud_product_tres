// TableStyles.ts
import styled from 'styled-components';

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  background-color: #ffffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow: hidden;
  margin-top: 30px;
`;

export const StyledThead = styled.thead`
  background-color: #f8f9fa;
`;

export const StyledTh = styled.th`
  padding: 16px;
  text-align: left;
  font-weight: 600;
  color: #ffffff;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 0.5px;
  border-bottom: 2px solid #dee2e6;
  border: 1px solid #dee2e6;
  background-color: rgb(6, 192, 93);
`;

export const StyledTd = styled.td`
  padding: 16px;
  vertical-align: middle;
  color: #212529;
  border-bottom: 1px solid #dee2e6;
  transition: background-color 0.3s ease;

  &:first-child {
    font-weight: 500;
  }
`;

export const StyledTr = styled.tr`
  &:hover {
    background-color: #f1f3f5;
  }

  &:last-child ${StyledTd} {
    border-bottom: none;
  }
`;

export const StyledImg = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const StyledPrice = styled.span`
  font-weight: 600;
  color: rgba(0, 212, 99, 0.932);
`;

export const StyledId = styled.span`
  font-size: 12px;
  color: #6c757d;
  background-color: #e9ecef;
  padding: 2px 6px;
  border-radius: 4px;
`;
