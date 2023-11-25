import { useState } from "react"

type TProps = {
  sortElement: React.ReactNode,
  searchDomain: string,
  handleChangeKeyword: (value: string) => void
}

const SortAndSearchBar = ({ sortElement, searchDomain, handleChangeKeyword }: TProps) => {
  return (
    <div className="flex justify-between">
      <div className="flex gap-3 items-center">
        <p>Sort by:</p>
        {sortElement}
      </div>
      <div className="text-white">
        <input onChange={(event) => handleChangeKeyword(event.target.value)} placeholder={`search ${searchDomain}...`} className="rounded-3xl w-[300px] text-black" type="text" name="" id="" />
      </div>
    </div>
  )
}

export default SortAndSearchBar