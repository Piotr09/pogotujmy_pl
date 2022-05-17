import { SocialMediaTypes } from '@molecules/SocialMedia/SocialMedia.types'
import { Facebook as FacebookIcon } from '@styled-icons/boxicons-logos/Facebook'
import { Instagram as InstagramIcon } from '@styled-icons/boxicons-logos/Instagram'
import { PinterestAlt as PinterestIcon } from '@styled-icons/boxicons-logos/PinterestAlt'
import { Tiktok as TiktokIcon } from '@styled-icons/boxicons-logos/Tiktok'
import { Youtube as YoutubeIcon } from '@styled-icons/boxicons-logos/Youtube'
import { SocialMedia } from './SocialMedia.styled'
import React from 'react'

export const SocialMediaBlock = ({
  size,
  label,
}: SocialMediaTypes): React.ReactElement => (
  <SocialMedia size={size} label={label}>
    {label && <p>{label}</p>}
    <a
      href="https://www.facebook.com/pogotujmypl/"
      rel="noopener nofollow"
      aria-label="Zobacz profil bloga na Facebooku"
    >
      <FacebookIcon />
    </a>
    <a
      href="https://www.instagram.com/pogotujmy_pl/"
      rel="noopener nofollow"
      aria-label="Zobacz profil bloga na Instagramie"
    >
      <InstagramIcon />
    </a>
    <a
      href="https://pl.pinterest.com/pogotujmypl/"
      rel="noopener nofollow"
      aria-label="Zobacz profil bloga na Pinterest"
    >
      <PinterestIcon />
    </a>
    <a
      href="#"
      rel="noopener nofollow"
      aria-label="Zobacz profil bloga na Tiktoku"
    >
      <TiktokIcon />
    </a>
    <a
      href="https://www.youtube.com/channel/UCyz1rxwRL_SwPs-Yza-lgQQ"
      rel="noopener nofollow"
      aria-label="Zobacz profil bloga na Youtube"
    >
      <YoutubeIcon />
    </a>
  </SocialMedia>
)
