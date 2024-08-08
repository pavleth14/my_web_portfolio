import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Dodaj ikone za strelice
import Skills from "./Skills";

const MyInformation = () => {

    const experience = [
        'React & JavaScript: Crafting efficient, scalable, and maintainable code with React, leveraging the latest features of JavaScript (ES6+).',
        'Architecture: Developing reusable and modular components, ensuring consistency and reducing redundancy across applications.',
        'State Management: Utilizing tools like Redux and React Context to manage complex application state, ensuring data flows smoothly and predictably.',
        'Responsive Design: Implementing responsive designs that provide an optimal viewing experience across a wide range of devices, from desktop computers to mobile phones.',
        'API Integration: Seamlessly integrating RESTful APIs to fetch and display dynamic data, enhancing the interactivity and functionality of web applications.',
        'Version Control: Proficient in using Git for version control, enabling collaborative development and efficient project management.'
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex + 1) % experience.length
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex - 1 + experience.length) % experience.length
        );
    };

    const visibleExperience = [
        experience[currentIndex],
        experience[(currentIndex + 1) % experience.length],
        experience[(currentIndex + 2) % experience.length],
        experience[(currentIndex + 3) % experience.length],
    ];

    return (
        <div>
            <h2>About Me</h2>
            <p>Hello! I’m a passionate web developer specializing in building dynamic and responsive web applications using React. With a deep understanding of modern web technologies and a keen eye for detail, I strive to create seamless and user-friendly digital experiences.</p>

            <h2>My Expertise</h2>
            <p>Over the years, I have honed my skills in front-end development, focusing primarily on React, one of the most powerful and versatile JavaScript libraries for building user interfaces. My expertise includes:</p>

            <div style={{ display: 'flex', justifyContent: 'center', border: '1px solid', marginTop: '50px', padding: '20px', background: 'grey' }}>

                <h1 style={{ width: '20%' }}>Here is what I do:  </h1>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid', borderRadius: '20px', width: '80%', background: 'lightgrey' }}>
                    <FaArrowLeft onClick={prevSlide} className='arrow-icon' style={{ cursor: 'pointer', marginRight: '30px', fontSize: '24px' }} />
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'space-between', padding: '10px', width: '82%' }}>
                        {visibleExperience.map((item, index) => (
                            <Skills key={index} item={item} />
                        ))}
                    </div>
                    <FaArrowRight onClick={nextSlide} className='arrow-icon' style={{ cursor: 'pointer', marginLeft: '30px', fontSize: '24px' }} />
                </div>

            </div>

            <h2>My Approach</h2>
            <p>I believe in writing clean, efficient, and well-documented code that is easy to understand and maintain. I stay up-to-date with the latest trends and best practices in web development, constantly seeking to improve and expand my skill set. My goal is to build web applications that not only meet the needs of users but also provide them with an engaging and intuitive experience.</p>
        </div>
    );
}

export default MyInformation;