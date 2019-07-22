import styled from 'styled-components'

export const List = styled.ul`
  list-style: none;
  padding: 10px 0 0 20px;
`

export const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  padding: 10px 0 0 20px;
`

export const FilterGroup = styled.div`
  border: 1px solid #ccc;
  margin: 20px 0;
  text-align: center;
`

export const FilterForm = styled.form`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 850px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (max-width: 480px) {
    
  }
`
