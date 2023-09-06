import styled from 'styled-components'

export const HeroContainer = styled.div`
    background: #fff;
    display: flex; 
    justify-content: center; 
    align-items: center;
    padding: 10px 30px;
    height: 700px;
    position: relative:
    z-index: 1;
    
`;


export const HeroContent = styled.div`
    z-idex: 3;
    max-width: 1200px; 
    position: aboslute; 
    padding: 0; 
    display: flex; 
    flex-direction: column; 
    flex: 1;
    align-items: left;
`;

export const HeroH1 = styled.h1`
    color: #BED558;
    font-size: 48px;
    text-align: left;

    @media screen and (max-width: 768px) {
        font-size: 40px 
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const HeroP = styled.p`
    margin-top: 24px;
    color: #34252F; 
    font-size: 18px; 
    text-align: left; 
    // max-width: 600px; 

    @media screen and (max-width: 768px) {
        font-size: 14px 
    }

    @media screen and (max-width: 480px) {
        font-size: 10px;
    }
`;

export const HeroImg = styled.div`
    max-width: 555px;
    height: 100%;
    display: flex;
    align-items: center;
`;

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0; 
    padding-right: 0;
`;
