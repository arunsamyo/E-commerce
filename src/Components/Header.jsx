import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { useState } from "react"
import Menu from '@mui/material/Menu';
import Table from "react-bootstrap/Table";
import Badge from '@mui/material/Badge';
import logo from "../Photos/amazon1.jpg";

const Header = () => {
  const nselector = useSelector((state) => state.cardItems.cardData)
  console.log(nselector);


  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark ">
        <a className="navbar-brand" href="#"><img  className='logo pl-4' src={logo} /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-5 ml-auto">
            <li className="nav-item ">
              <a className="nav-link active" href="#">Home </a>
            </li>
            <li className="nav-item">
              <Badge badgeContent={nselector.length} color="primary" onClick={handleClick}>
              <a className="nav-link" href="#"><LocalGroceryStoreIcon /></a>
              </Badge>
              
            </li>
          </ul>
        </div>
      </nav>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
         {nselector.length ? (
              <div >
                <Table>
                  <thead>
                    <tr>
                      <th>IMAGES</th>
                      <th> DETAILS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {nselector.map((v,i) => {
                      return (
                        <>
                          <tr>
                            <td key={i}>
                              <img  src={v.img}  alt="" className="img1"   />
                            </td>
                            <td>
                              <p>{v.name}</p>
                              <p>Price : ₹{v.price}</p>
                              <p className="text1" > </p>
                            </td>
                            <td
                              className="mt-5 basket-td">
                              <i className="fas fa-trash largetrash"></i>
                            </td>
                          </tr>
                        </>
                      );
                    })}
                    
                  </tbody>
                </Table>
              </div>
            ) : (
              <div>
                <pattern>Your card is empty</pattern>
              </div>
            )}
          </Menu>
    </>
  )
}

export default Header