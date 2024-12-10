import React from 'react';
import Discord from '../../assets/footer/Discord.svg';
import XTwitter from '../../assets/footer/XTwitter.svg';
import { SocialLink } from '../../types/footer';

const socialLinks: SocialLink[] = [
  {
    id: 'twitter',
    icon: XTwitter,
    link: 'https://twitter.com/zeus',
    alt: 'Twitter',
  },
  {
    id: 'discord',
    icon: Discord,
    link: 'https://discord.gg/zeus',
    alt: 'Discord',
  },
];

const SocialLinks: React.FC = () => {
  return (
    <div className="flex space-x-4">
      {socialLinks.map(({ id, icon, link, alt }) => (
        <a key={id} href={link} target="_blank" rel="noopener noreferrer">
          <img
            src={icon}
            alt={alt}
            className="h-[16px] w-auto transition-all hover:brightness-200"
          />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
