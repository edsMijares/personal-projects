import Btn from "../components/reusable/Btn";
import { FaDownload, FaPaperPlane } from "react-icons/fa6";
import { SiFacebook, SiLinkedin, SiGithub, SiPhp, SiLaravel, SiReact, SiHtml5, SiCss3, SiJavascript, SiGit, SiMysql } from "react-icons/si";
import Carousel from "../components/reusable/Carousel";
import StatBox from "../components/reusable/StatBox";
import Form from "../components/Form";
import Inp from "../components/reusable/Inp";
import Txt from "../components/reusable/Txt";
function Home() {
    return (
        <>
            <section className="flex flex-row w-full justify-evenly leading-none">
                <article className="leading-none my-auto">
                    <span className="text-secondary-gray text-[25px]">
                        Turning ideas into functional web and desktop apps.
                    </span>
                    <div className="flex gap-2">
                        <span className="text-secondary-gray font-bold text-[100px]">I'm</span>
                        <span className="text-primary-blue font-bold text-[100px]">Edison</span>
                    </div>
                    <span className="text-white-bluedrop text-[55px]">Full-Stack Web Developer</span>
                    <div className="bg-secondary-blue w-[110%] h-[20px] rounded-3xl mt-5"></div>
                    <div className="bg-secondary-blue w-[130%] h-[20px] rounded-3xl mt-5"></div>
                    <div className="bg-secondary-blue w-[90%] h-[20px] rounded-3xl mt-5"></div>
                    <Btn className="mt-10 text-lg font-bold py-2" name='Download CV' Icon={FaDownload} />
                    <div className="flex flex-row gap-5 mt-5">
                        <SiFacebook className="text-4xl text-secondary-gray cursor-pointer"/>
                        <SiLinkedin className="text-4xl text-secondary-gray cursor-pointer"/>
                        <SiGithub className="text-4xl text-secondary-gray cursor-pointer"/>
                    </div>
                </article>
                <article>
                    <img width={500} src="/images/me.png" alt="Edison" />
                </article>
            </section>
            <section className="bg-primary-gray text-secondary-gray py-10">
                <Carousel>
                    <SiPhp className="text-7xl mx-auto"/>
                    <SiLaravel className="text-7xl mx-auto"/>
                    <SiReact className="text-7xl mx-auto"/>
                    <SiHtml5 className="text-7xl mx-auto"/>
                    <SiCss3 className="text-7xl mx-auto"/>
                    <SiJavascript className="text-7xl mx-auto"/>
                    <SiGit className="text-7xl mx-auto"/>
                    <SiMysql className="text-7xl mx-auto"/>
                </Carousel>
            </section>
            <section className="flex flex-row">
                <article className="w-1/2 p-10">
                    <h2 className="text-4xl font-bold text-white mb-2">Introduction</h2>
                    <div className="bg-primary-blue w-[50%] h-[15px] rounded-3xl"></div>
                    <div className="w-full mx-auto mt-5 text-lg">
                        <p className="text-secondary-gray mb-5">
                            Hi, I’m Edison Mijares, a Web Developer with 2 years of experience. I specialize in building modern web applications and have a strong skill in debugging and solving complex issues.
                        </p>
                        <p className="text-secondary-gray">
                            My journey in web development has equipped me with the skills to tackle complex challenges and continuously adapt to the ever-evolving tech landscape. I thrive in collaborative environments and am always eager to learn new technologies to enhance my craft.
                        </p>
                    </div>
                    <div className="flex flex-row text-white mt-5 justify-between">
                        <StatBox title="Experience" value="2 yrs" />
                        <StatBox title="Production Projects" value="10+" />
                        <StatBox title="Personal Projects" value="1" />
                    </div>
                </article>
                <article className="flex flex-col w-1/2 bg-primary-gray m-5 rounded-2xl">
                    <div className="m-5 mb-0">
                        <h2 className="text-4xl font-bold text-white mb-2">Send me an Email</h2>
                        <div className="bg-primary-blue w-[60%] h-[15px] rounded-3xl"></div>
                    </div>
                    <Form className="flex-grow mx-10 mt-10">
                        <Inp type="text" placeholder="Your Name" className="w-full p-3 rounded-md"/>
                        <Inp type="email" placeholder="Your Email" className="w-full p-3 rounded-md"/>
                        <Inp type="text" placeholder="Subject" className="w-full p-3 rounded-md"/>
                        <Txt placeholder="Your Message"/>
                        <Btn type="submit" name="Send Message" Icon={FaPaperPlane} className="mx-auto mb-7 text-2xl" />
                    </Form>
                </article>
            </section>
        </>
    )
}
export default Home; 