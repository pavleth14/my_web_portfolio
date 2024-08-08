import image from '../assets/pavle.jpg'

const Header = () => {

    return ( 

        <div className="header">
            
            <div className='divProfileImg'>
                <img src={image} alt="asdf" />
            </div>

            <ul className="headerUl">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>

        </div>

     );
}
 
export default Header;
