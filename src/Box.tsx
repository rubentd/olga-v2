import styled from '@emotion/styled';
import { typography, space, layout, color, border, alignItems, justifyContent } from 'styled-system'

const Box = styled('div')(
  typography,
  space,
  layout,
  color,
  border,
  alignItems,
  justifyContent,
)

export default Box;
