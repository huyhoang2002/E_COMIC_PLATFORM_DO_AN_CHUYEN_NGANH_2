import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import Button from "../../Common/Button/Button"
import { useSelector } from "react-redux"
import { pageIndexSelector, pageSizeSelector } from "../../../store/comic/selector"

const Pagination = () => {
    const pageIndex = useSelector(pageIndexSelector)
    const pageSize = useSelector(pageSizeSelector)
    return (
        <div className="text-white w-full flex justify-end h-full gap-3 max-md:justify-center">
            <Button>
                <FaArrowLeft />
            </Button>
            <p className="flex items-center">{pageIndex} / {pageSize}</p>
            <Button>
                <FaArrowRight />
            </Button>
        </div>
    )
}

export default Pagination