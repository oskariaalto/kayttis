import { TextInput } from "./forms/TextInput";

const Home = () => {
  return(
    <div className="w-full bg-site min-h-screen flex justify-center">
      <div className="w-3/4 my-32 ">
        <div className='container mx-auto p-4'>
          <div className="flex flex-col items-center text-8xl font-bold my-7  text-secondary drop-shadow-2xl">
            AIbert
          </div>
          <div className="text-2xl text-secondary flex flex-col items-center my-2">
            How can I help you?
          </div>
          <div className='w-full'>
            <TextInput placeholder='Ask AIbert...'/>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Home;