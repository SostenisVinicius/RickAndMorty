import Image from 'next/image'
import loader from '../../public/assets/loader.gif'

const Loading = () => {
  return (
    <div>
      <Image src={loader} alt="Loader.." />
    </div>
  )
}

export default Loading
