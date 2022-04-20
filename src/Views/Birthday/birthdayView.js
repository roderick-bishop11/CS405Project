import { Typography } from "antd";
import PersonCard from "../../Components/PersonCard";
import ReactElasticCarousel from "react-elastic-carousel";

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

const Birthdays = ({ people, setPerson }) => {
  return (
    <div>
        <Typography.Text>{people.length} birthdays today</Typography.Text>
          
<ReactElasticCarousel>
{people.map(person =>(
                <PersonCard key={person.id} person={person}/>
            )) }
</ReactElasticCarousel>
    </div>

  );
};
export default Birthdays;
