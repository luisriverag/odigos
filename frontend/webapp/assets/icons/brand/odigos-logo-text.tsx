import React from 'react';
import { SVG } from '@/assets';
import { useTheme } from 'styled-components';

export const OdigosLogoText: SVG = ({ size = 16, fill: f, rotate = 0, onClick }) => {
  const theme = useTheme();
  const fill = f || theme.text.secondary;

  return (
    <svg width={size} height={size * (103 / 429)} viewBox='0 0 429 103' fill={fill} xmlns='http://www.w3.org/2000/svg' style={{ transform: `rotate(${rotate}deg)` }} onClick={onClick}>
      <defs>
        <clipPath id='clip0_116_120'>
          <rect width='429' height='102.681' fill='none' />
        </clipPath>
      </defs>

      <g clipPath='url(#clip0_116_120)'>
        <path d='M253.012 22.3253H242.622V81.3372H253.012V22.3253Z' />
        <path d='M198.854 81.3261C197.32 81.3261 195.886 80.7305 194.805 79.6495L183.83 68.6744C182.749 67.5934 182.154 66.1595 182.154 64.6263V39.003C182.154 37.4698 182.749 36.0359 183.83 34.9549L194.805 23.9798C195.886 22.8988 197.32 22.3032 198.854 22.3032H215.2C216.59 22.3032 217.925 22.8106 218.973 23.7151L221.267 25.7115V0H231.658V64.6153C231.658 66.1485 231.062 67.5824 229.981 68.6634L219.006 79.6385C217.925 80.7195 216.491 81.3151 214.958 81.3151H198.854V81.3261ZM200.409 32.7158C196.228 32.7158 192.831 36.1131 192.831 40.2935V63.3799C192.831 67.5493 196.228 70.9577 200.409 70.9577H213.402C217.583 70.9577 220.98 67.5603 220.98 63.3799V40.2935C220.98 36.1131 217.583 32.7158 213.402 32.7158H200.409Z' />
        <path d='M395.942 81.3371C394.552 81.3371 393.218 80.8298 392.17 79.9253L381.449 70.5495C380.202 69.4576 379.496 67.8913 379.496 66.2477V64.1079H390.218C390.582 67.9464 393.825 70.9466 397.751 70.9466H410.745C414.914 70.9466 418.312 67.5493 418.323 63.3909V62.9938C418.323 61.6922 417.44 60.5782 416.183 60.2804L383.28 52.4379C380.952 51.8863 379.375 49.7465 379.507 47.3529V39.014C379.507 37.4808 380.103 36.0469 381.184 34.9659L392.159 23.9908C393.24 22.9098 394.674 22.3142 396.207 22.3142H412.554C413.944 22.3142 415.278 22.8216 416.326 23.7261L427.048 33.1018C428.294 34.1828 429 35.7601 429 37.4036V41.6834H418.334V39.5435H418.279C417.915 35.7049 414.672 32.7047 410.745 32.7047H397.751C393.571 32.7047 390.174 36.102 390.174 40.2825V40.8671C390.174 42.1466 391.045 43.2607 392.28 43.5695L420.054 50.5076L425.184 51.7319C427.312 52.2393 428.857 54.1365 428.945 56.3536V56.7948H428.967V64.6263C428.967 66.1595 428.371 67.5934 427.29 68.6744L416.315 79.6495C415.234 80.7305 413.8 81.3261 412.267 81.3261H395.92H395.931L395.942 81.3371Z' />
        <path d='M247.817 10.4016C244.949 10.4016 242.622 8.06314 242.622 5.2063C242.622 2.34946 244.949 0.0110474 247.817 0.0110474C250.685 0.0110474 253.012 2.34946 253.012 5.2063C253.012 8.06314 250.685 10.4016 247.817 10.4016Z' />
        <path d='M279.154 102.681V92.2902H294.574C298.755 92.2902 302.152 88.8929 302.152 84.7124V77.6861L300.178 79.6605C299.097 80.7415 297.663 81.3371 296.129 81.3371H280.025C278.492 81.3371 277.058 80.7415 275.977 79.6605L265.002 68.6854C263.921 67.6045 263.325 66.1705 263.325 64.6373V39.014C263.325 37.4808 263.921 36.0469 265.002 34.9659L275.977 23.9908C277.058 22.9098 278.492 22.3142 280.025 22.3142H296.372C297.762 22.3142 299.097 22.8216 300.144 23.7261L310.866 33.1018C312.112 34.1828 312.818 35.7601 312.818 37.4036V85.9699C312.818 87.5031 312.223 88.937 311.142 90.018L300.167 100.993C299.086 102.074 297.652 102.67 296.118 102.67H279.143L279.154 102.681ZM281.581 32.7157C277.411 32.7157 274.003 36.1131 274.003 40.2935V63.3799C274.003 67.5493 277.4 70.9577 281.581 70.9577H294.574C298.755 70.9577 302.152 67.5603 302.152 63.3799V40.2935C302.152 36.1131 298.755 32.7157 294.574 32.7157H281.581Z' />
        <path d='M139.555 81.3371C138.022 81.3371 136.588 80.7415 135.507 79.6605L124.532 68.6854C123.451 67.6045 122.855 66.1705 122.855 64.6373V39.014C122.855 37.4808 123.451 36.0469 124.532 34.9659L135.507 23.9908C136.588 22.9098 138.022 22.3142 139.555 22.3142H155.902C157.292 22.3142 158.626 22.8216 159.674 23.7261L170.395 33.1018C171.642 34.1828 172.348 35.7601 172.348 37.4036V64.6153C172.348 66.1485 171.752 67.5824 170.671 68.6634L159.696 79.6385C158.615 80.7194 157.181 81.3151 155.648 81.3151H139.544V81.3261L139.555 81.3371ZM141.121 32.7157C136.941 32.7157 133.543 36.1131 133.543 40.2935V63.3799C133.543 67.5603 136.941 70.9577 141.121 70.9577H154.104C158.284 70.9577 161.682 67.5603 161.682 63.3799V40.2935C161.682 36.1131 158.284 32.7157 154.104 32.7157H141.121Z' />
        <path d='M337.791 81.3371C336.258 81.3371 334.824 80.7415 333.743 79.6605L322.768 68.6854C321.687 67.6045 321.091 66.1705 321.091 64.6373V39.014C321.091 37.4808 321.687 36.0469 322.768 34.9659L333.743 23.9908C334.824 22.9098 336.258 22.3142 337.791 22.3142H354.138C355.527 22.3142 356.862 22.8216 357.91 23.7261L368.631 33.1018C369.878 34.1828 370.584 35.7601 370.584 37.4036V64.6153C370.584 66.1485 369.988 67.5824 368.907 68.6634L357.932 79.6385C356.851 80.7194 355.417 81.3151 353.884 81.3151H337.78V81.3261L337.791 81.3371ZM339.346 32.7157C335.166 32.7157 331.768 36.1131 331.768 40.2935V63.3799C331.768 67.5603 335.166 70.9577 339.346 70.9577H352.34C356.52 70.9577 359.917 67.5603 359.917 63.3799V40.2935C359.917 36.1131 356.52 32.7157 352.34 32.7157H339.346Z' />
        <path d='M44.2865 34.2931V22.3473H67.8361C70.8804 22.3473 73.3512 24.6967 73.3512 27.5977V76.0867C73.3512 78.9877 70.8804 81.3371 67.8361 81.3371H44.2865V69.4686L65.266 60.1921C68.7185 58.6589 70.8694 55.4601 70.8694 51.8422C70.8694 48.2243 68.7185 45.0145 65.266 43.4923L44.2755 34.3041L44.2865 34.2931Z' />
        <path d='M29.0758 69.3804V81.3262H5.52618C2.48183 81.3262 0.0110474 78.9767 0.0110474 76.0757V27.5867C0.0110474 24.6857 2.48183 22.3363 5.52618 22.3363H29.0758V34.2049L8.09623 43.4813C4.64376 45.0145 2.49286 48.2133 2.49286 51.8312C2.49286 55.4492 4.64376 58.659 8.09623 60.1811L29.0868 69.3693L29.0758 69.3804Z' />
        <path d='M36.6756 64.0307C43.4071 64.0307 48.8641 58.5737 48.8641 51.8422C48.8641 45.1108 43.4071 39.6538 36.6756 39.6538C29.9441 39.6538 24.4872 45.1108 24.4872 51.8422C24.4872 58.5737 29.9441 64.0307 36.6756 64.0307Z' />
      </g>
    </svg>
  );
};
