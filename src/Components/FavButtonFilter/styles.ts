import styled from 'styled-components/native';

interface FavButtonFilterStylesProps{
  isPress: boolean;
}

export const Container = styled.TouchableOpacity<FavButtonFilterStylesProps>`
  width: 36px;
  height: 33px;
  justify-content: center;
  align-items: center;
  opacity: ${({ isPress }) => (isPress ? 0.3 : 1)}; 
`