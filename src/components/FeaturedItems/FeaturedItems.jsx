import featured from "../../assets/home/featured.jpg"
import SectionTitle from '../SectionTitle/SectionTitle';
import './FeaturedItems.css'

const FeaturedItems = () => {
    return (
        <div className="featured-image bg-fixed pt-8 my-20 bg-black">
            <SectionTitle
                subHeading={'--- Check it Our ---'}
                heading={'From our menu'}
            ></SectionTitle>
            <div className="flex justify-center items-center px-36 py-16">
                <div>
                    <img src={featured} alt="" />
                </div>
                <div className="md:ms-10 text-white">
                    <p>March 20, 2023</p>
                    <p className="uppercase">where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, sint non porro magnam optio eius, possimus quidem velit iste, excepturi voluptatibus aspernatur saepe! Dolores repudiandae, omnis reiciendis laboriosam cum ea, autem voluptatem distinctio nulla, consectetur cupiditate voluptate ipsum explicabo facilis reprehenderit ratione quam similique dolorum eligendi aliquam inventore suscipit rem!</p>
                    <button className="btn btn-outline btn-primary border-0 border-b-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedItems;