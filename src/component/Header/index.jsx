import { useEffect, useState } from 'react';
import './Header.scss';

Header.propTypes = {

};

function Header(props) {
  const [read, setRead] = useState(true);

  useEffect(() => {
    document.title = "Chart"
  }, [])

  return (
    <div className="header">
      <div className="header__title">
        tra cứu giá đơn vị
      </div>
      <div className="header__description">
        <p>
          Nhằm cung cấp cho bạn đầy đủ thông tin về giá trị quỹ trong cả hiện tại và quá khứ, bạn có thể tùy chọn thời điểm tra cứu{read && <span className="content"> theo khung thời gian bạn muốn </span>}
          {read && <span className="more" onClick={() => setRead(false)}>...Xem thêm</span>}
        </p>
      </div>

    </div>
  );
}

export default Header;