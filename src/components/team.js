import { Card, Image } from 'semantic-ui-react'

const teamData = [
  {
    src: 'https://semantic-ui.com/images/avatar/small/joe.jpg',
    name: "Hec",
    date: "2021",
    title: "Director"
  },
  {
    src: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg',
    name: "Ryan",
    date: "2021",
    title: "Director"
  },
  {
    src: 'https://react.semantic-ui.com/images/avatar/small/steve.jpg',
    name: "Evan",
    date: "2022",
    title: "Data Scientist"
  },
  {
    src: 'https://semantic-ui.com/images/avatar/small/daniel.jpg',
    name: "Jose",
    date: "2022",
    title: "Developer"
  },
  {
    src: 'https://semantic-ui.com/images/avatar/small/veronika.jpg',
    name: "Kaitlin",
    date: "2022",
    title: "Data Scientist"
  },
  {
    src: 'https://semantic-ui.com/images/avatar/small/helen.jpg',
    name: "Maylene",
    date: "2022",
    title: "Developer"
  },
  {
    src: 'https://semantic-ui.com/images/avatar/small/christian.jpg',
    name: "Nile",
    date: "2022",
    title: "Developer"
  },
  {
    src: 'https://semantic-ui.com/images/avatar/small/stevie.jpg',
    name: "Tameca",
    date: "2022",
    title: "Data Scientist"
  },
  {
    src: 'https://semantic-ui.com/images/avatar/small/nan.jpg',
    name: "Yuksel",
    date: "2022",
    title: "Data Scientist"
  },
  {
    src: 'https://semantic-ui.com/images/avatar/small/justen.jpg',
    name: "Yupeng",
    date: "2022",
    title: "Developer"
  }

]

const TeamCard = (props) => (
    <Card>
      <Image src={props.src} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Card.Description>
          {props.title}
        </Card.Description>
      </Card.Content>
      
    </Card>
)

const Team = () => {
    return (
      <div className='team'>
        <div className='row'>
          {teamData.filter((e, i) => i < 5).map((e, i) => {
            return (
              <TeamCard
                key={i}
                src={e.src}
                name={e.name}
                date={e.date}
                title={e.title} 
              />
            )
          })}
        </div>
        <div className='row'>
          {teamData.filter((e, i) => i >= 5).map((e, i) => {
            return (
              <TeamCard
                key={i}
                src={e.src}
                name={e.name}
                date={e.date}
                title={e.title} 
              />
            )
          })}
        </div>  
      </div>
    )
}

export default Team;