import {GoLocation} from 'react-icons/go'

function App() {
    return(
        <div className="w-screen h-screen flex bg-[#1F2235] justify-around py-14">
            <div className="bg-[#1F243E] w-[350px] border border-yellow-500 p-8 rounded-md text-white text-center text-xl font-bold xl:mt-[100px]">
                <img src="https://avatars.githubusercontent.com/u/82165716?v=4"
                    className="rounded-full border-2 border-yellow-500 shadow-md xl:mt-[-150px] mb-5"    
                /> 
                guisaoncella 👋  
                <div className="flex justify-between gap-5 my-5">
                    <a href="mailto:guisaoncella@gmail.com">
                        <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"/>
                    </a>

                    <a href="https://www.linkedin.com/in/guilherme-saoncella/">
                        <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/>
                    </a>

                    <a href="https://github.com/guisaoncella">
                        <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"/>
                    </a>
                </div>  

                <p className="text-base font-medium flex items-center gap-2">
                    <GoLocation /> 
                    Brasil - Limeira/SP
                </p>
                
            </div>
            <div className="bg-[#1F243E] w-[500px] 2xl:w-[1000px] border border-yellow-500 p-8 rounded-md text-white text-center text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error accusamus neque earum dolore. Distinctio nam eos aspernatur perspiciatis eaque! Illo esse adipisci modi consequatur sapiente recusandae consequuntur quia est officiis.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error accusamus neque earum dolore. Distinctio nam eos aspernatur perspiciatis eaque! Illo esse adipisci modi consequatur sapiente recusandae consequuntur quia est officiis.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error accusamus neque earum dolore. Distinctio nam eos aspernatur perspiciatis eaque! Illo esse adipisci modi consequatur sapiente recusandae consequuntur quia est officiis.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error accusamus neque earum dolore. Distinctio nam eos aspernatur perspiciatis eaque! Illo esse adipisci modi consequatur sapiente recusandae consequuntur quia est officiis.
            </div>
        </div>
    )
}

export default App
