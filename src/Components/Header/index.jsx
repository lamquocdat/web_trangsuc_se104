import React, { Component } from 'react'

import PhoneIcon from '@mui/icons-material/Phone';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import HistoryIcon from '@mui/icons-material/History';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
export default class Header extends Component {
    constructor(){
        super();
        this.state={
            show: true,
        }
    }
    render() {
        return (
          
            <><nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand text-info" href="http://localhost:3000/"><img src={require('../../assets/images/logo.png')} alt="" className="logo"/></a>
                    <button className="navbar-toggler border border-info text-info"
                        onClick={() => { this.setState({ show: !this.state.show }); } }>
                        {this.state.show ? <MenuIcon /> : <CloseIcon />}
                    </button>
                    <div className={this.state.show ? 'collapse navbar-collapse' : 'collapse navbar-collapse active'}>
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                            <div className="item">
                                    <PhoneIcon className="icon"/>
                            
                                <div className="nav-link text-dark" href="#">1800 54 54 57</div>
                                </div>
                            </li>
                            <li className="nav-item">
                            <div className="item">
                                    <CalendarTodayIcon className="icon"/>
                            
                                <div className="nav-link text-dark" href="#">Đặt lịch hẹn</div>
                                </div>
                            </li>
                            <li className="nav-item">
                            <div className="item">
                                    <HistoryIcon className="icon"/>
                            
                                <div className="nav-link text-dark" href="#">Lịch sử đơn hàng</div>
                                </div>
                            </li>
                            <li className="nav-item">
                            <div className="item">
                                    <ShoppingCartIcon className="icon"/>
                            
                                <div className="nav-link text-dark" href="#">Giỏ hàng</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <br></br>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    
                    <button className="navbar-toggler border border-info text-info"
                        onClick={() => { this.setState({ show: !this.state.show }); } }>
                        {this.state.show ? <MenuIcon /> : <CloseIcon />}
                    </button>
                    <div className={this.state.show ? 'collapse navbar-collapse' : 'collapse navbar-collapse active'}>
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                            <div className="item-bottom">
                                    
                            
                                <div className="nav-link text-dark" href="#">Trang chủ</div>
                                </div>
                            </li>
                            <li className="nav-item">
                            <div className="item-bottom">
                                   
                            
                                <div className="nav-link text-dark" href="#">Sản phẩm</div>
                                </div>
                            </li>
                            <li className="nav-item">
                            <div className="item-bottom">
                                    
                            
                                <div className="nav-link text-dark" href="#">Blog</div>
                                </div>
                            </li>
                            <li className="nav-item">
                            <div className="item-bottom">
                                    
                            
                                <div className="nav-link text-dark" href="#">Về chúng tôi</div>
                                </div>
                            </li>
                            <li className="nav-item">
                            <div className="item-bottom">
                                    
                            
                                <div className="nav-link text-dark" href="#">Tài khoản</div>
                                </div>
                            </li>
                            <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Tìm kiếm nhanh" aria-label="Search" size="90"/>
                    <button className="btn btn-outline-success" type="submit"><SearchIcon/></button>
                </form>
                        </ul>
                    </div>
                </div>
            </nav>
            <br></br></>
          
        )
    }
}


