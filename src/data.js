export const menuItems = [
    'Home',
    'Projects',
    'Skills',
    'About',
    'Blog',
    'Coding Challenges',
    'Contact'
]

export const media = {
    phone: '@media all and (max-width: 480px)',
    // target width of 480px <= width <= 768px
    tablet: '@media all and (min-width: 480px) and (max-width: 768px)',
    tabletLandscape: '@media all and (min-width: 768px and (max-width: 1024px)',
    desktop: '@media all and (min-width: 1024px) and (max-width: 1280px)'
}

/*------------------------------------------
  Responsive Grid Media Queries - 1280, 1024, 768, 480
   1280-1024   - desktop (default grid)
   1024-768    - tablet landscape
   768-480     - tablet 
   480-less    - phone landscape & smaller
--------------------------------------------*/
// @media all and (min-width: 1024px) and (max-width: 1280px) { }       
 
// @media all and (min-width: 768px) and (max-width: 1024px) { }
 
// @media all and (min-width: 480px) and (max-width: 768px) { }
 
// @media all and (max-width: 480px) { }

// css

// ${media.desktop} {
//     display: flex;
//     flex-flow: row nowrap;
//     align-items: center;
//     justify-content: space-between;
//     width: 48%;
// }