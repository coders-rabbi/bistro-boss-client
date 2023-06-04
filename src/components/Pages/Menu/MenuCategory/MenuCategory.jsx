import PopularCard from '../../../PopularMenu/PopularCard';
import Cover from '../../Shared/Cover';

const MenuCategory = ({ items, title, img }) => {
    return (
        <div className='pt-8'>
            {title && <Cover img={img} title={title}></Cover>}
            <div className='grid md:grid-cols-2 gap-6 my-16 '>
                {
                    // Popular Card or MenuItem 
                    items.map(item => <PopularCard
                        key={item._id}
                        items={item}
                    ></PopularCard>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;