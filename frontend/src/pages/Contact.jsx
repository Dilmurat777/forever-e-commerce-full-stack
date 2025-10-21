import { assets } from "../assets/frontend_assets/assets"
import NewsLetterBox from "../components/NewsLetterBox"
import Title from "../components/Title"


const Contact = () => {
  return (
	<div>

    <div className="text-center text-2xl pt-10 border-t">
      <Title text1={'CONTACT'} text2={'US'}/>
    </div>
    
    <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
      <img className="w-full md:max-w-[450px]" src={assets.contact_img} alt="" />
      <div className="flex flex-col justify-center items-start gap-6">
        <p className="font-semibold text-xl text-xl text-gray-600">Our Store</p>
        <p className="text-gray-500">54709 Willms Station <br />
            Suite 350, Washington, USA</p>
        <p className="text-gray-500">Tel: (415) 555‑0132 <br />Email: greatstackdev@gmail.com</p>
        <p className="font-semibold text-xl text-xl text-gray-600">CAREERS AT FOREVER</p>
        <p className="text-gray-500">Learn more about our teams and job openings.</p>
        <p></p>
        <button className="bg-transparent py-3 px-8 border border-gray-500 cursor-pointer rounded hover:bg-black hover:text-white transition-all duration-500">Explore Jobs</button>
      </div>
    </div>
      <NewsLetterBox />
	</div>
  )
}

export default Contact
