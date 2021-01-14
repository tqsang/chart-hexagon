import React from 'react';
import './Header.scss';

Header.propTypes = {

};

function Header(props) {
  return (
    <div className="header">
      <div className="header__title">
        tra cứu giá đơn vị
      </div>
      <div className="header__description">
        Nhằm cung cấp cho bạn đầy đủ thông tin về giá trị quỹ trong cả hiện tại và quá khứ, bạn có thể tùy chọn thời điểm <br /> tra cứu theo khung thời gian bạn muốn
      </div>
    </div>
  );
}

export default Header;