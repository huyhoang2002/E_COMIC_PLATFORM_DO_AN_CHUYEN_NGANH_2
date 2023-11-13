type Props = {
  fontSize: string
}

const Logo = ({ fontSize }: Props) => {
  return (
    <div>
        <p className={`text-[${fontSize === "md" ? "30px" : "lg" ? "50px" : "0px"}] text-white font-light`}><span className={`font-bold text-white text-[${fontSize === "md" ? "70px" : "lg" ? "100px" : "0px"}]`}>E</span> Comic</p>
    </div>
  )
}

export default Logo