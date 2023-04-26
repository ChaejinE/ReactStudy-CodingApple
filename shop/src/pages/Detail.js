import { useParams } from "react-router-dom";
import styled from 'styled-components'

let Btn = styled.button`
    background: ${props => props.bg};
    color : ${props => (props.bg == "blue") ? "white" : "black"};
    padding : 1px;
  `

function Detail(props) {
    let { id } = useParams();
    let seletedDetail = props.shoes.find((x) => { return x.id == id; });
    console.log(seletedDetail)

    return (
        <div className="container">
            <Btn bg="blue">버튼</Btn>
            <div className="row">
                <div className="col-md-6">
                    <img src={"https://codingapple1.github.io/shop/shoes" + (parseInt(id) + 1) + ".jpg"} width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{seletedDetail.title}</h4>
                    <p>{seletedDetail.content}</p>
                    <p>{seletedDetail.price} 원</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
        </div>
    );
}

export default Detail;