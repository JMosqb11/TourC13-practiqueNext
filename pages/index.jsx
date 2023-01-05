import React from 'react';
import Cards from '../components/CardsInfo/Cards'
import FilterOption from '../components/Filter/FilterOption';
import NavMenu from '../components/Navbar/NavMenu';
import { Typography } from '@mui/material';

export default function Home() {
  return (
    <>
      <NavMenu />
      <div className="tittlePage">
      <Typography
            variant="h5"
            noWrap
            component="div"
            className='tittlePage'
          >
           TOUR C13
          </Typography>
      </div>
      <FilterOption/>
      <Cards/>
    </>
    
  )
}
