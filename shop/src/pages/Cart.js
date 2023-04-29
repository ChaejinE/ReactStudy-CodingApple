import { Table } from "react-bootstrap"
import { useSelector } from "react-redux"

function Cart() {
    let carts = useSelector((state) => { return (state.carts) });
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
                    carts.map((elem) => {
                        return (
                            <tr>
                                <td>{elem.id}</td>
                                <td>{elem.title}</td>
                                <td>{elem.count}</td>
                                <td><button>+</button></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
    )
}

export default Cart