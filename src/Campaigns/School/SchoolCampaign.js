import React from 'react';
import Header from './Header';
import Slider from './Slider';
import Content from './Content';
import FooterCampaigns from '../footer/FooterCampaigns';

const SchoolCampaign = () => {
  return (
    <>
      <Header />
      <Slider />
      <Content />    
      <FooterCampaigns/>
    </>
  );
}
 
export default SchoolCampaign;