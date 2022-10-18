import '../css/movies.css'
import { useState } from 'react';

// import update from 'react-addons-update'

export default function Movies() {
    const [Selected, setSelected] = useState("1");

    var value
    const handleSelect = (e) => {
        setSelected(e.target.value)
        value = e.target.value
    }

    const movie_list = [
        {
            name: '브로커',
            rate: 32.9,
            grade: 83,
            date: '2022.06.08',
            url: 'http://www.cgv.co.kr/movies/detail-view/?midx=85829',
            img: 'images/brocker.jpg'
        },
        {
            name: '범죄도시2',
            rate: 15.0,
            grade: 99,
            date: '2022.05.18',
            url: 'http://www.cgv.co.kr/movies/detail-view/?midx=85813',
            img: 'images/crime.jpg'
        },
        {
            name: '쥬라기 월드-도미니언',
            rate: 14.5,
            grade: 85,
            date: '2022.06.01',
            url: 'http://www.cgv.co.kr/movies/detail-view/?midx=85689',
            img: 'images/jworld.jpg'
        },
        {
            name: '마녀',
            rate: 10.2,
            grade: 99,
            date: '2022.06.15',
            url: 'http://www.cgv.co.kr/movies/detail-view/?midx=85871',
            img: 'images/wizard.jpg'
        },
        {
            name: '극장판 포켓몬스터DP',
            rate: 10.1,
            grade: 94,
            date: '2022.06.01',
            url: 'http://www.cgv.co.kr/movies/detail-view/?midx=85833',
            img: 'images/poketmon.jpg'
        },
        {
            name: '탑건-매버릭',
            rate: 6.8,
            grade: 99,
            date: '2022.06.22',
            url: 'http://www.cgv.co.kr/movies/detail-view/?midx=82120',
            img: 'images/topgun.jpg'
        },
        {
            name: '버즈 라이트이어',
            rate: 5.7,
            grade: 99,
            date: '2022.06.15',
            url: 'http://www.cgv.co.kr/movies/detail-view/?midx=85977',
            img: 'images/buz.jpg'
        },
        {
            name: '라이브뷰잉',
            rate: 2.0,
            grade: 99,
            date: '2022.06.24',
            url: 'http://www.cgv.co.kr/movies/detail-view/?midx=85939',
            img: 'images/live.jpg'
        }
    ]

    const runSort = (value) => {
        // 예매율순
        if (value === "1") {
            alert(`v: ${value}`)
            movie_list.sort((a, b) => {
                if (a.rate < b.rate) {
                    return 1;
                }
                else if (b.rate < a.rate) {
                    return -1;
                }
                else {
                    return 0;
                }
            });
        }
        // 평점순
        else if (value === "2") {
            alert(`v: ${value}`)
            movie_list.sort((a, b) => {
                if (a.grade < b.grade) {
                    return 1;
                }
                else if (b.grade < a.grade) {
                    return -1;
                }
                else {
                    return 0;
                }
            });
        }
    }

    return (
        <div className='movieChart'>
            <div className='viewControl'>
                <span className='view'>
                    <input type='checkbox'></input>
                    <a>현재 상영작만 보기</a>
                </span>
                <span className='sort'>
                    <select onChange={handleSelect} value={Selected}>
                        <option value="1">예매율순</option>
                        <option value="2">평점순</option>
                    </select>
                </span>
            </div>

            <div className='movies'>
                <ul className='movies_container'>
                    {movie_list.map((item) => (
                        <MovieItem
                            id={movie_list.indexOf(item) + 1}
                            name={item.name}
                            url={item.url}
                            rate={item.rate}
                            grade={item.grade}
                            date={item.date}
                            img={item.img}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}


function MovieItem(props) {
    const tick = () => { return alert(`예매완료!`) }

    return (
        <div className='movie_item'>
            <div className='rank'>
                No.{props.id}
            </div>
            <a className='poster' href={props.url} alt={props.name}>
                <img src={props.img} />
            </a>
            <a className='name' href={props.url} alt={props.name}>
                {props.name}
            </a>
            <span>
                <a className='rate'>
                    예매율
                    <a className='rate_p'>{props.rate}%</a>
                    <a>│{props.grade}%</a>
                </a>
                <a className='date'>{props.date} 개봉</a>
                <button className='ticketing' onClick={tick}>예매하기</button>
            </span>
        </div >
    );
}