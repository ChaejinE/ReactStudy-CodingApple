import { Table } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux"
import { addCount } from '../store/cartSlice'

function Cart() {
    let carts = useSelector((state) => { return (state.carts) });
    let dispatch = useDispatch();

    return (
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
    )
}

export default Cart