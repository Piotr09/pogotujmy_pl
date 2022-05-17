import {
  StyledInstructionListOl,
  StyledTitle,
} from '@molecules/InstructionsSection/InstructionsSection.styled'
import type { ReactElement } from 'react'
import ReactHtmlParser from 'react-html-parser'

import type { InstructionsSectionProps } from './InstructionsSection.types'

export const InstructionsSection = ({
  instructions,
}: InstructionsSectionProps): ReactElement => (
  <>
    <StyledTitle>Wykonanie:</StyledTitle>
    <StyledInstructionListOl>
      {instructions.map((instruction) => (
        <li key={instruction.value}>
          <div>{ReactHtmlParser(instruction.value)}</div>
        </li>
      ))}
    </StyledInstructionListOl>
  </>
)
