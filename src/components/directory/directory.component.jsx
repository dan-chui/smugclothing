import CategoryItem from '../category-item/category-item.component';

import './directory.styles.scss';

const Directory = ({categories}) => {
    return (
    <div className="directory-container">
        {categories.map((department) => (
        <CategoryItem key={department.id} department={department}/>
    ))}            
    </div>
    );
};

export default Directory