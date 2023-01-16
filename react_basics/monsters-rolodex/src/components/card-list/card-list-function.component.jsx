import Card from '../card/card-function.component';

import './card-list.styles.css';

// the anonymous function recieves props as the first parameter, so we can deconstruct it 
//directly inside the parameters of the function, as we are doing with the { monsters }
const CardList = ({ monsters }) => {
    return (
        <div className="card-list" >
            {monsters.map((monster) => {
                return (
                    <Card monster={monster} key={monster.id} />
                )
            })}
        </div>
    );
}

export default CardList;
