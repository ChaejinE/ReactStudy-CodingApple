import { Table } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux"
import { addCount } from '../store/cartSlice'
import { useState, memo } from "react";

let Child = memo(function () {
    console.log("재렌더링")
    return <div>자식임</div>
})

function Cart() {
    let carts = useSelector((state) => { return (state.carts) });
    let dispatch = useDispatch();
    let [count, setCount] = useState(0);

    return (
        <div>
            <Child></Child>
            <button onClick={() => { setCount(count + 1) }}>+</button>

            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        carts.map((elem, idx) => {
                            return (
                                <tr>
                                    <td>{idx}</td>
                                    <td>{elem.title}</td>
                                    <td>{elem.count}</td>
                                    <td><button onClick={() => { dispatch(addCount(elem.id)) }}>+</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default Cart