import Navbar from '../Components/Navbar';
import Card from '../Components/successCard/Card';

const SeeAll = () => {
    return (
        <div className=' bg-gradient-to-r from-black via-blue-600 to-blue-900'>
            <Navbar></Navbar>
            <div className='px-5'>
                <Card></Card>
            </div>
        </div>
    );
};

export default SeeAll;