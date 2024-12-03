import React from 'react';
import { LinkItem } from '../../types/footer';

const linksList: LinkItem[] = [
  {
    id: 'terms',
    label: 'Terms of Service',
    link: '/terms',
  },
  {
    id: 'privacy',
    label: 'Privacy Policy',
    link: '/privacy',
  },
  {
    id: 'disclaimer',
    label: 'Disclaimer',
    link: '/disclaimer',
  },
];

const FooterLinks: React.FC = () => {
  return (
    <div className="flex space-x-5">
      {linksList.map(item => (
        <a
          key={item.id}
          href={item.link}
          className="text-[16px] font-medium leading-[24px] text-text-light hover:text-text-primary"
        >
          {item.label}
        </a>
      ))}
    </div>
  );
};

export default FooterLinks;
