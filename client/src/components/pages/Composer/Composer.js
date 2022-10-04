import React, {useEffect, useState} from "react";
import axios from 'axios';
import api from '../../../api/base-url';
import { Carousel } from 'antd';

/*
Basic logic:
  1 install axios：npm i axios 。
  2 import axios
  3 add data called composerData in state
  4 create a method called getComposerData() and update composerData in state
  5 call getComposerData in componentDidMount.
  6 render data in jsx
*/

export default class Index extends React.Component {
    state = {
        // 轮播图状态数据
        swipers: []
    }

    // 获取轮播图数据的方法
    async getSwipers() {
        const res = await axios.get('http://localhost:8080/home/swiper')
        this.setState({
            swipers: res.data.body
        })
    }

    componentDidMount() {
        this.getSwipers()
    }

    // 渲染轮播图结构
    renderSwipers() {
        return this.state.swipers.map(item => (
            <a
                key={item.id}
                href="http://itcast.cn"
                style={{
                    display: 'inline-block',
                    width: '100%',
                    height: 212
                }}
            >
                <img
                    src={`http://localhost:8080${item.imgSrc}`}
                    alt=""
                    style={{ width: '100%', verticalAlign: 'top' }}
                />
            </a>
        ))
    }

    render() {
        return (

            <div className="index">
                <br/><br/><br/><br/>
                <Carousel autoplay infinite autoplayInterval={5000}>
                    {this.renderSwipers()}
                </Carousel>
            </div>
        )
    }
}

// const baseURL = "https://jsonplaceholder.typicode.com/posts/1";
//
// export default function Forum() {
//     const [composerData, setComposerData] = useState(null);
//     const [error, setError] = useState(null);
//
//     useEffect(() => {
//         // invalid url will trigger an 404 error
//         axios.get(baseURL).then((response) => {
//             setComposerData(response.composerData);
//         }).catch(error => {
//             setError(error);
//         });
//     }, []);
//
//     if (error) return `Error: ${error.message}`;
//     if (!composerData) return "No data!"
//
//     const displayData = () => {
//         return composerData ? (
//             composerData.map((composerData) => {
//                 return (
//                     <div className="composerData" key={composerData.title}>
//                         <h3>{composerData.body}</h3>
//                     </div>
//                 );
//             })
//         ) : (
//
//             <h3>No data yet</h3>
//         );
//     }
//     return (
//         <>
//             {displayData()}
//         </>
//     );
// }


