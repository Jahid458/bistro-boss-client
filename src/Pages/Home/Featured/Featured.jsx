import SectionTitle from "../../../components/SectionTitle";
import featureImg from '../../../assets/home/featured.jpg';
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle 
                 heading="Featured Item"
                 subHeading="check it out"
            ></SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60  pb-20 pt-12 px-36">
                <div>
                    <img src={featureImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20,2029</p>
                    <p className="uppercase">where can i get some</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum et reprehenderit, harum perferendis fugit corrupti alias illum minima? Laboriosam quo ab eaque impedit voluptas magnam? Delectus aliquid rem vel ullam harum nostrum error repudiandae pariatur corporis inventore corrupti quas sit ex nesciunt quod est, necessitatibus a illo tenetur deleniti commodi?</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;