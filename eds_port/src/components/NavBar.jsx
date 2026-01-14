import Link from './reusable/Link';
import Btn from './reusable/Btn';
import { FaPhone } from "react-icons/fa6";

function NavBar() {
    return (
        <section className="flex flex-row">
            <div>
                <img className='m-4' src='/images/logo_text.svg' alt="Logo"/>
            </div>
            <nav className='flex flex-row ms-auto me-5'>
                <Link name='Home' link='/'/>
                <Link name='Projects' link='/projects'/>
                <Link name='About' link='/about'/>
            </nav>

            <Btn className="mx-5 text-lg font-bold py-2" name='Contact Me' Icon={FaPhone} />
        </section>
    );
}
export default NavBar;
