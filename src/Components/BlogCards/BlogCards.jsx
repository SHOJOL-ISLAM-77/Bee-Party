import { FaCaretDown } from "react-icons/fa";
import { PropTypes } from "prop-types";

const BlogCards = ({card}) => {
    const {title,date,author, author_img,content,img} = card;
    return (
        <div>
            <div className="flex flex-col justify-between items-center max-w-sm md:max-w-md xl:max-w-xl gap-3  mx-auto my-10">
                <div className='mx-2 p-5 lg:card-body bg-base-content text-white shadow-xl rounded-xl flex flex-col justify-center items-center relative' >
                    <img className="lg:h-60 h-48 w-full " src={img} alt="" />
                    <h3 className="text-lg lg:text-xl py-3 h-16 underline lg:leading-none  leading-[17px]">{title}</h3>
                    <p className="h-11 text-sm">{content}</p>
                    <FaCaretDown className='text-4xl text-black absolute -bottom-5'></FaCaretDown>
                </div>
                <div className='flex gap-5 text-black items-center'>
                    <img src={author_img} className='w-14 h-14 rounded-full' alt="" />
                    <div>
                    <h5 className='card-title py-2 '>{author}</h5>
                    <p>{date}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCards;

BlogCards.propTypes={
    card : PropTypes.any
}

