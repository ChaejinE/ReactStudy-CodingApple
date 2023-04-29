import { useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import { addCart } from "../store/cartSlice";
import { useDispatch } from "react-redux";

function Detail(props) {
    let { id } = useParams();
    let seletedDetail = props.shoes.find((x) => { return x.id == id; });
    let [tab, setTab] = useState(1);
    let dispatch = useDispatch();

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={"https://codingapple1.github.io/shop/shoes" + (parseInt(id) + 1) + ".jpg"} width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{seletedDetail.title}</h4>
                    <p>{seletedDetail.content}</p>
                    <p>{seletedDetail.price} 원</p>
                    <button className="btn btn-danger" onClick={() => { dispatch(addCart(seletedDetail)) }}>주문하기</button>
                </div>
            </div>

            <Nav variant="tabs" defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link eventKey="link0" onClick={() => { setTab(0) }}>버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link1" onClick={() => { setTab(1) }}>버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link2" onClick={() => { setTab(2) }}>버튼2</Nav.Link>
                </Nav.Item>
            </Nav>

            <TabComponent tab={tab}></TabComponent>
        </div>
    );
}

function TabComponent({ tab }) {
    let [fade, setFade] = useState('');

    useEffect(() => {
        let t = setTimeout(() => { setFade('end') }, 100);
        return () => { setFade(''); clearTimeout(t); }
    }, [tab])

    return (
        <div className={`start ${fade}`}>
            {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]}
        </div>
    )
}

export default Detail;