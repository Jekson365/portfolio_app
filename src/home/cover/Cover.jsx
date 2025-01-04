import Me from '../../assets/unnamed.jpg';
import {useEffect, useState} from "react";

export const Cover = () => {
    const [scrolled,setScrolled] = useState(false);
    const handleScroll = () => {
        setScrolled(true)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <div
                className={`main-cover ${scrolled ? 'scrolled' : ''}`}>
                <div className={'image-cover'}
                     data-aos={'fade-up'}
                     data-aos-duration={1000}
                     style={{backgroundImage: `url(${Me})`}}>
                </div>
                <div className={'content'}>
                    <h1
                        data-aos={'fade-up'}
                        data-aos-duration={1300}
                    >Hi! My name is Jeko</h1>
                    <div className={'desc'}
                         data-aos={'fade-up'}
                         data-aos-duration={1300}
                    >
                        Friendly, motivated, and passionate web developer with 3 years of experience in both
                        front-end and <br/>back-end development.
                    </div>
                </div>
            </div>
        </>
    )
}