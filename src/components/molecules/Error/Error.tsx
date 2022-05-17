import React, { ReactElement } from 'react'

import Picture from '@atoms/Picture'

import {
  ErrorWrapper,
  ImageWrapper,
  InlineImage,
  TextWrapper,
} from '@molecules/Error/Error.styled'

export const Error = (): ReactElement => (
  <ErrorWrapper>
    <TextWrapper>
      <h1>
        Ale KLOPS!
        <InlineImage src="https://gc.pogotujmy.pl/cockpit/storage/uploads/2022/03/27/meatball_uid_6240254db3e23.png" />
      </h1>
      <p>Niestety, nie udało sie odnaleźć szukanej przez Ciebie strony.</p>
      <p>
        Przejdź na <a href="/">stronę główną</a> lub spróbuj wyszukać
        interesującą Cię treść w <a href="/wyszukiwarka">wyszukiwarce</a>.
      </p>
    </TextWrapper>
    <ImageWrapper>
      <Picture
        path={'/2022/03/26/new_uid_623f1381336c9.png'}
        altText="Nie znaleziono strony"
      />
    </ImageWrapper>
  </ErrorWrapper>
)
