import '../css/style.css';
import '../css/menu.css';
import MenuCard from '../components/MenuCard';
const Menulist = function () {
    const showMenu = () => {
        const list = [];

        for (let i = 0; i < 3; i++) {
            list.push(
                <MenuCard />
            )
        }

        return list;
    }

    return (
        <>
            <div id="container" >
                <div className='hansotMenu'>
                    <h1>한솥메뉴</h1>
                </div>

                <div class="content menu">
                    <section class="menu_all">
                        <div class="menu_all_wrap tab_st01">

                            <div class="hansot_menu">
                                <div class="left_wrap">
                                    <div class="lnb">
                                        <div class="lnb_inner">
                                            <ul>
                                                <li class="dp1 dp_all active">
                                                    <p class="dp1_tit"><a href="#none" >전체보기</a></p>
                                                </li>
                                                <li class="dp1 " id="cate_2" idx="2">
                                                    <p class="dp1_tit"><a href="#none" >프리미엄·고메이</a></p>
                                                    <div class="dp2">
                                                        <ul>
                                                            <li id="child_24"><a href="#none" >프리미엄</a></li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li class="dp1 " id="cate_3" idx="3">
                                                    <p class="dp1_tit"><a href="#none" >사각도시락</a></p>
                                                    <div class="dp2">
                                                        <ul>
                                                            <li id="child_9"><a href="#none" >고기고기시리즈</a></li>
                                                            <li id="child_10"><a href="#none" >모둠시리즈</a></li>
                                                            <li id="child_46"><a href="#none" >정식시리즈</a></li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li class="dp1 " id="cate_3" idx="3">
                                                    <p class="dp1_tit"><a href="#none" >보울도시락</a></p>
                                                    <div class="dp2">
                                                        <ul>
                                                            <li id="child_9"><a href="#none" >마요</a></li>
                                                            <li id="child_10"><a href="#none" >카레</a></li>
                                                            <li id="child_46"><a href="#none" >볶음밥</a></li>
                                                        </ul>
                                                    </div>
                                                </li>

                                            </ul>
                                        </div>
                                        <div class="lnb_btn_close">
                                            <a href="#none"><span class="blind">close</span></a>
                                        </div>
                                    </div>
                                    <div class="dim"></div>
                                    <div class="mo_title mo_version">
                                        <h3 class="h3_tit"><span>전체보기</span></h3>
                                        <div class="lnb_btn">
                                            <a href="#none"><span>목록</span></a>
                                        </div>
                                    </div>
                                    <div class="mo_banner mo_version">
                                        {/* <a href="https://www.hsd.co.kr/event/event_view/694?pageSize=12&pageNo=1&cate=&_csrf=a22eed05-69aa-426f-8fb0-3fb62f541f22"><img src="https://www.hsd.co.kr/images/27c2e4785906426aa94633e0ea20e98320220411090317.jpg" alt="banner" /></a> */}
                                    </div>
                                    <div class="keyword mo_version">
                                        <h3 class="h3_tit">
                                            당신을 위한 <em class="emphasis">#추천 키워드</em>
                                        </h3>
                                        <ul>
                                            <li><a href="/menu/menu_keyword?keyword=1">#한솥의 베스트 셀러</a></li>
                                            <li><a href="/menu/menu_keyword?keyword=11">#따끈한 집밥이 생각날 때</a></li>
                                            <li><a href="/menu/menu_keyword?keyword=12">#화끈하게 스트레스 날리기</a></li>
                                            <li><a href="/menu/menu_keyword?keyword=13">#건강을 위해</a></li>
                                            <li><a href="/menu/menu_keyword?keyword=15">#반찬만 필요할 때</a></li>
                                            <li><a href="/menu/menu_keyword?keyword=16">#추천 단체도시락</a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="menu_list_wrap">
                                    <div id="menu_cont">
                                        {showMenu()}
                                    </div>
                                    {/* <div class="btn_wrap btn_more" style="display:none;" id="btn_more">
                                        <span class="btn btn_st04">
                                            <a href="#none" class="c_05" >더 보기</a>
                                        </span>
                                    </div> */}
                                    <div class="menu_guidance fz_03">
                                        <p>한솥의 모든 메뉴는 1시간 이내에 드시는 것이 가장 맛있습니다.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Menulist;