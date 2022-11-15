import { AiOutlineClose, AiOutlineCheck } from 'react-icons/ai'
import { emptyCart } from '../slices/cartSlice'
import { useDispatch, useSelector } from "react-redux";
export default function InCart({ item }: any) {
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()
    return (
        <div className="flex flex-row gap-3">
            <div className="hover:bg-gray-400 w-full flex flex-row">
                <div className="w-3/5 text-center ">
                    {item.name}

                </div>
                <div className="w-2/5 text-center">
                    {item.cant}

                </div>

            </div>

        </div>
    )
}
