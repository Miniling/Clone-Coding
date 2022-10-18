import '../css/menucard.css';

const MenuCard = function () {

    return (
        <>
            <div className="menu_card">
                <div className="image">
                    이미지가 들어가는 공간
                </div>
                <div className="card_bottom">
                    <div>
                        메뉴 이름
                    </div>
                    <div>
                        가격
                    </div>
                </div>
            </div>
        </>
    )
}

export default MenuCard;