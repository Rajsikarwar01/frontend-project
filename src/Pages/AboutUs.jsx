import HomeLayout from "../Layouts/HomeLayout";
import aboutMainImage from "../assets/Images/mainImg.gif."
import apj from "../assets/Images/apj.jpj"
import billGates from "../assets/Images/Bill-Gates.webp"
import nelsonMandela from "../assets/Images/Nelson-Mandela.webp"
import steveJobs from "../assets/Images/stevejobs.1419962539.jpg"
function AboutUs() {
    return (
         <HomeLayout>
            <div className="pl-20 pt-20 flex flex-col text-white">
                <div className="flex items-center gap-5 mx-10">
                    <section className="w-1/2 space-y-10">
                        <h1 className="text-5xl text-yellow-500 font-semibold">
                            Affordable and quality education
                        </h1>
                        <p className="text-xl text-gray-200">
                            Our goal is to provide the affordable and quality education to the world.
                            We are providing the platform for the aspiring teacher and students to share their skill, creativity and knowledge to each other to empower and contribute in the growth and wellness of mankind.
                        </p>
                    </section>

                    <div className="w-1/2">
                        <img 
                           id="test1"
                           style={{
                                filter: "drop-shadow(0px 10px 10px rgb(0,0,0))"
                           }}
                           className="drop-shadow-2xl "
                           src="" 
                           alt="" />
                    </div>
                </div>

                <div className="carousel w-full my-16m-auto">
                   <div id="slide1" className="carousel-item relative w-full">
                      <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                          <img src={apj} className="w-40 rounded-full border-2 border-gray-400" />
                          <p className="text-xl text-gray-200">
                           {"Failure will never overtake me if my determination to succeed is strong enough..."}
                          </p>
                          <h3 className="text-2xl font-semibold ">A.P.J Abdul Kalam</h3>
                           <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                             <a href="#slide4" className="btn btn-circle">❮</a> 
                             <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div> 

                   </div> 
                    <div id="slide2" className="carousel-item relative w-full">
                       <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                            <img src={steveJobs} className="w-40 rounded-full border-2 border-gray-400" />
                            <p className="text-xl text-gray-200">
                            {"You can't connect the dots looking forward; you can only connect them looking backward..."}
                            </p>
                            <h3 className="text-2xl font-semibold ">Steve Jobs</h3>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                               <a href="#slide1" className="btn btn-circle">❮</a> 
                               <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                       </div>   
                    </div> 

                    <div id="slide3" className="carousel-item relative w-full">
                       <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                           <img src={nelsonMandela} className="w-40 rounded-full border-2 border-gray-400" />
                           <p className="text-xl text-gray-200">
                            {"It is in your hands, to make a better world for all who live in it..."}
                            </p>
                            <h3 className="text-2xl font-semibold ">Nelson Mandela</h3>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                              <a href="#slide2" className="btn btn-circle">❮</a> 
                             <a href="#slide4" className="btn btn-circle">❯</a>
                           </div>
                        </div>  
                    </div> 

                    <div id="slide4" className="carousel-item relative w-full">
                       <div className="flex flex-col items-center justify-center gap-4 px-[15%]"> 
                          <img src={billGates} className="w-40 rounded-full border-2 border-gray-400"/>
                          <p className="text-xl text-gray-200">
                           {"The belief that the world is getting worse, that we can't solve extreme poverty and disease, isn't just mistaken..."}
                          </p>
                          <h3 className="text-2xl font-semibold ">Bill Gates</h3>
                          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                             <a href="#slide3" className="btn btn-circle">❮</a> 
                             <a href="#slide1" className="btn btn-circle">❯</a>
                             </div>
                        </div>    
                    </div>
                </div>
            </div>
       </HomeLayout>
    )
}