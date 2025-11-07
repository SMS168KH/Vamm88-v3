interface FlagIconProps {
  country: "KH" | "MY" | "SG";
  className?: string;
}

export function FlagIcon({ country, className = "" }: FlagIconProps) {
  const flags = {
    KH: (
      // Cambodia flag - Blue, red, blue horizontal stripes with white Angkor Wat
      <svg viewBox="0 0 24 16" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="16" fill="#032ea1"/>
        <rect y="4" width="24" height="8" fill="#e00025"/>
        <rect y="6.5" width="24" height="3" fill="#032ea1"/>
        <g transform="translate(12, 8)">
          <rect x="-2" y="-2.5" width="4" height="5" fill="#ffffff"/>
          <rect x="-1.5" y="-3" width="1" height="1" fill="#ffffff"/>
          <rect x="0.5" y="-3" width="1" height="1" fill="#ffffff"/>
        </g>
      </svg>
    ),
    MY: (
      // Malaysia flag - Red and white stripes with blue canton and yellow crescent/star
      <svg viewBox="0 0 24 16" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="16" fill="#ffffff"/>
        <rect y="0" width="24" height="1.14" fill="#cc0001"/>
        <rect y="2.28" width="24" height="1.14" fill="#cc0001"/>
        <rect y="4.56" width="24" height="1.14" fill="#cc0001"/>
        <rect y="6.84" width="24" height="1.14" fill="#cc0001"/>
        <rect y="9.12" width="24" height="1.14" fill="#cc0001"/>
        <rect y="11.4" width="24" height="1.14" fill="#cc0001"/>
        <rect y="13.68" width="24" height="1.14" fill="#cc0001"/>
        <rect width="12" height="8" fill="#010066"/>
        <circle cx="5" cy="4" r="2.5" fill="#ffc72c"/>
        <circle cx="5.5" cy="4" r="2" fill="#010066"/>
        <polygon points="8.5,2.5 9,3.5 10,3.5 9.2,4.2 9.5,5.2 8.5,4.5 7.5,5.2 7.8,4.2 7,3.5 8,3.5" fill="#ffc72c"/>
      </svg>
    ),
    SG: (
      // Singapore flag - Red and white with crescent and stars
      <svg viewBox="0 0 24 16" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="8" fill="#ed2939"/>
        <rect y="8" width="24" height="8" fill="#ffffff"/>
        <circle cx="6" cy="4" r="2.2" fill="#ffffff"/>
        <circle cx="6.5" cy="4" r="1.8" fill="#ed2939"/>
        <g fill="#ffffff">
          <polygon points="9.5,2 9.7,2.6 10.3,2.6 9.8,3 10,3.6 9.5,3.2 9,3.6 9.2,3 8.7,2.6 9.3,2.6"/>
          <polygon points="11.5,2.5 11.7,3.1 12.3,3.1 11.8,3.5 12,4.1 11.5,3.7 11,4.1 11.2,3.5 10.7,3.1 11.3,3.1"/>
          <polygon points="12,4.5 12.2,5.1 12.8,5.1 12.3,5.5 12.5,6.1 12,5.7 11.5,6.1 11.7,5.5 11.2,5.1 11.8,5.1"/>
          <polygon points="11.5,6.5 11.7,7.1 12.3,7.1 11.8,7.5 12,8.1 11.5,7.7 11,8.1 11.2,7.5 10.7,7.1 11.3,7.1"/>
          <polygon points="9.5,7 9.7,7.6 10.3,7.6 9.8,8 10,8.6 9.5,8.2 9,8.6 9.2,8 8.7,7.6 9.3,7.6"/>
        </g>
      </svg>
    ),
  };

  return flags[country];
}
